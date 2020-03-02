import { TemplateDelegate } from "handlebars";
import { HttpRequest } from "lib/helpers";
export interface BaseTemplate {
    name: string;
    tmpl: string;
    isUri: boolean;
    args: any[];
    cls: Function;
}
export declare function Template(name: string, tmpl: string, isUri?: boolean, ...args: []): (target: Function) => any;
export declare class StandardTemplate {
    name: string;
    pending: HttpRequest | undefined;
    resolver: Function | undefined;
    _tmpl: string | undefined;
    _compiled: Handlebars.TemplateDelegate | undefined;
    _engine: typeof Handlebars;
    constructor(tmpl: string | Function, name?: string);
    tmpl: string;
    compiled: TemplateDelegate;
    resolve(...args: any[]): HttpRequest | undefined;
    compileFrom(response: any, process?: boolean, ...args: any[]): void;
    process(context?: {}, ...args: any[]): string;
    processAfterAvailable(cb: Function, context?: {}, ...args: any[]): Promise<void>;
}
