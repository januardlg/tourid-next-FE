import { PAYMENT_STATUS } from "@/features/trip-history/lib/constants";
import { OrderPackageTourDetailResponseDTO } from "../lib/trip-history-detail";
import { getDateStringFromISO, getRupiahCurrencyFormat } from "@/lib/utils";
import Button from "@/components/button/button";

interface HistoryPaymentLogs {
  packageDetail: OrderPackageTourDetailResponseDTO;
}

const HistoryPaymentLogs = ({ packageDetail }: HistoryPaymentLogs) => {
  const paymentStatus = packageDetail?.paymentStatus;

  return (
    <div className="w-full drop-shadow-2xl bg-white p-6 space-y-4">
      <p className="text-center text-lg font-bold">Payment Status</p>
      <p className="text-center font-bold text-tid-red-100">
        {PAYMENT_STATUS[paymentStatus]}
      </p>
      <div className="h-0.5 bg-tid-grey-100/10 w-full" />
      <div className="space-y-0 font-semibold">
        <p>Total Payment</p>
        <p className="text-tid-red-100 font-bold">
          {getRupiahCurrencyFormat(packageDetail?.totalPayment)}
        </p>
      </div>
      <div className="space-y-0 ">
        <p className="font-semibold">Complete your payment within</p>
        <p className="">
          Payment Due :{" "}
          <span className="text-tid-red-100 font-bold">
            {getDateStringFromISO(packageDetail?.expiredAt)}
          </span>
        </p>
      </div>
      <div className="space-y-2">
        <p className="font-semibold">Payment Instruction</p>
        <p className="text-tid-grey-200">
          Please complete your payment to the account below.
        </p>
        <div>
          <p className="text-tid-red-100 font-bold text-lg">
            {packageDetail?.paymentDestinationAccount}
          </p>
        </div>
        <p>{packageDetail?.paymentMethodName} - PT Tour ID Sejahtera</p>
      </div>
      <p className="text-tid-grey-200">
        After completing the payment, click{" "}
        <span className="text-tid-red-100">“Confirm Payment” </span> to proceed.
      </p>
      <Button onClick={() => {}}>
        <p>Confirm Payment</p>
      </Button>
    </div>
  );
};

export default HistoryPaymentLogs;
