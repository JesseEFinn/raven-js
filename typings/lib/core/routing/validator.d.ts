export declare class Validator {
    name: string;
    fn: Function;
    converter: Function | undefined;
    constructor(name: string, fn: Function, converter?: Function);
    test(predicate: any): any;
    convert(predicate: any): any;
}
