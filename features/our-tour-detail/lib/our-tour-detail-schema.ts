import { z } from 'zod'

export const addOrderPackagePayloadSchema = z.object({
    tourPackageId: z.number(),
    paymentMethodId: z.number().min(1, 'Please select payment method'),
    numberOfGuests: z.number().min(1, 'Please select number of guest'),
    totalPayment: z.string().regex(/^\d+(\.\d{1,2})?$/, "must be a valid monetary amount"),
});

export type AddOrderPackagePayload = z.infer<typeof addOrderPackagePayloadSchema>