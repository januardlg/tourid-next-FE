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