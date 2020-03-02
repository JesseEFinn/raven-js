import { HttpRequest } from "lib/helpers";
export declare class Resolver {
    constructor();
    readonly uri: string;
    readonly path: string;
    readonly origin: string;
    readonly segments: string[];
    segment(pos: number): string;
    request(uri: string, cb?: Function, payload?: any, method?: string, origin?: string | null): HttpRequest;
    get(uri: string, cb?: Function, payload?: any, origin?: string | null): Promise<any>;
    post(uri: string, cb?: Function, payload?: any, origin?: string | null): Promise<any>;
}
