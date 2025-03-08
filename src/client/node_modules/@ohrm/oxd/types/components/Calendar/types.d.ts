export declare const SUNDAY = "S";
export declare const MONDAY = "M";
export declare const TUESDAY = "T";
export declare const WEDNESDAY = "W";
export declare const THURSDAY = "T";
export declare const FRIDAY = "F";
export declare const SATURDAY = "S";
export declare const JANUARY = "January";
export declare const FEBRUARY = "February";
export declare const MARCH = "March";
export declare const APRIL = "April";
export declare const MAY = "May";
export declare const JUNE = "June";
export declare const JULY = "July";
export declare const AUGUST = "August";
export declare const SEPTEMBER = "September";
export declare const OCTOBER = "October";
export declare const NOVEMBER = "November";
export declare const DECEMBER = "December";
export declare const DAYS_OF_WEEK: string[];
export declare const MONTHS_OF_YEAR: string[];
export declare type CalendarEvent = {
    date: Date;
    type: string;
    class?: string;
    style?: object;
};
export interface CalendarDayAttributes {
    index: number;
    class?: string;
    style?: object;
}
