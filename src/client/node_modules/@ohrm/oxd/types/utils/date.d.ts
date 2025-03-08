import { isEqual, getYear, getMonth, nextSunday, nextSaturday, getDaysInMonth } from 'date-fns';
declare const freshDate: () => Date;
declare const parseDate: (value: string, dateFormat: string, options?: {}) => Date | null;
declare const formatDate: (value: Date, dateFormat: string, options?: {}) => string | null;
declare const rearrangeWeek: (weekStartsOn: number) => number[];
declare const getDayOffset: (date: Date, weekStartsOn: number) => number;
/**
 * convertPHPDateFormat will return format string matching with
 * date-fns library. see https://date-fns.org/v2.28.0/docs/Unicode-Tokens
 * @param {string} format PHP-style date format string
 * @returns {string}
 */
declare function convertPHPDateFormat(format: string): string;
export { isEqual, getYear, getMonth, freshDate, parseDate, formatDate, nextSunday, nextSaturday, getDayOffset, rearrangeWeek, getDaysInMonth, convertPHPDateFormat, };
