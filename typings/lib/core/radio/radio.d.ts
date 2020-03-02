import { Spectrum, Frequency, Channel, Broadcast, Operation } from "lib/common";
export declare class Radio {
    name: string;
    source: string;
    parent: Radio | null;
    _spectrums: {
        [key: string]: Spectrum;
    };
    _frequencies: {
        [key: string]: Frequency;
    };
    _spectrum: Spectrum | undefined;
    _frequency: Frequency | undefined;
    _channel: Channel | undefined;
    constructor(parent?: Radio | null, name?: string, spectrum?: string, frequency?: string, channel?: string);
    readonly spectrums: {
        [key: string]: Spectrum;
    };
    readonly frequencies: {
        [key: string]: Frequency;
    };
    spectrum: Spectrum;
    frequency: Frequency;
    channel: Channel;
    op(input: string, source?: string, ...args: any[]): Operation;
    register(name: string, cb: Function, broadcast: Broadcast, ...args: any[]): void;
    registerTemporary(name: string, cb: Function, broadcast: Broadcast, ...args: any[]): void;
    registerSpectrum(name: string, spectrum?: Spectrum): Spectrum;
    createBroadcast(input: string, source?: string, ...args: any[]): Broadcast;
    on(input: string, cb: Function, source?: string, ...args: any[]): void;
    once(input: string, cb: Function, source?: string, ...args: any[]): void;
    _parseAndBind(predicate: any): void;
}
