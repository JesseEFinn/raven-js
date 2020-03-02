import { Channel, Spectrum } from "lib/common";
export declare class Frequency {
    channels: {
        [key: string]: Channel;
    };
    name: string;
    spectrum: Spectrum;
    _band: Frequency | undefined;
    constructor(name: string, spectrum: Spectrum, band?: Frequency);
    band: Frequency;
    readonly bandName: string;
    readonly fullName: string;
    channel(name: string): Channel;
    registerChannel(name: string, channel?: Channel): Channel;
}
