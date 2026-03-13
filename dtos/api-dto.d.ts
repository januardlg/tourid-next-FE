export interface ApiResponse<TData, TMeta = undefined> {
    statusCode: number;
    status: string;
    message: string;
    data: TData | null;
    meta?: TMeta;
}
