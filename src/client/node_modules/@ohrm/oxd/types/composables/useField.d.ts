import type { Ref } from 'vue';
import type { ErrorField, FormAPI, Rule } from './types';
export default function useField(fieldContext: {
    fieldLabel: string;
    rules: Rule[];
    modelValue: Ref<any>;
    onReset: () => Promise<void>;
    disabled: Ref<boolean>;
}): {
    form: FormAPI;
    reset: () => void;
    validate: () => Promise<ErrorField>;
    hasError: import("vue").ComputedRef<boolean>;
    message: import("vue").ComputedRef<string | null>;
};
