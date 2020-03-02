import { BaseController, Controller, Application, StandardComponent, BaseComponent } from "lib/common";
export declare class MicroController<T extends StandardComponent<Controller<BaseComponent>>, K> extends BaseController<T> {
    cont: Controller<T>;
    _ref: string | undefined;
    static _bound: {
        [key: string]: {
            [key: string]: {
                [key: string]: any;
            };
        };
    };
    constructor(cont: Controller<T>);
    static register(): (cls: any) => any;
    readonly bound: {
        [key: string]: K;
    };
    readonly ref: string;
    app: Application;
    com: T;
    resolveBound(): void;
}
