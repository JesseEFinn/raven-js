import { Radio, Spectrum, Frequency, Channel, Receiver } from "lib/common";
export declare class Broadcast {
    radio: Radio;
    input: string;
    source: string;
    bands: string[];
    spectrum: Spectrum;
    frequency: Frequency;
    channels: Channel[];
    receivers: Map<Channel, Receiver[]>;
    before: Map<Channel, Receiver[]>;
    after: Map<Channel, Receiver[]>;
    constructor(radio: Radio, input?: string, source?: string);
    readonly hasRepeatersBefore: boolean;
    readonly hasRepeatersAfter: boolean;
    _resolveSpectrum(name: string): Spectrum;
    _resolveFrequency(bands: string[], spectrum?: Spectrum): Frequency;
    _resolveReceivers(channels: Channel[], input?: string): Map<Channel, Receiver[]>;
    _resolveChannelsAndReceivers(channelNames: string[] | null, frequency: Frequency): [Channel[], Map<Channel, Receiver[]>];
    _resolveSourceComponents(source: string): [string, string[], string[] | null];
    _resolvePrimarySource(predicate: string): [string, string[]];
    _resolveSecondarySource(predicate: string[] | null): string[] | null;
    _resolveFrequencyBands(name: string): string[];
    _resolveChannelNames(channels: string): string[];
}
