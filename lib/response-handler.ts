import { ApiResponse } from "./api";


export function createResponse<TData, TMeta = undefined>(
    statusCode: number,
    status: string,
    message: string,
    data: TData | null,
    meta?: TMeta
): ApiResponse<TData, TMeta> {
    return {
        statusCode,
        status,
        message,
        data,
        ...(meta !== undefined ? { meta } : {}),
    };
}

export type AppError = Error & {
    status?: number;
};

export function createError(message: string, status: number): AppError {
    const err = new Error(message) as Error & { status: number };
    err.status = status;
    return err;
}
