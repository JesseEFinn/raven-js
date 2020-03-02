export interface BaseRoute {
    pattern: string;
    regex: RegExp;
    method: string;
    tests: string[];
}
export declare abstract class StandardRoute {
    _delegate: any;
    pattern: string;
    regex: RegExp;
    fn: Function;
    tests: string[];
    constructor(predicate: any, route: BaseRoute);
    readonly app: any;
    readonly router: any;
    delegate: any;
    validate(compare: string): [boolean, any[]];
    getMatches(predicate: string): never[];
    validateTest(predicate: string, test: string): [boolean, any];
}
export declare function Route(pattern: string, ...args: []): (...descriptorArgs: any[]) => any;
export declare class MatchedRoute {
    route: StandardRoute;
    args: any[];
    constructor(route: StandardRoute, args: any[]);
    readonly app: any;
    readonly router: any;
    call(): any;
}
export declare class DeferredRoute extends StandardRoute {
    _delegate: any;
    path: string;
    constructor(predicate: any, route: BaseRoute, path: string);
    resolveFn(): () => Promise<void>;
}
export declare class ActiveRoute extends StandardRoute {
    constructor(predicate: any, route: BaseRoute);
    readonly app: any;
    readonly router: any;
}
