import { MicroController, Application, BaseComponent } from "lib/common";
export declare class BaseController<T extends BaseComponent> {
    _cls: any;
    _com: T | undefined;
    _app: Application | undefined;
    app: Application;
    com: T;
}
export declare class Controller<T extends BaseComponent> extends BaseController<T> {
    static registry: MicroController<any, any>[];
    _microcontrollers: MicroController<any, any>[];
    resolved: {
        [key: string]: MicroController<any, any>;
    };
    constructor(app?: Application);
    readonly microcontrollers: MicroController<any, any>[];
    init(): void;
    bindComponent(): void;
    resolveMicroController(name: string, cls?: MicroController<any, any>): void;
    resolveMicroControllerByType(type: string): void;
    getMicroControllerByType(type: string): MicroController<any, any> | undefined;
}
