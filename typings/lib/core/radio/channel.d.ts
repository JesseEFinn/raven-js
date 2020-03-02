import { Receiver, Frequency } from "lib/common";
export declare class Channel {
    receivers: {
        [key: string]: Receiver;
    };
    name: string;
    frequency: Frequency;
    _band: Frequency | undefined;
    constructor(name: string, frequency: Frequency);
    receiver(name: string): Receiver;
    registerReceiver(name: string, receiver?: Receiver): Receiver;
    registerListener(name: string, cb: Function, ...args: any[]): void;
}
