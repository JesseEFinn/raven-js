export declare class Response {
    payload: string;
    status: number | undefined;
    isSuccessful: boolean;
    constructor(payload: string, isSuccessful?: boolean, status?: number);
}
