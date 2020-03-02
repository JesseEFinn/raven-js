import { StandardTemplate } from "lib/common";
import { Resolver } from "lib/helpers";
export declare class TemplateEngine {
    engine: typeof Handlebars;
    resolver: Resolver;
    named: {
        [key: string]: StandardTemplate;
    };
    constructor();
    create(tmpl: string | Function, name?: string, overwrite?: boolean): StandardTemplate;
    process(name: string, ...args: any[]): string;
    processAfterAvailable(name: string, cb: Function, ...args: any[]): Promise<void>;
    template(name: string): StandardTemplate;
    bindHelpers(): void;
}
