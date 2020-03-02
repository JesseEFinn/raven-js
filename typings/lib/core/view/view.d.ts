import { StandardTemplate, StandardElementList, StandardElement, StandardComponent, Controller } from "lib/common";
export declare class View<T extends StandardComponent<Controller<T>>> {
    _root: StandardElement | undefined;
    _els: {
        [key: string]: StandardElementList;
    } | undefined;
    _tmpl: StandardTemplate | undefined;
    _com: T | undefined;
    _cont: Controller<T> | undefined;
    _parent: View<T> | undefined;
    isShowing: boolean;
    isHiding: boolean;
    isLoading: boolean;
    isHidden: boolean;
    isVisible: boolean;
    isLoaded: boolean;
    isInitialized: boolean;
    name: string;
    selector: string;
    fragments: {
        [key: string]: string | Function;
    };
    _children: {
        [key: string]: View<T>;
    };
    constructor(name?: string);
    root: StandardElement;
    tmpl: StandardTemplate;
    parent: View<T>;
    readonly cont: Controller<T>;
    com: T;
    readonly isChangingVisibility: boolean;
    readonly isReady: boolean;
    child(name: string): View<T>;
    load(init?: boolean): Promise<void>;
    onLoaded(init?: boolean): void;
    init(): void;
    onInit(): void;
    show(...args: any[]): void;
    onShow(...args: any[]): void;
    onBeforeShow(): void;
    onAfterShow(): void;
    hide(): void;
    onHide(): void;
    onBeforeHide(): void;
    onAfterHide(): void;
    attach(predicate: View<T>, name?: string | null, show?: boolean): void;
    attachTo(target: T | View<T>): void;
    onAttachedTo(): void;
    el(el: string | Element, update?: boolean): StandardElement;
    list(el: string | NodeListOf<Element>, update?: boolean): StandardElementList;
    readonly els: {
        [key: string]: StandardElementList;
    };
    _getEl(name: string, update?: boolean): StandardElementList;
    _getEls(update?: boolean): {
        [key: string]: StandardElementList;
    };
    _getRoot(selector?: string): StandardElement;
    _normalizeFragments(): void;
    _normalizeFragment(fragment: string, depth?: number): string | Function;
    _normalizeViewFragment(fragment: string, depth?: number): () => StandardElementList | null;
    _normalizeStandardFragment(fragment: string, depth?: number): string;
    _parseAndBindEvents(): void;
    _parseAndBindTemplates(): void;
}
