export declare type LangPack = {
    narrow?: string[];
    short?: string[];
    abbreviated?: string[];
    wide?: string[];
};
export interface LangStrings {
    months: LangPack;
    days: LangPack;
}
declare function buildLocale(langstrings: LangStrings): Locale;
export default buildLocale;
