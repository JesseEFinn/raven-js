export interface SignalInterface {
    signal: string;
    scope: string;
    isTrigger: boolean;
    method: string | null;
}
export declare function Signal(signal: string, scope?: string, ...args: []): (...descriptorArgs: any[]) => any;
