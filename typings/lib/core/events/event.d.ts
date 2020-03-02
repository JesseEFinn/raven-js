export interface EventInterface {
    resolver: Function | null;
    el: string | null;
    parent: string | Document | Window | null;
    event: string;
    isSelector: boolean;
    method: string;
    test: string | null;
    args: any[];
}
export declare function BaseEvent(el: string | null, opts?: {}, ...args: []): (...descriptorArgs: any[]) => any;
export declare function UXDragEvent(el: string | null, opts?: {}): (...descriptorArgs: any[]) => any;
export declare function UXDropEvent(el: string | null, opts?: {}): (...descriptorArgs: any[]) => any;
