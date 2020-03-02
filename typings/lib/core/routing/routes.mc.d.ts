import { StandardComponent, BaseComponent, MicroController, BaseRoute, Controller } from "lib/common";
export declare class Routes<T extends StandardComponent<Controller<BaseComponent>>> extends MicroController<T, BaseRoute> {
    _ref: string;
    static bind(pattern: string, ...args: []): (...descriptorArgs: any[]) => any;
    static _bindCls(target: Function, pattern: string, ...args: []): any;
    static _bindProperty(target: any, key: string, descriptor: PropertyDescriptor, pattern: string, ...args: []): PropertyDescriptor;
    resolveBound(predicate?: any): void;
}
