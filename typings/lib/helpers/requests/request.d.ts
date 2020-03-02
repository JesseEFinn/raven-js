import { Response } from "lib/helpers";
export declare class HttpRequest {
    XHR: XMLHttpRequest;
    method: string;
    uri: string;
    payload: any;
    cb: Function | undefined;
    response: Response | null;
    isResolved: boolean;
    isRejected: boolean;
    isPending: boolean;
    _promise: Promise<any>;
    _resolve: Function | undefined;
    _reject: Function | undefined;
    constructor(uri: string, cb?: Function, payload?: any, method?: string);
    strap(): void;
    readonly resolve: Function;
    readonly reject: Function;
    readonly pending: Promise<any>;
    readonly isComplete: boolean;
    send(): Promise<any>;
    onComplete(payload: any, status?: number): any;
    onRejected(message: string, status?: number): any;
}
