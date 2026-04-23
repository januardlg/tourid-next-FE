"use client";

import Button from "@/components/button/button";
import ListBoxTid, { IListOption } from "@/features/home/components/list-box";

import {
  Control,
  Controller,
  UseFormGetValues,
  UseFormHandleSubmit,
} from "react-hook-form";

import { AddOrderPackagePayload } from "../lib/our-tour-detail-schema";
import { getRupiahCurrencyFormat } from "@/lib/utils";

export interface ActionFormProps {
  numberOfGuestListOption: IListOption[];
  paymentMethodOptions: IListOption[];

  numberOfGuest: IListOption;
  handleNumberOfGuest: (value: IListOption) => void;

  paymentMethod: IListOption;
  handleSelectPaymentMethod: (value: IListOption) => void;

  control: Control<AddOrderPackagePayload>;
  getValues: UseFormGetValues<AddOrderPackagePayload>;
  handleSubmit: UseFormHandleSubmit<AddOrderPackagePayload>;
  onSubmit: (data: AddOrderPackagePayload) => void;
  onError: (errors: any) => void;
}

const ActionForm = ({
  numberOfGuestListOption,
  paymentMethodOptions,
  numberOfGuest,
  handleNumberOfGuest,
  paymentMethod,
  handleSelectPaymentMethod,
  control,
  getValues,
  handleSubmit,
  onSubmit,
  onError,
}: ActionFormProps) => {
  return (
    <div className="w-full drop-shadow-2xl bg-white p-6 space-y-3">
      <p className="text-center text-lg font-bold">Booking</p>
      <div className="h-0.5 bg-tid-grey-100/10 w-full" />
      <Controller
        name="numberOfGuests"
        control={control}
        render={({ field, fieldState }) => (
          <ListBoxTid
            label="No Of Guest"
            value={numberOfGuest}
            listOptions={numberOfGuestListOption}
            onChange={(value) => {
              field.onChange(value.id);
              handleNumberOfGuest(value);
            }}
            error={fieldState.error?.message}
          />
        )}
      />

      <Controller
        name="paymentMethodId"
        control={control}
        render={({ field, fieldState }) => (
          <ListBoxTid
            label="Payment Method"
            value={paymentMethod}
            listOptions={paymentMethodOptions}
            onChange={(value) => {
              field.onChange(value.id);
              handleSelectPaymentMethod(value);
            }}
            error={fieldState.error?.message}
          />
        )}
      />

      <p className="text-tid-grey-200 text-center text-sm font-semibold">
        Subtotal
      </p>
      <p className="text-3xl text-tid-red-100 font-black text-center">
        {getRupiahCurrencyFormat(getValues("totalPayment"))}{" "}
      </p>
      <Button onClick={handleSubmit(onSubmit, onError)}>
        <p>Confirm Booking</p>
      </Button>
      <Button variant="OUTLINE" onClick={() => { }}>
        <p>Save To Wishlist</p>
      </Button>
      <Button variant="OUTLINE" onClick={() => { }}>
        <p>Share The Activity</p>
      </Button>
    </div>
  );
};

export default ActionForm;
