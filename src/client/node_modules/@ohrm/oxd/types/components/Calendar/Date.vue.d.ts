import type { PropType } from 'vue';
import type { CalendarDayAttributes, CalendarEvent } from './types';
declare const _default: import("vue").DefineComponent<{
    date: {
        type: PropType<Date>;
        required: true;
    };
    selected: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    today: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    offset: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    attributes: {
        type: PropType<CalendarDayAttributes>;
        required: false;
        default: () => {};
    };
    event: {
        type: PropType<CalendarEvent>;
        required: false;
        default: () => {};
    };
}, {
    innerClasses: import("vue").ComputedRef<string[]>;
    wrapperClasses: import("vue").ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    date: {
        type: PropType<Date>;
        required: true;
    };
    selected: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    today: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    offset: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    attributes: {
        type: PropType<CalendarDayAttributes>;
        required: false;
        default: () => {};
    };
    event: {
        type: PropType<CalendarEvent>;
        required: false;
        default: () => {};
    };
}>>, {
    selected: boolean;
    today: boolean;
    offset: number;
    attributes: CalendarDayAttributes;
    event: CalendarEvent;
}>;
export default _default;
