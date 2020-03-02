import { MicroController, TransitionInterface, StandardComponent, BaseComponent, Controller } from "lib/common";
export declare class Transitions<T extends StandardComponent<Controller<BaseComponent>>> extends MicroController<T, TransitionInterface> {
    _ref: string;
    static bind(name: string, root?: string | StandardComponent<Controller<BaseComponent>> | null, options?: {
        [key: string]: any;
    }, ...args: []): (...descriptorArgs: any[]) => any;
    static _bindCls(target: Function, name: string, root?: string | StandardComponent<Controller<BaseComponent>> | null, options?: {
        [key: string]: any;
    }, ...args: []): any;
    static _bindProperty(target: any, key: string, descriptor: PropertyDescriptor, name: string, root?: string | StandardComponent<Controller<BaseComponent>> | null, options?: {
        [key: string]: any;
    }, ...args: []): PropertyDescriptor;
    resolveBound(predicate?: any): void;
}
