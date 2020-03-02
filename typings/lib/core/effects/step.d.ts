import { TransitionTarget, StandardTransition, StandardElement } from "lib/common";
export declare class TransitionStep {
    transition: StandardTransition;
    name: string;
    targets: Set<TransitionTarget>;
    processing: Set<TransitionTarget>;
    constructor(transition: StandardTransition, name?: string);
    target(target: string | StandardElement | (() => StandardElement)): TransitionTarget;
    start(previous?: TransitionStep, ...args: any[]): void;
    complete(target: TransitionTarget): void;
    next(previous: TransitionStep): void;
}
