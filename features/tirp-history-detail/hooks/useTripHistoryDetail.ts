// next
import { useRouter } from "next/navigation";

// react query
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// zustand
import { useAppStore } from "@/providers/app-store-provider";

// function request for bff
import { confirmPaymentOrderPackageTour } from "../services/trip-confirmation-payment.client";
import { getTripHistoryDetail } from "../services/trip-history-detail";

// libs, interface, and dtos
import { ApiResponse } from "@/dtos/api-dto";
import { QUERY_KEYS_CONSTANTS } from "@/lib/constants/query-key";
import { AppError } from "@/lib/response-handler";
import { ITermConditionTour } from "@/features/our-tour-detail/components/term-condition-tour";
import {
  ConfirmPaymentPayloadDTO,
  ConfirmPaymentResponseDTO,
} from "@/features/trip-history/lib/trip-history";


export const useTripHistoryDetail = (orderPackageId: string) => {
  const router = useRouter();
  const { setIsOpenModal, setModalContent, setIsOpenLoadingOverlay } =
    useAppStore((store) => store);
  const queryClient = useQueryClient();

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

  // HANDLE CONFIRMATION PAYMENT
  const mutation = useMutation({
    mutationFn: async (payloadConfirmPayment: ConfirmPaymentPayloadDTO) => {
      return await confirmPaymentOrderPackageTour(payloadConfirmPayment);
    },
    onMutate: () => {
      setIsOpenLoadingOverlay(true);
    },
    onSettled: () => {
      setIsOpenLoadingOverlay(false);
    },
    onError: (error: AppError) => {
      setIsOpenModal(true);
      error?.status == 401
        ? setModalContent({
            title: "Error",
            notes: error?.message,
            okText: "Login Now",
            okHanlde: () => {
              router.push("/login");
            },
          })
        : setModalContent({
            title: "Error",
            notes: error?.message,
            cancelText: "I Understand",
          });
    },
    onSuccess: (data: ApiResponse<ConfirmPaymentResponseDTO>) => {
      setIsOpenModal(true);
      data.statusCode === 200
        ? setModalContent({
            title: "Success",
            notes: data.message,
            cancelText: "Got it",
            cancelHandle: () => {
              router.refresh();
            },
          })
        : setModalContent({
            title: "Failed",
            notes: data.message,
            cancelText: "I Understand",
          });
      queryClient.invalidateQueries({
        queryKey:
          QUERY_KEYS_CONSTANTS.ourTour.packageTourDetail(orderPackageId),
      });
    },
  });

  const handleConfirmPayment = async (
    dataConfirm: ConfirmPaymentPayloadDTO,
  ) => {
    mutation.mutate(dataConfirm);
  };

  return {
    TERM_CONDITIONS,
    queryResult,
    handleConfirmPayment,
  };
};
