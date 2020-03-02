import { BaseTemplate } from "./template";
import { MicroController } from "../controller/microcontroller";
import { Controller } from "../controller/controller";
import { BaseComponent, StandardComponent } from "lib/common";
export declare class Templates<T extends StandardComponent<Controller<BaseComponent>>> extends MicroController<T, BaseTemplate> {
    _ref: string;
    static bind(name: string, tmpl: string | Function, isUri?: boolean, ...args: []): (target: Function) => any;
    resolveBound(predicate?: any): void;
    _resolveRemote(uri: string, cb: Function): import("../../helpers").HttpRequest;
}
