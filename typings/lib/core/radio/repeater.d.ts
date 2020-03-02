import { Receiver } from "lib/common";
export declare class Repeater {
    name: string;
    cb: Function;
    args: any[];
    receiver: Receiver;
    destroyAfter: boolean;
    constructor(receiver: Receiver, name: string, cb: Function, ...args: any);
    trigger(...args: any[]): any;
    remove(): void;
}
export declare class TemporaryRepeater extends Repeater {
    destroyAfter: boolean;
}
