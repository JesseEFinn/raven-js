import { View, Controller, Application, Radio, StandardElement } from "lib/common";
export declare class BaseComponent {
    name: string;
    _view: View<StandardComponent<any>> | undefined;
    _cont: Controller<BaseComponent> | undefined;
    _radio: Radio | undefined;
    isCreated: boolean;
    isInitialized: boolean;
    isStarting: boolean;
    isStarted: boolean;
    radio: Radio;
    view: View<StandardComponent<any>>;
    cont: Controller<BaseComponent>;
    readonly root: StandardElement;
    _resolveName(name: string): string;
}
export declare class StandardComponent<C extends Controller<BaseComponent>> extends BaseComponent {
    _app: Application | undefined;
    _cont: C | undefined;
    app: Application;
    cont: C;
    create(): void;
    onCreate(): void;
    init(): void;
    onInit(): void;
    _initRadio(): void;
    _initView(): void;
}
export declare class Component<T extends Controller<BaseComponent>> extends StandardComponent<T> {
    constructor(app?: Application);
}
