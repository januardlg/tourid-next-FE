import { OrderPackageTourQueryDTO } from "./trip-history";

export const initialParamsOrderPackageTour: OrderPackageTourQueryDTO = {
    page: '1',
    limit: '3',
    sortBy: 'created_at',
    order: "desc",
    filterBy: 'payment_status',
    filterValue: '',
}