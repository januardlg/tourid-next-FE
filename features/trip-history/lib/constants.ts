export type IPaymentStatus = 'PENDING' | 'WAITING_VERIFICATION' | 'EXPIRED' | 'PAID' | 'FAILED'
export const PAYMENT_STATUS = {
  PENDING: "Waiting For Payment",
  WAITING_VERIFICATION: "Waiting for Payment Verification",
  EXPIRED: "Expired",
  PAID: "Paid",
  FAILED: "Failed",
};


