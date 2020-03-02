declare module "lib/services/service" {
    export class Service {
    }
}
declare module "lib/services/servicable" {
    export abstract class Servicable {
    }
}
declare module "lib/services/ux/service/elements/base" {
    export class BaseElement<P> {
        _root: BaseElement<P> | null | undefined;
        _provider: P | undefined;
        _delegate: Element | undefined;
        constructor(target: string | Element, root?: BaseElement<P> | null, provider?: P);
        get provider(): P;
        set provider(provider: P);
        get delegate(): Element;
        set delegate(delegate: Element);
        get root(): BaseElement<P>;
        set root(root: BaseElement<P>);
        get parent(): BaseElement<P>;
        clone(isDeep?: boolean): any;
        remove(): void;
        get x(): number;
        get y(): number;
        get xOffset(): number;
        get yOffset(): number;
        get coordinates(): number[];
        get offsetCoordinates(): number[];
        get width(): number;
        get height(): number;
        get center(): number[];
        get prev(): BaseElement<P> | null;
        get next(): BaseElement<P> | null;
        sibling(name?: string, offset?: number): BaseElement<P> | null;
        get HTML(): string;
        set HTML(html: string);
        get innerHTML(): string;
        set innerHTML(html: string);
        get outerHTML(): string;
        closestParent(selector: string): any;
        closestChild(selector: string): any;
        closest(selector: string): any;
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
        addEventListener(type: string, listener: (this: Element, ev: Event) => any, capture?: boolean): void;
        removeEventListener(type: string, listener: (this: Element, ev: Event) => any): void;
        appendTo(target?: BaseElement<P>): void;
        append(content: BaseElement<P>): void;
        insertBefore(content: BaseElement<P>, ref?: Element | null): void;
        insertAfter(content: BaseElement<P>): void;
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
    export class BaseElementList<P, E extends BaseElement<P>> {
        delegates: E[];
        selector: string;
        _root: BaseElement<P> | null | undefined;
        _provider: P | undefined;
        constructor(target: string | NodeListOf<Element> | Element[], root?: BaseElement<P> | null, provider?: P);
        get root(): BaseElement<P>;
        set root(root: BaseElement<P>);
        get provider(): P;
        set provider(provider: P);
        get first(): E;
        get last(): E;
        get length(): number;
        index(index: number): E;
        find(predicate: (value: E, index: number, obj: E[]) => any): E | undefined;
        addEventListener(type: string, listener: (this: Element, ev: Event) => any): void;
        setAttr(name: string, value: any): void;
        setStyle(property: string, value: any): void;
        _getEls(selector: string): Element[];
    }
}
declare module "lib/services/ux/service/animations/target" {
    import { TransitionStep } from "lib/services/ux/service/animations/step";
    export class TransitionTarget<T, K> {
        step: TransitionStep<T, K>;
        ref: T | (() => T);
        states: {
            [key: string]: {
                [key: string]: any;
            };
        };
        listeners: {
            [key: string]: Function;
        };
        processing: Set<String>;
        constructor(step: TransitionStep<T, K>, target: string | T | (() => T));
        get transition(): import("raven-js").BaseTransition<T, K>;
        get target(): T;
        onBeforeStart(cb?: Function): this;
        onBeforeComplete(cb?: Function): this;
        onStart(addClasses?: string | null, removeClasses?: string | null, cb?: Function): this;
        onComplete(addClasses?: string | null, removeClasses?: string | null, cb?: Function): this;
        start(...args: any[]): void;
        complete(): void;
        startTransitionEvent(e: Event): void;
        endTransitionEvent(e: Event): void;
        _addStartTransitionEvent(): void;
        _addEndTransitionEvent(): void;
        _removeStartTransitionEvent(): void;
        _removeEndTransitionEvent(): void;
    }
}
declare module "lib/services/ux/service/animations/step" {
    import { TransitionTarget } from "lib/services/ux/service/animations/target";
    import { BaseTransition } from "lib/services/ux/service/animations/transition";
    export class TransitionStep<T, K> {
        transition: BaseTransition<T, K>;
        name: string;
        targets: Set<TransitionTarget<T, K>>;
        processing: Set<TransitionTarget<T, K>>;
        constructor(transition: BaseTransition<T, K>, name?: string);
        target(target: string | T | (() => T)): TransitionTarget<T, K>;
        start(previous?: TransitionStep<T, K>, ...args: any[]): void;
        complete(target: TransitionTarget<T, K>): void;
        next(previous: TransitionStep<T, K>): void;
    }
}
declare module "lib/core/components/strappable" {
    export abstract class Strappable {
        strapOnInitialize: boolean;
        isStrapped: boolean;
        isStrapping: boolean;
        hasBeenStrapped: boolean;
        strap(): void;
        canBeStrapped(): boolean;
        resolveAndStrap(): boolean;
        onInitialStrap(): void;
        onBeforeInitialStrap(): void;
        onAfterInitialStrap(): void;
        onStrap(): void;
        onBeforeStrap(): void;
        onAfterStrap(): void;
    }
}
declare module "lib/core/components/loadable" {
    export class Loadable {
        loadOnInitialize: boolean;
        isLoaded: boolean;
        isLoading: boolean;
        hasBeenLoaded: boolean;
        load(): void;
        canBeLoaded(): boolean;
        resolveAndLoad(): boolean;
        onInitialLoad(): void;
        onBeforeInitialLoad(): void;
        onAfterInitialLoad(): void;
        onLoad(): void;
        onBeforeLoad(): void;
        onAfterLoad(): void;
    }
}
declare module "lib/helpers/strings" {
    export class UTF8 {
        static findSequence(input?: any, sequence?: any[], index?: number): number[];
        static decodeEntities(input: string): string;
        static decodeUTF8ToStr(input: any): string;
        static filterUnsafeUnicode(input: string): string;
        static encodeStrToUTF8(input: string): number[];
        static encodeStrToHexUTF8(input: string): string;
    }
    export class Strings {
        static format(str: string, ...args: any[]): string;
        static capitalize: (str: string) => string;
        static matchAll(predicate: string | string[], re: RegExp, data?: any[]): any[];
    }
}
declare module "lib/helpers/common" {
    export type Constructor<T = {}> = new (...args: any[]) => T;
    export function assert(condition: any, message?: string): asserts condition;
    export function Mixin(derived: any, ...bases: any[]): void;
}
declare module "lib/helpers/objects" {
    export class Objects {
        static diffKeys(predicate: {
            [key: string]: any;
        }, subject: {
            [key: string]: any;
        }): string[];
        static diff(predicate: {
            [key: string]: any;
        }, subject: {
            [key: string]: any;
        }): {
            [key: string]: any;
        };
    }
}
declare module "lib/helpers/crypto/uuid" {
    export class UUID {
        static make(): any;
        static getFn(): Function;
        static cryptoUUID(): string;
        static timeUUID(): string;
    }
}
declare module "lib/helpers/requests/response" {
    import { HttpRequest } from "lib/helpers/requests/request";
    export class HttpResponse {
        request: HttpRequest;
        payload: string;
        status: number | undefined;
        isSuccessful: boolean;
        constructor(request: HttpRequest, payload: string, isSuccessful?: boolean, status?: number);
    }
}
declare module "lib/helpers/requests/request" {
    import { HttpResponse } from "lib/helpers/requests/response";
    export class HttpRequest {
        XHR: XMLHttpRequest;
        method: string;
        uri: string;
        payload: any;
        cb?: Function;
        response: HttpResponse | null;
        isResolved: boolean;
        isRejected: boolean;
        isPending: boolean;
        _promise: Promise<any>;
        _resolve?: Function;
        _reject?: Function;
        constructor(uri: string, cb?: Function, payload?: any, method?: string);
        strap(): void;
        get resolve(): Function;
        get reject(): Function;
        get pending(): Promise<any>;
        get isComplete(): boolean;
        send(): Promise<any>;
        onComplete(payload: any, status?: number): any;
        onRejected(message: string, status?: number): any;
    }
}
declare module "lib/helpers/requests/resolver" {
    import { HttpRequest } from "lib/helpers/requests/request";
    export class Resolver {
        get uri(): string;
        get path(): string;
        get origin(): string;
        get segments(): string[];
        segment(pos: number): string;
        request(uri: string, cb?: Function, payload?: any, method?: string, origin?: string | null): HttpRequest;
        get(uri: string, cb?: Function, payload?: any, origin?: string | null): Promise<any>;
        post(uri: string, cb?: Function, payload?: any, origin?: string | null): Promise<any>;
    }
}
declare module "lib/helpers" {
    import { assert, Constructor, Mixin } from "lib/helpers/common";
    import { UTF8, Strings } from "lib/helpers/strings";
    import { Objects } from "lib/helpers/objects";
    import { UUID } from "lib/helpers/crypto/uuid";
    import { Resolver } from "lib/helpers/requests/resolver";
    import { HttpRequest } from "lib/helpers/requests/request";
    import { HttpResponse } from "lib/helpers/requests/response";
    export { assert, Constructor, Mixin, UTF8, Strings, UUID, Objects, Resolver, HttpRequest, HttpResponse };
}
declare module "lib/core/components/initializable" {
    import { Strappable } from "lib/core/components/strappable";
    import { Loadable } from "lib/core/components/loadable";
    export class Initializable {
        isInitialized: boolean;
        isInitializing: boolean;
        init(): void;
        onInit(): void;
        onBeforeInit(): void;
        onAfterInit(): void;
        resolveAndInit(): boolean;
    }
    export interface Initializable extends Strappable, Loadable {
    }
}
declare module "lib/core/components/observable" {
    export class Observable {
        onChanged(records: MutationRecord[]): void;
        onChangedChildList(record: MutationRecord): void;
        onAddedChild(node: Node, record?: MutationRecord): void;
        onRemovedChild(node: Node, record?: MutationRecord): void;
    }
}
declare module "lib/core/components/stateful" {
    import { Initializable } from "lib/core";
    export interface Stateful<T extends Initializable> {
    }
}
declare module "lib/core/components/application" {
    import { BaseComponent } from "lib/core/components/component";
    import { Viewable } from "lib/core/components/viewable";
    export class BaseApplication<V extends Viewable> extends BaseComponent<V> {
        name: string;
        routes: {
            [key: string]: string | Function;
        };
        resolveAndLoad(): boolean;
    }
}
declare module "lib/core/controllers/controller" {
    import { Initializable } from "lib/core/components/initializable";
    export class Controller {
        name: string;
    }
    export interface Controller extends Initializable {
    }
}
declare module "lib/services/signals/service/radio" {
    import { Spectrum, Frequency, Channel, Broadcast } from "lib/services";
    export class Radio<T> {
        name: string;
        source: string;
        parent: Radio<T> | null;
        uuid: string;
        _spectrums: {
            [key: string]: Spectrum;
        };
        _frequencies: {
            [key: string]: Frequency;
        };
        _spectrum: Spectrum | undefined;
        _frequency: Frequency | undefined;
        _channel: Channel | undefined;
        constructor(parent?: Radio<T> | null, name?: string, spectrum?: string, frequency?: string, channel?: string);
        get spectrums(): {
            [key: string]: Spectrum;
        };
        get frequencies(): {
            [key: string]: Frequency;
        };
        get spectrum(): Spectrum;
        get frequency(): Frequency;
        get channel(): Channel;
        set spectrum(spectrum: Spectrum);
        set frequency(frequency: Frequency);
        set channel(channel: Channel);
        subscribe(name: string, cb: Function, broadcast: Broadcast<T>, ...args: any[]): void;
        subscribeTemporary(name: string, cb: Function, broadcast: Broadcast<T>, ...args: any[]): void;
        registerSpectrum(name: string, spectrum?: Spectrum): Spectrum;
        createBroadcast(input: string, source?: string, ...args: any[]): Broadcast<T>;
    }
}
declare module "lib/services/signals/service/operation" {
    import { Broadcast, Repeater, Radio } from "lib/services";
    export class Operation<T> {
        radio: Radio<T>;
        broadcast: Broadcast<T>;
        pending: Set<Repeater>;
        completed: Set<Repeater>;
        _before: Operation<T> | undefined;
        _after: Operation<T> | undefined;
        results: {
            [key: string]: any;
        };
        args: any[];
        constructor(radio: Radio<T>, input: string, source?: string, resolve?: boolean, ...args: any[]);
        get input(): string;
        get before(): Operation<T>;
        get after(): Operation<T>;
        set before(op: Operation<T>);
        set after(op: Operation<T>);
        resolve(...args: any[]): void;
        resolved(key: string, repeater: Repeater): void;
        resolveRepeater(key: string, repeater: Repeater, ...args: any[]): void;
        _definePending(): void;
        get isComplete(): boolean;
        get isIncomplete(): number;
    }
}
declare module "lib/services/signals/signal" {
    export interface SignalInterface {
        signal: string;
        scope?: string;
        isTrigger: boolean;
        method: string | null;
    }
    export function Signal(signal: string, scope?: string, ...args: []): (...descriptorArgs: any[]) => any;
}
declare module "lib/services/binder" {
    export class Annotation<K, V> {
        origin: K;
        data: V;
        constructor(origin: K, data: V);
    }
    export abstract class Binder<K, V> {
        annotations: Annotation<K, V>[];
        bind(...args: any[]): (...descriptorArgs: any[]) => any;
        bindCls(origin: K, ...args: any[]): [any, Annotation<K, V> | null];
        bindProperty(origin: K, key: string, descriptor: PropertyDescriptor, ...args: any[]): [any, Annotation<K, V> | null];
        annotation(origin: K, data: V): Annotation<K, V>;
        link(annotation: Annotation<K, V>): void;
        process(predicate: K): void;
        processAnnotation(predicate: K, data: V, annotation?: Annotation<K, V>): void;
        _findPredicate(predicate: K): Annotation<K, V>[];
    }
}
declare module "lib/services/signals/signals.binder" {
    import { Viewable } from "lib/core";
    import { Binder } from "lib/services/binder";
    import { SignalInterface } from "lib/services/signals/signal";
    export class SignalsBinder extends Binder<Viewable, SignalInterface> {
        bindCls(target: Viewable, signal: string, scope?: string, ...args: []): [any, any];
        bindProperty(target: any, key: string, descriptor: PropertyDescriptor, signal: string, scope?: string, ...args: []): [any, any];
        processAnnotation(predicate: Viewable, data: SignalInterface): void;
    }
}
declare module "lib/services/signals/signals.service" {
    import { Service } from "lib/services/service";
    import { Radio } from "lib/services/signals/service/radio";
    import { Operation } from "lib/services/signals/service/operation";
    import { SignalsBinder } from "lib/services/signals/signals.binder";
    import { Viewable } from "lib/core/components/viewable";
    export class SignalsService<P extends Viewable> extends Service {
        provider: P;
        static binder: SignalsBinder;
        radio: Radio<P>;
        constructor(provider: P);
        broadcast(input: string, source?: string, ...args: any[]): import("raven-js").Broadcast<P>;
        op(input: string, source?: string, resolve?: boolean, ...args: any[]): Operation<P>;
        on(input: string, cb: Function, source?: string, ...args: any[]): void;
        once(input: string, cb: Function, source?: string, ...args: any[]): void;
        _process(): void;
    }
}
declare module "lib/services/templates/template" {
    export interface TemplateInterface {
        name: string;
        tmpl: string | Function;
        isUri: boolean;
        args: any[];
    }
    export function Template(name: string, tmpl: string, isUri?: boolean, ...args: []): (...descriptorArgs: any[]) => any;
}
declare module "lib/services/templates/templates.binder" {
    import { Viewable } from "lib/core";
    import { Binder } from "lib/services/binder";
    import { TemplateInterface } from "lib/services/templates/template";
    export class TemplatesBinder extends Binder<Viewable, TemplateInterface> {
        bindCls(target: Viewable, name: string, tmpl: string | Function, isUri?: boolean, ...args: []): [any, any];
        processAnnotation(predicate: Viewable, data: TemplateInterface): void;
        _resolveRemote(predicate: Viewable, uri: string, cb: Function): import("raven-js").HttpRequest;
    }
}
declare module "lib/services/templates/service/template" {
    import { TemplateDelegate } from "handlebars";
    import { HttpRequest } from "lib/helpers";
    export class BaseTemplate {
        name: string;
        pending?: HttpRequest;
        resolver?: Function;
        _raw?: string;
        _processed?: string;
        _tmpl?: Handlebars.TemplateDelegate;
        _engine: typeof Handlebars;
        constructor(tmpl: string | Function, name?: string);
        get raw(): string;
        get processed(): string;
        get tmpl(): TemplateDelegate;
        set raw(tmpl: string);
        set processed(processed: string);
        set tmpl(compiled: TemplateDelegate);
        get hasRawTemplate(): boolean;
        get hasTemplate(): boolean;
        get hasBeenProcessed(): boolean;
        resolve(...args: any[]): HttpRequest | undefined;
        compileFrom(input: any, process?: boolean, ...args: any[]): void;
        process(context?: {}, ...args: any[]): string;
        processAfterAvailable(cb: Function, context?: {}, ...args: any[]): Promise<void>;
    }
}
declare module "lib/services/templates/templates.service" {
    import { Service } from "lib/services/service";
    import { TemplatesBinder } from "lib/services/templates/templates.binder";
    import { BaseTemplate } from "lib/services/templates/service/template";
    import { Viewable } from "lib/core/components/viewable";
    import { Resolver } from "lib/helpers/requests/resolver";
    export class TemplatesService<P extends Viewable> extends Service {
        provider: P;
        engine: typeof Handlebars;
        resolver: Resolver;
        _named: {
            [key: string]: BaseTemplate;
        };
        _tmpl?: BaseTemplate;
        static binder: TemplatesBinder;
        constructor(provider: P);
        get tmpl(): BaseTemplate;
        set tmpl(tmpl: BaseTemplate);
        get named(): {
            [key: string]: BaseTemplate;
        };
        set named(named: {
            [key: string]: BaseTemplate;
        });
        create(tmpl: string | Function, name?: string, overwrite?: boolean): BaseTemplate;
        createFrom(parentName: string, name: string, selector: string, overwrite?: boolean): BaseTemplate | null;
        process(name: string, ...args: any[]): string;
        processAfterAvailable(name: string, cb: Function, ...args: any[]): Promise<void>;
        template(name: string): BaseTemplate;
        resolve(predicate: Viewable, force?: boolean): void;
        bindHelpers(): void;
        _process(): void;
    }
}
declare module "lib/core/components/view" {
    import { Initializable } from "lib/core/components/initializable";
    import { Viewable } from "lib/core/components/viewable";
    import { BaseComponent } from "lib/core/components/component";
    import { BaseApplication } from "lib/core/components/application";
    import { ElementsService } from "lib/services/ux/element.service";
    import { Servicable } from "lib/services/servicable";
    import { Observable } from "lib/core/components/observable";
    import { SignalsService } from "lib/services/signals/signals.service";
    export class View<C extends BaseComponent<Viewable> = BaseComponent<Viewable>> {
        _parent?: Viewable | undefined;
        name: string;
        _children: {
            [key: string]: View<C>;
        };
        _ux?: ElementsService<View<C>>;
        _signals?: SignalsService<View<C>>;
        _com?: C;
        _app?: BaseApplication<Viewable>;
        constructor(_parent?: Viewable | undefined);
        get com(): C;
        set com(com: C);
        get app(): BaseApplication<Viewable>;
        set app(app: BaseApplication<Viewable>);
        get ux(): ElementsService<View<C>>;
        set ux(service: ElementsService<View<C>>);
        get signals(): SignalsService<View<C>>;
        set signals(service: SignalsService<View<C>>);
        get canInitializeChildren(): boolean;
        init(): void;
        strap(): void;
        load(): void;
        el(name: string, update?: boolean): import("raven-js").BaseElement<View<C>> | undefined;
        list(name: string, update?: boolean): import("raven-js").BaseElementList<View<C>, import("raven-js").BaseElement<View<C>>> | undefined;
        resolveAndInit(): boolean;
        resolveAndStrap(): boolean;
        resolveAndLoad(): boolean;
        resolveAndShow(): boolean;
        resolveAndAttach(): boolean;
    }
    export interface View<C extends BaseComponent<Viewable>> extends Initializable, Servicable, Observable, Viewable {
    }
}
declare module "lib/core/components/view_list" {
    import { Initializable } from "lib/core/components/initializable";
    import { View } from "lib/core/components/view";
    import { Viewable } from "lib/core/components/viewable";
    import { BaseComponent } from "lib/core/components/component";
    import { BaseApplication } from "lib/core/components/application";
    import { ElementsService } from "lib/services/ux/element.service";
    import { Servicable } from "lib/services/servicable";
    import { Observable } from "lib/core/components/observable";
    import { SignalsService } from "lib/services/signals/signals.service";
    import { TemplatesService } from "lib/services/templates/templates.service";
    export class ListView<V extends Viewable, C extends BaseComponent<Viewable>> {
        _parent?: Viewable | undefined;
        name: string;
        listSelector: string;
        listed: View<C>[];
        _children: {
            [key: string]: Viewable;
        };
        _ux?: ElementsService<ListView<V, C>>;
        _signals?: SignalsService<ListView<V, C>>;
        _com?: C;
        _app?: BaseApplication<Viewable>;
        _listSelector: string;
        _listPins: {
            [key: string]: string | Function;
        };
        get ux(): ElementsService<ListView<V, C>>;
        set ux(service: ElementsService<ListView<V, C>>);
        get signals(): SignalsService<ListView<V, C>>;
        set signals(service: SignalsService<ListView<V, C>>);
        get com(): C;
        set com(com: C);
        get app(): BaseApplication<Viewable>;
        set app(app: BaseApplication<Viewable>);
        constructor(_parent?: Viewable | undefined);
        factory(el: Element): {
            new (_parent?: Viewable | undefined): {
                pins: {
                    [key: string]: TimerHandler;
                };
                resolveAndStrap(): boolean;
                name: string;
                _children: {
                    [key: string]: View<C>;
                };
                _ux?: ElementsService<View<C>> | undefined;
                _signals?: SignalsService<View<C>> | undefined;
                _com?: C | undefined;
                _app?: BaseApplication<Viewable> | undefined;
                _parent?: Viewable | undefined;
                com: C;
                app: BaseApplication<Viewable>;
                ux: ElementsService<View<C>>;
                signals: SignalsService<View<C>>;
                readonly canInitializeChildren: boolean;
                init(): void;
                strap(): void;
                load(): void;
                el(name: string, update?: boolean): import("raven-js").BaseElement<View<C>> | undefined;
                list(name: string, update?: boolean): import("raven-js").BaseElementList<View<C>, import("raven-js").BaseElement<View<C>>> | undefined;
                resolveAndInit(): boolean;
                resolveAndLoad(): boolean;
                resolveAndShow(): boolean;
                resolveAndAttach(): boolean;
                isInitialized: boolean;
                isInitializing: boolean;
                onInit(): void;
                onBeforeInit(): void;
                onAfterInit(): void;
                strapOnInitialize: boolean;
                isStrapped: boolean;
                isStrapping: boolean;
                hasBeenStrapped: boolean;
                canBeStrapped(): boolean;
                onInitialStrap(): void;
                onBeforeInitialStrap(): void;
                onAfterInitialStrap(): void;
                onStrap(): void;
                onBeforeStrap(): void;
                onAfterStrap(): void;
                loadOnInitialize: boolean;
                isLoaded: boolean;
                isLoading: boolean;
                hasBeenLoaded: boolean;
                canBeLoaded(): boolean;
                onInitialLoad(): void;
                onBeforeInitialLoad(): void;
                onAfterInitialLoad(): void;
                onLoad(): void;
                onBeforeLoad(): void;
                onAfterLoad(): void;
                onChanged(records: MutationRecord[]): void;
                onChangedChildList(record: MutationRecord): void;
                onAddedChild(node: Node, record?: MutationRecord | undefined): void;
                onRemovedChild(node: Node, record?: MutationRecord | undefined): void;
                annotations: Map<Viewable, any[]>;
                selector: string;
                _services: {
                    [key: string]: import("raven-js").Service;
                };
                _templates?: TemplatesService<Viewable> | undefined;
                showOnInitialize: boolean;
                hideOnInitialize: boolean;
                isShown: boolean;
                isHidden: boolean;
                isAttached: boolean;
                isAttaching: boolean;
                hasBeenShown: boolean;
                hasBeenHidden: boolean;
                hasBeenAttached: boolean;
                hasBeenDetached: boolean;
                readonly hasTemplate: boolean;
                parent: Viewable;
                templates: TemplatesService<Viewable>;
                readonly tmpl: import("raven-js").BaseTemplate;
                readonly canBeShown: boolean;
                readonly canBeHidden: boolean;
                readonly canBeAttached: boolean;
                discoverChildViews(): void;
                child(name: string): Viewable;
                addChildView(name: string, view: Viewable): void;
                initializeChild(child: Viewable): any;
                resolveInitializedChild(child: Viewable): void;
                resolveLoadedTemplate(request: import("lib/helpers").HttpRequest): void;
                show(...args: any[]): void;
                onInitialShow(...args: any[]): void;
                onBeforeInitialShow(...args: any[]): void;
                onAfterInitialShow(...args: any[]): void;
                onShow(...args: any[]): void;
                onBeforeShow(...args: any[]): void;
                onAfterShow(...args: any[]): void;
                hide(...args: any[]): void;
                resolveAndHide(...args: any[]): boolean;
                onInitialHide(...args: any[]): void;
                onBeforeInitialHide(...args: any[]): void;
                onAfterInitialHide(...args: any[]): void;
                onHide(...args: any[]): void;
                onBeforeHide(...args: any[]): void;
                onAfterHide(...args: any[]): void;
                attach(): void;
                onInitialAttach(): void;
                onBeforeInitialAttach(): void;
                onAfterInitialAttach(): void;
                onAttach(): void;
                onBeforeAttach(): void;
                onAfterAttach(): void;
                compile(): void;
                onCompile(): void;
                onBeforeCompile(): void;
                onAfterCompile(): void;
            };
        };
        findAndAddListItems(): void;
        onRemovedChild(el: Node): void;
        addListItem(el: Element): void;
        get canInitializeChildren(): boolean;
        init(): void;
        strap(): void;
        load(): void;
        el(name: string, update?: boolean): import("raven-js").BaseElement<ListView<V, C>> | undefined;
        list(name: string, update?: boolean): import("raven-js").BaseElementList<ListView<V, C>, import("raven-js").BaseElement<ListView<V, C>>> | undefined;
        resolveAndInit(): boolean;
        resolveAndStrap(): boolean;
        resolveAndLoad(): boolean;
        resolveAndShow(): boolean;
        resolveAndAttach(): boolean;
    }
    export interface ListView<V extends Viewable, C extends BaseComponent<Viewable>> extends Initializable, Servicable, Observable, Viewable {
    }
}
declare module "lib/core/models/list" {
    import { Model } from "lib/core/models/model";
    import { Resolver, HttpResponse } from "lib/helpers";
    export class ModelList<T extends Model> {
        uri: string;
        resolver: Resolver;
        model: new (...args: any[]) => T;
        items: T[];
        constructor(model: new (...args: any[]) => T, uri: string);
        retrieve(cb?: Function): void;
        resolveRetrieved(cb: Function | undefined, response: HttpResponse): void;
        update(items: Object): void;
        onUpdate(items: Object): void;
        extract(): {
            [key: string]: any;
        }[];
    }
}
declare module "lib/core/models/fields/field" {
    export class ModelField {
        value: any;
        update(value: any): void;
        validate(value: any): boolean;
        normalize(value: any): any;
        extract(): any;
    }
}
declare module "lib/core/models/model" {
    import { ModelList } from "lib/core/models/list";
    import { ModelField } from "lib/core/models/fields/field";
    export class Model {
        attributes: Map<string, ModelField | ModelList<Model>>;
        constructor(input?: Map<string, any>);
        create(): void;
        populate(input: Map<string, any>): void;
        updateField(name: string, value: any): void;
        extract(): {
            [key: string]: any;
        };
    }
}
declare module "lib/core/models/fields/number.field" {
    import { ModelField } from "lib/core/models/fields/field";
    export class ModelNumberField extends ModelField {
        value: number;
        constructor(value?: string | number);
        update(value: string | number): number;
        normalize(value: string | number): number;
    }
}
declare module "lib/core/models/fields/text.field" {
    import { ModelField } from "lib/core/models/fields/field";
    export class ModelTextField extends ModelField {
        value: string;
        constructor(value?: string);
        update(value: string): string;
    }
}
declare module "lib/core" {
    import { Strappable } from "lib/core/components/strappable";
    import { Loadable } from "lib/core/components/loadable";
    import { Initializable } from "lib/core/components/initializable";
    import { Stateful } from "lib/core/components/stateful";
    import { BaseComponent } from "lib/core/components/component";
    import { BaseApplication } from "lib/core/components/application";
    import { Controller } from "lib/core/controllers/controller";
    import { Viewable } from "lib/core/components/viewable";
    import { View } from "lib/core/components/view";
    import { ListView } from "lib/core/components/view_list";
    import { Model } from "lib/core/models/model";
    import { ModelList } from "lib/core/models/list";
    import { ModelField } from "lib/core/models/fields/field";
    import { ModelNumberField } from "lib/core/models/fields/number.field";
    import { ModelTextField } from "lib/core/models/fields/text.field";
    export { Strappable, Loadable, Viewable, Stateful, Initializable, View, ListView, BaseComponent, BaseApplication, Controller, ModelList, Model, ModelField, ModelNumberField, ModelTextField };
}
declare module "lib/services/ux/uxevent" {
    export interface UXEventInterface {
        resolver: Function | null;
        el: string | null;
        parent: string | Document | Window | null;
        event: string;
        isSelector: boolean;
        method: string;
        test: string | null;
        capture: boolean;
    }
    export function UXEvent(el: string | null, opts?: {}, ...args: any[]): (...descriptorArgs: any[]) => any;
    export function UXFormFieldEvent(el: string | null, opts?: {}): (...descriptorArgs: any[]) => any;
}
declare module "lib/services/ux/element.binder" {
    import { Viewable } from "lib/core";
    import { Binder } from "lib/services/binder";
    import { UXEventInterface } from "lib/services/ux/uxevent";
    export class ElementsBinder extends Binder<Viewable, UXEventInterface> {
        bindProperty(origin: Viewable, key: string, descriptor: PropertyDescriptor, resolver: Function | null, el: string | null, parent?: string | Document | Window | null, test?: string | null, event?: string, name?: string, isSelector?: boolean, capture?: boolean, opts?: {
            [key: string]: any;
        }): [any, any];
        processAnnotation(predicate: Viewable, data: UXEventInterface): void;
    }
}
declare module "lib/services/ux/transition" {
    import { BaseComponent } from "lib/core/components/component";
    export interface TransitionInterface<T> {
        method: string;
        name: string;
        root: string | T | null;
        options: {
            [key: string]: any;
        };
    }
    export function Transition(name: string, root?: string | BaseComponent | null, options?: {
        [key: string]: any;
    }, ...args: []): (...descriptorArgs: any[]) => any;
}
declare module "lib/services/ux/animations.binder" {
    import { BaseComponent } from "lib/core";
    import { Binder } from "lib/services/binder";
    import { TransitionInterface } from "lib/services/ux/transition";
    export class TransitionsBinder extends Binder<BaseComponent, TransitionInterface<BaseComponent>> {
        bindProperty(origin: BaseComponent, key: string, descriptor: PropertyDescriptor, name: string, root?: string | any | null, options?: {
            [key: string]: any;
        }): [any, any];
        processAnnotation(predicate: BaseComponent, data: TransitionInterface<BaseComponent>): void;
    }
}
declare module "lib/services/ux/element.service" {
    import { Service } from "lib/services/service";
    import { BaseElement, BaseElementList } from "lib/services/ux/service/elements/base";
    import { Viewable } from "lib/core/components/viewable";
    import { ElementsBinder } from "lib/services/ux/element.binder";
    import { BaseTransition } from "lib/services/ux/service/animations/transition";
    import { TransitionsBinder } from "lib/services/ux/animations.binder";
    import { BaseComponent } from "lib/core/components/component";
    export class ElementsService<P extends Viewable> extends Service {
        provider: P;
        isFixedRoot: boolean;
        _root?: BaseElement<P>;
        _els: {
            [key: string]: BaseElementList<P, BaseElement<P>>;
        };
        static _transitions: {
            [key: string]: BaseTransition<BaseComponent, BaseComponent>;
        };
        _observers: {
            [key: string]: MutationObserver;
        };
        static binder: ElementsBinder;
        static transitionsBinder: TransitionsBinder;
        constructor(provider: P, root?: BaseElement<P>, isFixedRoot?: boolean);
        get pins(): {
            [key: string]: TimerHandler;
        };
        get els(): {
            [key: string]: BaseElementList<P, BaseElement<P>>;
        };
        set els(list: {
            [key: string]: BaseElementList<P, BaseElement<P>>;
        });
        get transitions(): {
            [key: string]: BaseTransition<BaseComponent, BaseComponent>;
        };
        set transitions(list: {
            [key: string]: BaseTransition<BaseComponent, BaseComponent>;
        });
        get root(): BaseElement<P>;
        set root(el: BaseElement<P>);
        create<P>(tmpl: string, provider?: P): BaseElement<any>;
        createFrom<P>(el: Element, provider?: P): BaseElement<P>;
        pin(name: string, resolve?: boolean): any;
        observe(fn: MutationCallback, name?: string | null, options?: {}): void;
        el(name: string, update?: boolean): BaseElement<P>;
        list(name: string, update?: boolean): BaseElementList<P, BaseElement<P>>;
        update(name: string, el?: BaseElementList<P, BaseElement<P>>): void;
        updateRoot(el?: BaseElement<P>, forced?: boolean): void;
        updateAll(): void;
        transition(name?: string, root?: BaseComponent, options?: {
            [key: string]: any;
        }): BaseTransition<BaseComponent<Viewable, import("raven-js").Controller>, BaseComponent<Viewable, import("raven-js").Controller>>;
        _getEls(): {
            [key: string]: BaseElementList<P, BaseElement<P>>;
        };
        _getEl(name: string): BaseElementList<any, BaseElement<any>>;
        _getRoot(selector?: string): BaseElement<P>;
        _extractFactoryChildPins(clean?: boolean, ...targets: string[]): {
            [key: string]: {
                [key: string]: TimerHandler;
            };
        };
        _normalizePins(): void;
        _normalizePin(pin: string, depth?: number): string | Function;
        _normalizeViewPin(pin: string, depth?: number): () => BaseElementList<P, BaseElement<P>> | null;
        _expandViewPin(pin: string, depth?: number): string;
        _expandStandardPin(pin: string, depth?: number): string;
        _process(): void;
    }
}
declare module "lib/core/components/viewable" {
    import { Initializable } from "lib/core/components/initializable";
    import { Servicable } from "lib/services/servicable";
    import { Observable } from "lib/core/components/observable";
    import { Service } from "lib/services/service";
    import { ElementsService } from "lib/services/ux/element.service";
    import { SignalsService } from "lib/services/signals/signals.service";
    import { TemplatesService } from "lib/services/templates/templates.service";
    import { BaseTemplate } from "lib/services/templates/service/template";
    import { HttpRequest } from "lib/helpers";
    export abstract class Viewable {
        annotations: Map<Viewable, any[]>;
        name: string;
        selector: string;
        pins: {
            [key: string]: string | Function;
        };
        _children: {
            [key: string]: Viewable;
        };
        _services: {
            [key: string]: Service;
        };
        _ux?: ElementsService<Viewable>;
        _signals?: SignalsService<Viewable>;
        _templates?: TemplatesService<Viewable>;
        _parent?: Viewable;
        showOnInitialize: boolean;
        hideOnInitialize: boolean;
        isShown: boolean;
        isHidden: boolean;
        isAttached: boolean;
        isAttaching: boolean;
        hasBeenShown: boolean;
        hasBeenHidden: boolean;
        hasBeenAttached: boolean;
        hasBeenDetached: boolean;
        get hasTemplate(): boolean;
        get parent(): Viewable;
        set parent(parent: Viewable);
        get ux(): ElementsService<Viewable>;
        set ux(service: ElementsService<Viewable>);
        get signals(): SignalsService<Viewable>;
        set signals(service: SignalsService<Viewable>);
        get templates(): TemplatesService<Viewable>;
        set templates(service: TemplatesService<Viewable>);
        get tmpl(): BaseTemplate;
        get canBeShown(): boolean;
        get canBeHidden(): boolean;
        get canBeAttached(): boolean;
        get canInitializeChildren(): boolean;
        discoverChildViews(): void;
        child(name: string): Viewable;
        addChildView(name: string, view: Viewable): void;
        initializeChild(child: Viewable): any;
        resolveInitializedChild(child: Viewable): void;
        resolveLoadedTemplate(request: HttpRequest): void;
        show(...args: any[]): void;
        resolveAndShow(...args: any[]): boolean;
        onInitialShow(...args: any[]): void;
        onBeforeInitialShow(...args: any[]): void;
        onAfterInitialShow(...args: any[]): void;
        onShow(...args: any[]): void;
        onBeforeShow(...args: any[]): void;
        onAfterShow(...args: any[]): void;
        hide(...args: any[]): void;
        resolveAndHide(...args: any[]): boolean;
        onInitialHide(...args: any[]): void;
        onBeforeInitialHide(...args: any[]): void;
        onAfterInitialHide(...args: any[]): void;
        onHide(...args: any[]): void;
        onBeforeHide(...args: any[]): void;
        onAfterHide(...args: any[]): void;
        attach(): void;
        resolveAndAttach(): boolean;
        onInitialAttach(): void;
        onBeforeInitialAttach(): void;
        onAfterInitialAttach(): void;
        onAttach(): void;
        onBeforeAttach(): void;
        onAfterAttach(): void;
        compile(): void;
        onCompile(): void;
        onBeforeCompile(): void;
        onAfterCompile(): void;
    }
    export interface Viewable extends Initializable, Servicable, Observable {
    }
}
declare module "lib/services/routing/route" {
    export interface RouteInterface {
        pattern: string;
        regex?: RegExp;
        method: string | null;
        transition?: string;
        tests?: string[];
        name?: string | null;
    }
    export function Route(pattern: string, transition?: string, ...args: []): (...descriptorArgs: any[]) => any;
}
declare module "lib/services/routing/service/validator" {
    export class Validator {
        name: string;
        fn: Function;
        converter: Function | undefined;
        constructor(name: string, fn: Function, converter?: Function);
        test(predicate: any): any;
        convert(predicate: any): any;
    }
}
declare module "lib/services/routing/service/route" {
    import { RouteInterface } from "lib/services/routing/route";
    export abstract class BaseRoute {
        _provider: any;
        pattern: string;
        regex: RegExp;
        fn: Function;
        tests: string[];
        name: string | null;
        constructor(provider: any, route: RouteInterface);
        get provider(): any;
        set provider(provider: any);
        get router(): any;
        resolveName(): null;
        validate(compare: string): [boolean, any[]];
        getMatches(predicate: string): never[];
        validateTest(predicate: string, test: string): [boolean, any];
    }
    export class MatchedRoute {
        route: BaseRoute;
        args: any[];
        constructor(route: BaseRoute, args: any[]);
        get provider(): any;
        get router(): any;
        call(): any;
    }
    export class DeferredRoute extends BaseRoute {
        path: string;
        constructor(predicate: any, route: RouteInterface, path: string);
        resolveName(): null;
        resolveFn(): () => Promise<void>;
        discoverImportComponents(imported: Object): any[];
    }
    export class LoadedRoute extends BaseRoute {
        constructor(provider: any, route: RouteInterface);
    }
}
declare module "lib/services/routing/routing.binder" {
    import { Viewable } from "lib/core/components/viewable";
    import { BaseComponent } from "lib/core/components/component";
    import { Binder } from "lib/services/binder";
    import { RouteInterface } from "lib/services/routing/route";
    export class RoutingBinder extends Binder<BaseComponent<Viewable>, RouteInterface> {
        bindCls(origin: BaseComponent<Viewable>, pattern: string, transition?: string, ...args: any[]): [any, any];
        bindProperty(origin: any, key: string, descriptor: PropertyDescriptor, pattern: string, transition?: string, ...args: any[]): [any, any];
        processAnnotation(predicate: BaseComponent<Viewable>, data: RouteInterface): void;
    }
}
declare module "lib/services/routing/routing.service" {
    import { Service } from "lib/services/service";
    import { Viewable } from "lib/core/components/viewable";
    import { BaseComponent } from "lib/core/components/component";
    import { RouteInterface } from "lib/services/routing/route";
    import { BaseRoute, MatchedRoute } from "lib/services/routing/service/route";
    import { Validator } from "lib/services/routing/service/validator";
    import { RoutingBinder } from "lib/services/routing/routing.binder";
    import { Resolver } from "lib/helpers/requests/resolver";
    export class RoutingService<P extends BaseComponent<Viewable>> extends Service {
        provider: P;
        static binder: RoutingBinder;
        routes: {
            [key: string]: BaseRoute;
        };
        named: {
            [key: string]: BaseRoute;
        };
        validators: {
            [key: string]: Validator;
        };
        constructor(provider: P);
        get history(): History;
        createRoute(predicate: BaseComponent<Viewable> | Function | string | null, options: RouteInterface | string): void;
        changeURI(uri: string, update?: boolean): void;
        update(): void;
        matchRoute(path: string): MatchedRoute | undefined;
        _resolvePattern(pattern: string): [RegExp, string[]];
        _process(predicate?: P, update?: boolean): void;
    }
    export interface RoutingService<P extends BaseComponent<Viewable>> extends Resolver {
    }
}
declare module "lib/core/components/component" {
    import { Initializable } from "lib/core/components/initializable";
    import { Servicable } from "lib/services/servicable";
    import { RoutingService } from "lib/services/routing/routing.service";
    import { Viewable } from "lib/core/components/viewable";
    import { Controller } from "lib/core/controllers/controller";
    import { SignalsService } from "lib/services/signals/signals.service";
    export class BaseComponent<V extends Viewable = Viewable, T extends Controller = Controller> {
        name: string;
        _children: {
            [key: string]: BaseComponent<V>;
        };
        _parent?: BaseComponent<V>;
        _view?: Function | V;
        _cont?: Function | T;
        _router?: RoutingService<BaseComponent<V>>;
        _signals?: SignalsService<V>;
        get parent(): BaseComponent<V>;
        set parent(parent: BaseComponent<V>);
        get view(): V;
        set view(view: V);
        get cont(): T;
        set cont(cont: T);
        get router(): RoutingService<BaseComponent<V>>;
        set router(service: RoutingService<BaseComponent<V>>);
        get signals(): SignalsService<V>;
        set signals(service: SignalsService<V>);
        get canInitializeChildren(): boolean;
        discoverChildComponents(): void;
        init(): void;
        strap(): void;
        load(): void;
        resolveAndStrap(): boolean;
        resolveAndLoad(): boolean;
        resolveInitializedView(view: V): void;
        child(name: string): BaseComponent<V>;
        addChildComponent(name: string, child: BaseComponent<V>): void;
        initializeChild(child: BaseComponent<V>): boolean;
        resolveInitializedChild(child: BaseComponent<V>): void;
    }
    export interface BaseComponent<V extends Viewable> extends Initializable, Servicable {
    }
}
declare module "lib/services/ux/service/animations/transition" {
    import { TransitionStep } from "lib/services/ux/service/animations/step";
    import { BaseElement } from "lib/services/ux/service/elements/base";
    import { BaseComponent } from "lib/core/components/component";
    export class BaseTransition<T = BaseElement<any>, K = BaseComponent> {
        name: string | undefined;
        options: {
            [key: string]: any;
        };
        args: any[] | null;
        _root: K | undefined;
        sequence: {
            [key: string]: {
                [key: string]: any;
            };
        };
        processing: Iterable<TransitionStep<T, K>> | null;
        constructor(name?: string, root?: K, options?: {
            [key: string]: any;
        });
        get root(): K;
        set root(root: K);
        get isProcessing(): boolean;
        get length(): number;
        iterable(): IterableIterator<TransitionStep<T, K>>;
        first(): TransitionStep<T, K>;
        next(previous: TransitionStep<T, K>): void;
        add(name?: string): TransitionStep<T, K>;
        parallel(name?: string): TransitionStep<T, K>;
        run(...args: any[]): void;
    }
}
declare module "lib/services/signals/service/broadcast" {
    import { Radio, Spectrum, Frequency, Channel, Receiver } from "lib/services";
    export class Broadcast<T> {
        radio: Radio<T>;
        input: string;
        source: string;
        bands: string[];
        signatures: string[];
        spectrum: Spectrum;
        frequency: Frequency;
        channels: Channel[];
        receivers: Map<Channel, Receiver[]>;
        before: Map<Channel, Receiver[]>;
        after: Map<Channel, Receiver[]>;
        constructor(radio: Radio<T>, input?: string, source?: string);
        get hasRepeatersBefore(): boolean;
        get hasRepeatersAfter(): boolean;
        _resolveSpectrum(name: string): Spectrum;
        _resolveFrequency(bands: string[], spectrum?: Spectrum): Frequency;
        _resolveReceivers(channels: Channel[], input?: string): Map<Channel, Receiver[]>;
        _resolveChannelsAndReceivers(channelNames: string[] | null, frequency: Frequency): [Channel[], Map<Channel, Receiver[]>];
        _resolveSourceComponents(source: string): [string, string[], string[] | null, string[] | null];
        _resolvePrimarySource(predicate: string): [string, string[]];
        _resolveSecondarySource(predicate: string[] | null): string[] | null;
        _resolveSignatureSource(predicate: string[] | null): string[] | null;
        _resolveFrequencyBands(name: string): string[];
        _resolveChannelNames(channels: string): any[];
        _resolveSignatures(signatures: string): any[];
    }
}
declare module "lib/services/signals/service/spectrum" {
    import { Frequency } from "lib/services";
    export class Spectrum {
        frequencies: {
            [key: string]: Frequency;
        };
        name: string;
        constructor(name: string);
        frequency(name: string): Frequency;
        registerFrequency(name: string, parent?: Frequency, frequency?: Frequency): Frequency;
    }
}
declare module "lib/services/signals/service/channel" {
    import { Receiver, Frequency } from "lib/services";
    export class Channel {
        receivers: {
            [key: string]: Receiver;
        };
        name: string;
        frequency: Frequency;
        _band: Frequency | undefined;
        constructor(name: string, frequency: Frequency);
        receiver(name: string): Receiver;
        registerReceiver(name: string, receiver?: Receiver): Receiver;
        registerListener(name: string, cb: Function, signature: string, ...args: any[]): void;
    }
}
declare module "lib/services/signals/service/frequency" {
    import { Channel, Spectrum } from "lib/services";
    export class Frequency {
        channels: {
            [key: string]: Channel;
        };
        name: string;
        spectrum: Spectrum;
        _band: Frequency | undefined;
        constructor(name: string, spectrum: Spectrum, band?: Frequency);
        get band(): Frequency;
        set band(band: Frequency);
        get bandName(): string;
        get fullName(): string;
        channel(name: string): Channel;
        registerChannel(name: string, channel?: Channel): Channel;
    }
}
declare module "lib/services/signals/service/receiver" {
    import { Channel, Repeater } from "lib/services";
    export class Receiver {
        repeaters: {
            [key: string]: Repeater;
        };
        name: string;
        channel: Channel;
        constructor(name: string, channel: Channel);
        subscribe(cb: Function, signature: string, ...args: any[]): Repeater;
        subscribeTemporary(cb: Function, signature: string, ...args: any[]): Repeater;
        remove(repeater: Repeater): void;
    }
}
declare module "lib/services/signals/service/repeater" {
    import { Receiver } from "lib/services";
    export class Repeater {
        name: string;
        cb: Function;
        args: any[];
        signature?: string;
        receiver: Receiver;
        destroyAfter: boolean;
        constructor(receiver: Receiver, name: string, cb: Function, signature?: string, ...args: any);
        trigger(...args: any[]): any;
        remove(): void;
    }
    export class TemporaryRepeater extends Repeater {
        destroyAfter: boolean;
    }
}
declare module "lib/services" {
    import { Service } from "lib/services/service";
    import { Servicable } from "lib/services/servicable";
    import { BaseElement, BaseElementList } from "lib/services/ux/service/elements/base";
    import { BaseTransition } from "lib/services/ux/service/animations/transition";
    import { ElementsService } from "lib/services/ux/element.service";
    import { Transition } from "lib/services/ux/transition";
    import { UXEvent, UXFormFieldEvent } from "lib/services/ux/uxevent";
    import { Radio } from "lib/services/signals/service/radio";
    import { Broadcast } from "lib/services/signals/service/broadcast";
    import { Operation } from "lib/services/signals/service/operation";
    import { Spectrum } from "lib/services/signals/service/spectrum";
    import { Channel } from "lib/services/signals/service/channel";
    import { Frequency } from "lib/services/signals/service/frequency";
    import { Receiver } from "lib/services/signals/service/receiver";
    import { Repeater, TemporaryRepeater } from "lib/services/signals/service/repeater";
    import { SignalInterface, Signal } from "lib/services/signals/signal";
    import { SignalsBinder } from "lib/services/signals/signals.binder";
    import { SignalsService } from "lib/services/signals/signals.service";
    import { BaseTemplate } from "lib/services/templates/service/template";
    import { TemplateInterface, Template } from "lib/services/templates/template";
    import { TemplatesBinder } from "lib/services/templates/templates.binder";
    import { TemplatesService } from "lib/services/templates/templates.service";
    import { Route, RouteInterface } from "lib/services/routing/route";
    import { RoutingService } from "lib/services/routing/routing.service";
    import { RoutingBinder } from "lib/services/routing/routing.binder";
    import { BaseRoute } from "lib/services/routing/service/route";
    import { Validator } from "lib/services/routing/service/validator";
    export { Service, Servicable, BaseElement, BaseElementList, ElementsService, UXEvent, UXFormFieldEvent, Transition, BaseTransition, Radio, Broadcast, Operation, Spectrum, Channel, Frequency, Receiver, Repeater, TemporaryRepeater, SignalInterface, Signal, SignalsBinder, SignalsService, Route, RouteInterface, RoutingService, RoutingBinder, BaseRoute, Validator, BaseTemplate, TemplateInterface, Template, TemplatesBinder, TemplatesService };
}
declare module "raven-js" {
    import { Service, Servicable, BaseElement, BaseElementList, ElementsService, UXEvent, UXFormFieldEvent, Transition, BaseTransition, Radio, Broadcast, Operation, Spectrum, Channel, Frequency, Receiver, Repeater, TemporaryRepeater, SignalInterface, Signal, SignalsBinder, SignalsService, Route, RouteInterface, RoutingService, RoutingBinder, BaseRoute, Validator, BaseTemplate, TemplateInterface, Template, TemplatesBinder, TemplatesService } from "lib/services";
    import { Strappable, Loadable, Viewable, Stateful, Initializable, View, ListView, BaseComponent, BaseApplication, Controller, ModelList, Model, ModelField, ModelNumberField, ModelTextField } from "lib/core";
    import { assert, Constructor, Mixin, UTF8, Strings, UUID, Objects, Resolver, HttpRequest, HttpResponse } from "lib/helpers";
    export { Strappable, Loadable, Viewable, Stateful, Initializable, View, ListView, BaseComponent, BaseApplication, Controller, ModelList, Model, ModelField, ModelNumberField, ModelTextField, Service, Servicable, BaseElement, BaseElementList, ElementsService, UXEvent, UXFormFieldEvent, Transition, BaseTransition, Radio, Broadcast, Operation, Spectrum, Channel, Frequency, Receiver, Repeater, TemporaryRepeater, SignalInterface, Signal, SignalsBinder, SignalsService, Route, RouteInterface, RoutingService, RoutingBinder, BaseRoute, Validator, BaseTemplate, TemplateInterface, Template, TemplatesBinder, TemplatesService, assert, Constructor, Mixin, UTF8, Strings, UUID, Objects, Resolver, HttpRequest, HttpResponse };
}
declare module "lib/services/templates/service/helper" {
    export class Helper {
        name?: string;
        engine: typeof Handlebars;
        fn(...args: any[]): void;
    }
}
declare module "lib/services/templates/service/helpers/decode" {
    import { Helper } from "lib/services/templates/service/helper";
    export class DecodeHelper extends Helper {
        name: string;
        fn(input: any): string;
    }
}
declare module "lib/services/templates/service/helpers/encode" {
    import { Helper } from "lib/services/templates/service/helper";
    export class EncodeHelper extends Helper {
        name: string;
        fn(input: any): void;
    }
}
declare module "lib/services/templates/service/helpers/ifEquals" {
    import { Helper } from "lib/services/templates/service/helper";
    export class IfEqualsHelper extends Helper {
        name: string;
        fn(value: any, predicate: any, options: any): any;
    }
}
declare module "lib/services/templates/service/helpers/listAbsent" {
    import { Helper } from "lib/services/templates/service/helper";
    export class ListAbsentHelper extends Helper {
        name: string;
        fn(value: any, list: any, options: any): any;
    }
}
declare module "lib/services/templates/service/helpers/listContains" {
    import { Helper } from "lib/services/templates/service/helper";
    export class ListContainsHelper extends Helper {
        name: string;
        fn(value: any, list: any, options: any): any;
    }
}
declare module "lib/services/templates/service/helpers/op" {
    import { Helper } from "lib/services/templates/service/helper";
    export class OpHelper extends Helper {
        name: string;
        fn(operation: string, value: any, predicate: any, options: any): any;
    }
}
