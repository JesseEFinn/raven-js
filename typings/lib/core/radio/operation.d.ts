import { Broadcast, Radio, Repeater } from "lib/common";
export declare class Operation {
    radio: Radio;
    broadcast: Broadcast;
    pending: Set<Repeater>;
    completed: Set<Repeater>;
    _before: Operation | undefined;
    _after: Operation | undefined;
    results: {
        [key: string]: any;
    };
    constructor(radio: Radio, input: string, source?: string, resolve?: boolean, ...args: any[]);
    readonly input: string;
    before: Operation;
    after: Operation;
    resolve(...args: any[]): void;
    resolved(key: string, repeater: Repeater): void;
    resolveRepeater(key: string, repeater: Repeater, ...args: any[]): void;
    _definePending(): void;
    readonly isComplete: boolean;
    readonly isIncomplete: number;
}
