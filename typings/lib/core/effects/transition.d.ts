import { TransitionStep, StandardComponent, BaseComponent, Controller } from "lib/common";
export interface TransitionInterface {
    method: string;
    name: string;
    root: string | StandardComponent<Controller<BaseComponent>> | null;
    options: {
        [key: string]: any;
    };
}
export declare function Transition(name: string, root?: string | StandardComponent<Controller<BaseComponent>> | null, options?: {
    [key: string]: any;
}, ...args: []): (...descriptorArgs: any[]) => any;
export declare class StandardTransition {
    name: string | undefined;
    options: {
        [key: string]: any;
    };
    args: any[] | null;
    _root: StandardComponent<Controller<BaseComponent>> | undefined;
    sequence: {
        [key: string]: {
            [key: string]: any;
        };
    };
    processing: Iterable<TransitionStep> | null;
    constructor(name?: string, root?: StandardComponent<Controller<BaseComponent>>, options?: {
        [key: string]: any;
    });
    root: StandardComponent<Controller<BaseComponent>>;
    readonly isProcessing: boolean;
    readonly length: number;
    iterable(): IterableIterator<TransitionStep>;
    first(): TransitionStep;
    next(previous: TransitionStep): void;
    add(name?: string): TransitionStep;
    parallel(name?: string): TransitionStep;
    run(...args: any[]): void;
}
