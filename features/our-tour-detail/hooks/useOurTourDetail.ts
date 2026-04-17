import { useState } from "react";

import { IListOption } from "@/features/home/components/list-box";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

import {
  AddOrderPackagePayload,
  addOrderPackagePayloadSchema,
} from "../lib/our-tour-detail-schema";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS_CONSTANTS } from "@/lib/constants/query-key";
import {
  getPackageTourDetailClient,
  getPaymentMethodListClient,
} from "../services/tour-detail.client";
import { ITermConditionTour } from "../components/term-condition-tour";

const PaymentMethodOptions: IListOption[] = [
  { id: "option", name: "Select Payment Method", disabled: true },
  { id: 1, name: "BCA" },
  { id: 2, name: "MANDIRI" },
];

export const useOurTourDetail = (tourId: string) => {
  const queryResultFetch = useQuery({
    queryKey: QUERY_KEYS_CONSTANTS.ourTour.packageTourDetail(tourId),
    queryFn: () => getPackageTourDetailClient(tourId),
    staleTime: 60_000,
  });

  const queryPaymentMethodList = useQuery({
    queryKey: QUERY_KEYS_CONSTANTS.common.paymentMethodList(),
    queryFn: () => {
      // console.log("HIT API PAYMENT METHOD CLIENT")
      return getPaymentMethodListClient();
    },
    staleTime: 60_000,
  });

  console.log("queryPaymentMethodList", queryPaymentMethodList?.data?.data);

  const numberOfGuestListOption: IListOption[] = Array.from([
    { id: "option", name: "Select Number Of Guest", disabled: true },
    ...Array.from(
      { length: queryResultFetch?.data?.data?.quotaRemaining ?? 0 },
      (_, index) => ({ id: index + 1, name: index + 1 }),
    ),
  ]);

  const converterPaymentMethod = queryPaymentMethodList?.data?.data?.map(
    (paymentMethod) => {
      return {
        id: paymentMethod.paymentMethodsId,
        name: paymentMethod.name,
        disabled: !paymentMethod.isActive,
      };
    },
  );

  const paymentMethodListOptions: IListOption[] = [
    { id: "option", name: "Select Payment Method", disabled: true },
    ...(converterPaymentMethod as IListOption[]),
  ];

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
      description: queryResultFetch?.data?.data
        ? `${new Date(
            queryResultFetch.data.data.starDate,
          ).toLocaleDateString()} - ${new Date(
            queryResultFetch.data.data.starDate,
          ).toLocaleDateString()}`
        : "",
    },
    {
      title: "Instant confirmation",
      description: "Don’t wait for the confirmation!",
    },
  ];

  const [numberOfGuest, setNumberOfGuest] = useState(
    numberOfGuestListOption[0],
  );
  const [paymentMethod, setPaymentMethod] = useState(
    paymentMethodListOptions[0],
  );

  const initialAddOrderPackagePayload: AddOrderPackagePayload = {
    tourPackageId: 2,
    paymentMethodId: 0,
    numberOfGuests: 0,
    totalPayment: "0",
  };

  const { control, handleSubmit, formState, setValue, getValues } =
    useForm<AddOrderPackagePayload>({
      resolver: zodResolver(addOrderPackagePayloadSchema),
      defaultValues: initialAddOrderPackagePayload,
    });

  const handleNumberOfGuest = (value: IListOption) => {
    const totalPayment = Number(value.name) * 40000;
    setNumberOfGuest(value);
    setValue("totalPayment", totalPayment.toString());
  };

  const handleSelectPaymentMethod = (value: IListOption) => {
    setPaymentMethod(value);
  };

  const onSubmit: SubmitHandler<AddOrderPackagePayload> = (
    data: AddOrderPackagePayload,
  ) => {
    console.log("data", data);
  };

  const onError: SubmitErrorHandler<AddOrderPackagePayload> = (errors) => {
    console.log("Form Submission Errors:", errors);
  };

  return {
    numberOfGuestListOption,
    paymentMethodListOptions,

    numberOfGuest,
    paymentMethod,
    control,
    formState,
    TERM_CONDITIONS,
    queryResultFetch,
    queryPaymentMethodList,

    handleNumberOfGuest,
    handleSelectPaymentMethod,
    setValue,
    getValues,
    handleSubmit,
    onSubmit,
    onError,
  };
};
