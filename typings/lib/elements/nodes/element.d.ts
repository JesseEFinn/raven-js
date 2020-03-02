import { FragmentElement, BaseElement, BaseElementList, Controller, StandardComponent, View } from "lib/common";
export declare class StandardElement extends BaseElement {
    static _tags: {
        [key: string]: StandardElement;
    };
    _root: StandardElement | null | undefined;
    selector: string;
    constructor(target: string | Element | FragmentElement, root?: StandardElement | null, view?: View<StandardComponent<Controller<any>>>);
    root: StandardElement;
    static create(tmpl: string): StandardElement;
}
export declare class StandardElementList extends BaseElementList {
    delegates: StandardElement[];
    selector: string;
    _root: StandardElement | undefined | null;
    constructor(target: string | NodeListOf<Element> | Element[], root?: StandardElement | null, view?: View<StandardComponent<Controller<any>>>);
    setAttr(name: string, value: any): void;
    readonly first: StandardElement;
    readonly last: StandardElement;
    root: StandardElement;
    readonly length: number;
    index(index: number): StandardElement;
    find(predicate: (value: StandardElement, index: number, obj: StandardElement[]) => any): StandardElement | undefined;
    addEventListener(type: string, listener: (this: Element, ev: Event) => any): void;
    _getEls(selector: string): Element[];
}
