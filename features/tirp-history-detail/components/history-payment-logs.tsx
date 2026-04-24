import { useEffect, useState } from "react";
import Button from "@/components/button/button";
import { IPaymentStatus, PAYMENT_STATUS } from "@/features/trip-history/lib/constants";
import { OrderPackageTourDetailResponseDTO } from "../lib/trip-history-detail";
import { getChunkAccountNumber, getDateFormatFromDateWithTime, getPaymentStatusText, getRupiahCurrencyFormat } from "@/lib/utils";
import { getCountdownFormatFromSeconds, getPaymentTimeLeftInSeconds } from "../lib/utils";
import { ConfirmPaymentPayloadDTO } from "@/features/trip-history/lib/trip-history";

interface HistoryPaymentLogs {
  packageDetail: OrderPackageTourDetailResponseDTO;
  onConfirmPayment: (dataConfirm: ConfirmPaymentPayloadDTO) => void
}

const HistoryPaymentLogs = ({ packageDetail, onConfirmPayment }: HistoryPaymentLogs) => {
  const paymentStatus = packageDetail?.paymentStatus;

  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    if (timeLeft <= 0) {
      return
    }
    const countdown = setInterval(() => {
      console.log(timeLeft + " seconds remaining");
      setTimeLeft((prev) => prev -= 1)
    }, 1000);

    return () => clearInterval(countdown)
  }, [timeLeft])

  useEffect(() => {
    const timeLeftInSeconds = getPaymentTimeLeftInSeconds(packageDetail?.expiredAt)

    if (timeLeftInSeconds >= 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTimeLeft(timeLeftInSeconds)
    }
  }, [packageDetail])



  return (
    <div className="w-full drop-shadow-2xl bg-white p-6 space-y-4">
      <p className="text-center text-lg font-bold">Payment Status</p>
      <p className="text-center font-bold text-tid-red-100">
        {getPaymentStatusText(paymentStatus?.toUpperCase() as IPaymentStatus)}
      </p>
      <div className="h-0.5 bg-tid-grey-100/10 w-full" />
      {paymentStatus?.toUpperCase() as IPaymentStatus === 'PENDING' ? (
        <>
          <div className="space-y-0 font-semibold">
            <p>Total Payment</p>
            <p className="text-tid-red-100 font-bold">
              {getRupiahCurrencyFormat(packageDetail?.totalPayment)}
            </p>
          </div>
          <div className="space-y-0 ">
            <p className="font-semibold">Complete your payment within : <span className="text-tid-red-100 font-bold"> {getCountdownFormatFromSeconds(timeLeft)}</span></p>
            <p className="">
              Payment Due :{" "}
              <span className="text-tid-red-100 font-bold">
                {getDateFormatFromDateWithTime(packageDetail?.expiredAt)}
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
                {packageDetail?.paymentDestinationAccount ? getChunkAccountNumber(packageDetail.paymentDestinationAccount) : ''}
              </p>
            </div>
            <p>{packageDetail?.paymentMethodName} - PT Tour ID Sejahtera</p>
          </div>
          <p className="text-tid-grey-200">
            After completing the payment, click{" "}
            <span className="text-tid-red-100">“Confirm Payment” </span> to proceed.
          </p>
          <Button onClick={() => {
            onConfirmPayment({
              referenceNumber: packageDetail?.referenceNumber,
              orderTourPackageId: packageDetail?.orderTourPackageId
            })

          }}>
            <p>Confirm Payment</p>
          </Button>
        </>
      ) : (
        <div className="space-y-5">
          {packageDetail?.transactionPaymentLogs?.map((log) => (
            <div key={log.paymentStatusLog}>
              <p className="font-bold">{getPaymentStatusText(log.paymentStatusLog?.toUpperCase() as IPaymentStatus)}</p>
              <p>{getDateFormatFromDateWithTime(log?.createdAtLog)}</p>
            </div>
          ))}
          <Button onClick={() => { }}>
            <p>Share This Activity</p>
          </Button>
        </div>
      )}
    </div>
  );
};

export default HistoryPaymentLogs;
