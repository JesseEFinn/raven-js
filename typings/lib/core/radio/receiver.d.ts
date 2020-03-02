import { Channel, Repeater } from "lib/common";
export declare class Receiver {
    repeaters: {
        [key: string]: Repeater;
    };
    name: string;
    channel: Channel;
    constructor(name: string, channel: Channel);
    register(cb: Function, ...args: any[]): Repeater;
    registerTemporary(cb: Function, ...args: any[]): Repeater;
    remove(repeater: Repeater): void;
}
