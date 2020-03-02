import { TransitionStep, StandardElement } from "lib/common";
export declare class TransitionTarget {
    step: TransitionStep;
    ref: StandardElement | (() => StandardElement);
    states: {
        [key: string]: {
            [key: string]: any;
        };
    };
    listeners: {
        [key: string]: Function;
    };
    processing: Set<String>;
    constructor(step: TransitionStep, target: string | StandardElement | (() => StandardElement));
    readonly transition: import("./transition").StandardTransition;
    readonly target: StandardElement;
    onBeforeStart(cb?: Function): this;
    onBeforeComplete(cb?: Function): this;
    onStart(addClasses?: string | null, removeClasses?: string | null, cb?: Function): this;
    onComplete(addClasses?: string | null, removeClasses?: string | null, cb?: Function): this;
    start(...args: any[]): void;
    complete(): void;
    startTransitionEvent(e: Event): void;
    endTransitionEvent(e: Event): void;
    _addStartTransitionEvent(): void;
    _addEndTransitionEvent(): void;
    _removeStartTransitionEvent(): void;
    _removeEndTransitionEvent(): void;
}
