import { Validator, StandardRoute, MatchedRoute, BaseRoute, Controller, BaseComponent, StandardComponent, Application } from "lib/common";
import { Resolver } from "lib/helpers";
export declare class Router extends Resolver {
    controllers: {
        [key: string]: Controller<StandardComponent<Controller<BaseComponent>>>;
    };
    routes: {
        [key: string]: StandardRoute;
    };
    validators: {
        [key: string]: Validator;
    };
    _app: Application | undefined;
    app: Application;
    readonly history: History;
    resolveAndCreateRoutes(): void;
    createRoute(predicate: any, options: BaseRoute | string): void;
    changeURI(uri: string, update?: boolean): void;
    update(): void;
    matchRoute(path: string): MatchedRoute | undefined;
    _parseAndBind(predicate: any): void;
    static _resolvePattern(pattern: string): [RegExp, string[]];
}
