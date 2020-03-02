export declare class UTF8 {
    static findSequence(input?: any, sequence?: any[], index?: number): number[];
    static decodeEntities(input: string): string;
    static decodeUTF8ToStr(input: any): string;
    static filterUnsafeUnicode(input: string): string;
    static encodeStrToUTF8(input: string): number[];
    static encodeStrToHexUTF8(input: string): string;
}
export declare class Objects {
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
export declare class Strings {
    static format(str: string, ...args: any[]): string;
    static capitalize: (str: string) => string;
}
export declare class AppCache {
    version: number;
    _cache: Storage;
    constructor(version?: number);
    add(name: string, value: string | number | Object): void;
    get(name: string, normalize?: boolean): any;
    has(name: string): boolean;
    hasAll(...names: string[]): boolean;
    hasAny(...names: string[]): boolean;
    updateVersion(): void;
    hasVersionChanged(): boolean;
    isInvalidVersion(): boolean;
}
export declare class DateFormatter {
    date: Date;
    raw: any;
    months: {
        [k: number]: string;
    };
    constructor(timestamp: any);
    localDate(): string;
    localTime(): string;
    getCondensedDay(): string;
    stdDate(): string;
    stdTime(): string;
    stdDateAndTime(): string;
    getHour(extended?: boolean, leading?: boolean): string;
    getMinute(leading?: boolean): string;
    getSecond(leading?: boolean): string;
    getMeridiem(): "AM" | "PM";
    getDay(ordinal?: boolean, leading?: boolean): string;
    getMonth(leading?: boolean): string;
    getYear(): string;
    getMonthName(number?: number): string;
    getShortMonthName(number?: number): string;
    daysElapsed(predicate: number): number;
    hasDaysElapsed(predicate: number, days: number, inclusive?: boolean): boolean;
    hasYearElapsed(predicate: number): boolean;
    static hasYearPassed(predicate: number, subject: number): boolean;
}
export declare class Elements {
    static createElFromString(markup: string): Element;
}
export declare class Condition {
    delay: number;
    isLocked: boolean;
    pending: Promise<any> | undefined;
    constructor(delay?: number, lock?: boolean, ...args: any[]);
    lock(predicate: Function, ...args: any[]): Promise<void>;
    test(predicate: Function, resolve: Function): Promise<void>;
}
export declare class FileLock extends Condition {
}
export declare class Files {
    static download(content: string, name: string, type?: string): void;
}
