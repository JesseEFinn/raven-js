import { FragmentElement, Application, View, StandardComponent, Controller } from "lib/common";
export declare class BaseElement {
    _root: BaseElement | null | undefined;
    _view: View<StandardComponent<Controller<any>>> | undefined;
    _delegate: Element | undefined;
    constructor(target: string | Element | FragmentElement, root?: BaseElement | null, view?: View<StandardComponent<any>>);
    readonly app: Application;
    view: View<StandardComponent<any>>;
    delegate: Element;
    root: BaseElement;
    readonly parent: import("./nodes/element").StandardElement;
    clone(isDeep?: boolean): import("./nodes/element").StandardElement;
    remove(): void;
    readonly x: number;
    readonly y: number;
    readonly xOffset: number;
    readonly yOffset: number;
    readonly coordinates: number[];
    readonly offsetCoordinates: number[];
    readonly width: number;
    readonly height: number;
    readonly center: number[];
    readonly prev: BaseElement | null;
    readonly next: BaseElement | null;
    sibling(name?: string, offset?: number): BaseElement | null;
    HTML: string;
    innerHTML: string;
    readonly outerHTML: string;
    closestParent(selector: string): import("./nodes/element").StandardElement | null;
    closestChild(selector: string): import("./nodes/element").StandardElement | null;
    closest(selector: string): import("./nodes/element").StandardElement | null;
    datum(name: string): string;
    data(...names: string[]): {
        [key: string]: string;
    };
    setDatum(name: string, value: string): void;
    setData(data: {
        [key: string]: string;
    }): void;
    removeDatum(datum: string): void;
    removeData(data: string[]): void;
    attr(name: string): string | null;
    setAttr(name: string, value: any): void;
    addEventListener(type: string, listener: (this: Element, ev: Event) => any): void;
    removeEventListener(type: string, listener: (this: Element, ev: Event) => any): void;
    appendTo(target?: BaseElement): void;
    append(content: BaseElement): void;
    querySelector(selector: string): Element | null;
    querySelectorAll(selector: string): NodeListOf<Element>;
    getStyle(property: string): CSSStyleDeclaration;
    setStyle(property: string, value: any): void;
    setStyles(properties: {
        [key: string]: any;
    }): void;
    removeStyle(property: string): void;
    removeStyles(properties: string[]): void;
    getClass(name: string): string | undefined;
    getClasses(): string[];
    addClass(name: string): void;
    addClasses(names: string[] | string): void;
    removeClass(name: string): void;
    removeClasses(names: string[] | string): void;
    replaceClass(remove: string, add: string): void;
    replaceClasses(remove: string[] | string, add: string[] | string): void;
    toggleClass(flavorA: string, flavorB: string): void;
    hasClass(name: string): boolean;
    hasClasses(names: string[]): boolean;
    excludeClasses(names: string[] | string): string[];
    sameClasses(names: string[] | string): string[];
    _getEl(selector: string): Element;
}
export declare class BaseElementList {
    _view: View<StandardComponent<any>> | undefined;
    constructor(view?: View<StandardComponent<any>>);
    view: View<StandardComponent<any>>;
}
