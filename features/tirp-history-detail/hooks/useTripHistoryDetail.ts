import { ITermConditionTour } from "@/features/our-tour-detail/components/term-condition-tour";
import { QUERY_KEYS_CONSTANTS } from "@/lib/constants/query-key";
import { useMutation, useQuery } from "@tanstack/react-query";
import getTripHistoryDetail from "../services/trip-history-detail";
import { useAppStore } from "@/providers/app-store-provider";
import { confirmPaymentOrderPackageTour } from "../services/trip-confirmation-payment.client";
import { ConfirmPaymentPayloadDTO, ConfirmPaymentResponseDTO } from "@/features/trip-history/lib/trip-history";
import { AppError } from "@/lib/response-handler";
import { useRouter } from "next/navigation";
import { ApiResponse } from "@/dtos/api-dto";
import { makeQueryClient } from "@/lib/query";

export const useTripHistoryDetail = (orderPackageId: string) => {

  const router = useRouter()
  const { setIsOpenModal, setModalContent } = useAppStore((store) => store)
  const queryClient = makeQueryClient();

  const queryResult = useQuery({
    queryKey: QUERY_KEYS_CONSTANTS.ourTour.packageTourDetail(orderPackageId),
    queryFn: () => getTripHistoryDetail(orderPackageId),
    staleTime: 60_000,
  });

  const TERM_CONDITIONS: ITermConditionTour[] = [
    {
      title: "Free Cancelation",
      description: "Cancel up to 24 hours in advance to receive a full refund",
    },
    {
      title: "Health precautions",
      description: "Special health and safety measures apply. Learn more",
    },
    {
      title: "Mobile ticketing",
      description: "Use your phone or print your voucher",
    },
    {
      title: "Health precautions3",
      description: "Special health and safety measures apply. Learn more",
    },
    {
      title: "Duration",
      description: "",
    },
    {
      title: "Instant confirmation",
      description: "Don’t wait for the confirmation!",
    },
  ];


  // HANDLE CREATE ORDER
  const mutation = useMutation({
    mutationFn: async (payloadConfirmPayment: ConfirmPaymentPayloadDTO) => {
      return await confirmPaymentOrderPackageTour(payloadConfirmPayment)
    },
    onError: (error: AppError, variables, context) => {
      // An error happened!
      setIsOpenModal(true)
      setModalContent({
        title: error?.status ? error?.status.toString() : 'Error',
        notes: error?.status === 401 ? error?.message + ' - go to login page?' : error?.message,
        okText: 'OK',
        okHanlde: () => {
          router.push('/login')
        },
      })
    },
    onSuccess: (data: ApiResponse<ConfirmPaymentResponseDTO>, variables, context) => {
      // Boom baby!
      const queryKey = QUERY_KEYS_CONSTANTS.ourTour.packageTourDetail(orderPackageId)
      queryClient.invalidateQueries(queryKey)
      setIsOpenModal(true)

      data.statusCode === 200 ?
        setModalContent({
          title: 'Success',
          notes: data.message + ' please wait for our verification',
          cancelHandle: () => {
            router.push('/trip-history/' + orderPackageId)
          },
        }) : setModalContent({
          title: 'Failed ',
          notes: data.message,
        })
    },
  })

  const handleConfirmPayment = async (dataConfirm: ConfirmPaymentPayloadDTO) => {
    await mutation.mutate(dataConfirm)
  }

  return {
    TERM_CONDITIONS,
    queryResult,
    handleConfirmPayment
  };
};
