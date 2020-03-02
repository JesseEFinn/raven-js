import { StandardTransition, StandardComponent, BaseComponent, Controller } from "lib/common";
export declare class Animator {
    transitions: {
        [key: string]: StandardTransition;
    };
    transition(name?: string, root?: StandardComponent<Controller<BaseComponent>>, options?: {
        [key: string]: any;
    }): StandardTransition;
    _parseAndBind(predicate: any): void;
}
