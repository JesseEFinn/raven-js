import { StandardComponent, BaseComponent, MicroController, Controller, SignalInterface } from "lib/common";
export declare class Signals<T extends StandardComponent<Controller<BaseComponent>>> extends MicroController<T, SignalInterface> {
    _ref: string;
    static bind(signal: string, ns?: string, ...args: []): (...descriptorArgs: any[]) => any;
    static _bindCls(target: Function, signal: string, scope?: string, ...args: []): any;
    static _bindProperty(target: any, key: string, descriptor: PropertyDescriptor, signal: string, scope?: string, ...args: []): PropertyDescriptor | ((...args: any[]) => void);
    resolveBound(predicate?: any): void;
}
