export interface OrderPackageResponseDTO {
  orderTourPackageId: number;
  packageTourName: string;
  packageTourStartDate: Date;
  packageTourEndDate: Date;
  hostelryName: string;
  hostelryLocation: string;
  hostelryAddress: string;
  paymentStatus: string;
  paymentMethodName: string;
  paymentDestinationAccount: string;
  numberOfGuests: number;
  totalPayment: string;
  referenceNumber: string;
  createdAt: Date,
  expiredAt: Date,
}


export interface OrderPackageTourQueryDTO {
  page: string;
  limit: string;
  sortBy: string;
  order?: "asc" | "desc";
  filterBy?: string;
  filterValue?: string;
}


export interface MetaOrderPackageTourDTO {
  page: number;
  limit: number;
  totalPages: number;
  totalData: number;
  sortBy: string;
  order: "asc" | "desc";
  filterBy: string;
  filterValue: string;
}


export const ConfirmPaymentPayloadSchema = z.object({
  referenceNumber: z.string(),
  orderTourPackageId: z.number()
})


export type ConfirmPaymentPayloadDTO = z.infer<typeof ConfirmPaymentPayloadSchema>;

export interface ConfirmPaymentResponseDTO {
  orderTourPackageId: number;
  referenceNumber: string;
  paymentStatus: string;
}
