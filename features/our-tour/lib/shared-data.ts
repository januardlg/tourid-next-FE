import { PackageTourQueryDTO } from "./package-tour.dto";

export const intialParamsPackageTour: PackageTourQueryDTO ={
    page: '1',
    limit: '2',
    sortBy: 'created_at',
    order: "desc",
    filterBy: 'name_package',
    filterValue: '',
}