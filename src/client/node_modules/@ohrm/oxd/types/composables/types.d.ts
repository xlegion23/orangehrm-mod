import type { InjectionKey, Ref } from 'vue';
export declare type ErrorField = {
    cid: string;
    errors: string[];
};
export declare type Rule = (value?: any) => string | boolean | Promise<string | boolean>;
export declare type ErrorBag = Array<ErrorField>;
export declare type Fieldset = Array<FormField>;
export interface FormField {
    cid: Ref<string>;
    label: Ref<string>;
    dirty: Ref<boolean>;
    touched: Ref<boolean>;
    processing: Ref<boolean>;
    validate: () => Promise<ErrorField>;
    reset: () => void;
}
export interface FormAPI {
    searchErrors: (id: string) => ErrorField[];
    purgeErrors: (id: string) => void;
    addError: (errorField: ErrorField) => void;
    registerField: (field: FormField) => void;
    unregisterField: (field: FormField) => void;
}
export declare const formKey: InjectionKey<FormAPI>;
