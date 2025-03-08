import type { PropType } from 'vue';
import type { CalendarDayAttributes, CalendarEvent } from './types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<Date>;
        required: false;
        default: () => Date;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    years: {
        type: ArrayConstructor;
        required: false;
        default: () => number[];
    };
    locale: {
        type: PropType<globalThis.Locale>;
        required: false;
        default: () => globalThis.Locale;
    };
    monthFormat: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    months: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    dayFormat: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    days: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    dayAttributes: {
        type: PropType<CalendarDayAttributes[]>;
        required: false;
        default: () => never[];
    };
    events: {
        type: PropType<CalendarEvent[]>;
        required: false;
        default: () => never[];
    };
}, {
    daysOfWeek: import("vue").ComputedRef<any[]>;
    datesOfMonth: import("vue").ComputedRef<Date[]>;
    monthsOfYear: import("vue").ComputedRef<any[]>;
    selectedDate: import("vue").ComputedRef<Date>;
    attributes: import("vue").ComputedRef<(CalendarDayAttributes | undefined)[]>;
    parsedEvents: import("vue").ComputedRef<(CalendarEvent | undefined)[]>;
    year: import("vue").Ref<number>;
    month: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "selectMonth" | "selectYear")[], "update:modelValue" | "selectMonth" | "selectYear", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<Date>;
        required: false;
        default: () => Date;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    years: {
        type: ArrayConstructor;
        required: false;
        default: () => number[];
    };
    locale: {
        type: PropType<globalThis.Locale>;
        required: false;
        default: () => globalThis.Locale;
    };
    monthFormat: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    months: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    dayFormat: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    days: {
        type: ArrayConstructor;
        required: false;
        default: () => never[];
    };
    dayAttributes: {
        type: PropType<CalendarDayAttributes[]>;
        required: false;
        default: () => never[];
    };
    events: {
        type: PropType<CalendarEvent[]>;
        required: false;
        default: () => never[];
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSelectYear?: ((...args: any[]) => any) | undefined;
    onSelectMonth?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Date;
    years: unknown[];
    months: unknown[];
    firstDayOfWeek: number;
    locale: globalThis.Locale;
    monthFormat: string;
    dayFormat: string;
    days: unknown[];
    dayAttributes: CalendarDayAttributes[];
    events: CalendarEvent[];
}>;
export default _default;
