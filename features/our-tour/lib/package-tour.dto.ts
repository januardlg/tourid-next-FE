
export interface PackageTourQueryDTO {
    page: string;
    limit: string;
    sortBy: string;
    order?: "asc" | "desc";
    filterBy?: string;
    filterValue?: string;
}

export interface IActivityTitle {
    id: number,
    title: string,
}

export interface IActivity {
    day: number,
    titleList: IActivityTitle[]
}

export interface PackageTourProductDTO {
    packageId: number,
    namePackage: string,
    cost: string,
    description: string,
    starDate: Date,
    endDate: Date,
    activities: IActivity[],
    hostelryPartnerId: number,
    quota: number,
    quotaRemaining?: number;
    hostelryPartnerName?: string;
    hostelryPartnerLocation?: string;
    hostelryAddress?: string;
    createdAt: Date,
    updatedAt: Date,
}

export interface MetaDataPackageTourDTO {
    page: number;
    limit: number;
    totalPages: number;
    totalData: number;
    sortBy: string;
    order: "asc" | "desc";
    filterBy: string;
    filterValue: string;
}
