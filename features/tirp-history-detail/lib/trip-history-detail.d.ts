import { OrderPackageResponseDTO } from "@/features/trip-history/lib/trip-history";

export interface TransactionPaymentLogDTO {
  paymentStatusLog: string;
  createdAtLog: Date;
}
export interface OrderPackageTourDetailResponseDTO extends OrderPackageResponseDTO {
  transactionPaymentLogs: TransactionPaymentLogDTO[];
  packageTourDescription: string;
  packageTourActivities: IActivity[];
}
