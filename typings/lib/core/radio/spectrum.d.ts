import { Frequency } from "lib/common";
export declare class Spectrum {
    frequencies: {
        [key: string]: Frequency;
    };
    name: string;
    constructor(name: string);
    frequency(name: string): Frequency;
    registerFrequency(name: string, parent?: Frequency, frequency?: Frequency): Frequency;
}
