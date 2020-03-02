import { Component, BaseComponent, StandardComponent, TemplateEngine, Router, Animator, Controller } from "lib/common";
export declare class BaseApplication extends BaseComponent {
    components: {
        [key: string]: Component<Controller<StandardComponent<Controller<BaseComponent>>>>;
    };
    selector: string;
    tmpl: TemplateEngine;
    router: Router;
    animator: Animator;
    create(): void;
    init(...args: []): void;
    onInit(): void;
    onCreate(): void;
    readonly coms: {
        [key: string]: Component<Controller<StandardComponent<Controller<BaseComponent>>>>;
    };
    com(name: string): Component<Controller<StandardComponent<Controller<BaseComponent>>>>;
    loadComponent(name: string): void;
    bindComponent(com: Component<Controller<StandardComponent<Controller<BaseComponent>>>>, name?: string): void;
    bindComponents(...coms: Component<Controller<StandardComponent<Controller<BaseComponent>>>>[]): void;
    start(coms: Component<Controller<StandardComponent<Controller<BaseComponent>>>>[]): void;
    onStart(): void;
    initComponent(com: Component<Controller<StandardComponent<Controller<BaseComponent>>>>): void;
    hasComponent(name: string): boolean;
}
export declare class Application extends BaseApplication {
    constructor();
}
