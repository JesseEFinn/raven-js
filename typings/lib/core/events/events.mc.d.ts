import { MicroController, EventInterface, StandardComponent, BaseComponent, Controller } from "lib/common";
export declare class Events<T extends StandardComponent<Controller<BaseComponent>>> extends MicroController<T, EventInterface> {
    _ref: string;
    static bind(resolver: Function | null, el: string | null, parent?: string | Document | Window | null, test?: string | null, event?: string, name?: string, isSelector?: boolean, opts?: {
        [key: string]: any;
    }): (...descriptorArgs: any[]) => any;
    static _bindCls(target: Function, resolver: Function | null, el: string | null, parent?: string | Document | Window | null, test?: string | null, event?: string, name?: string, isSelector?: boolean, opts?: {
        [key: string]: any;
    }): any;
    static _bindProperty(target: any, key: string, descriptor: PropertyDescriptor, resolver: Function | null, el: string | null, parent?: string | Document | Window | null, test?: string | null, event?: string, name?: string, isSelector?: boolean, opts?: {
        [key: string]: any;
    }): PropertyDescriptor;
    resolveBound(predicate?: any): void;
}
