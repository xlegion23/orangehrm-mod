import type { Ref } from 'vue';
import type { ErrorBag, Fieldset } from './types';
export default function useFormValidation(isLoading: Ref<boolean>): {
    reset: () => void;
    validate: () => Promise<void>;
    purgeErrors: (id: string) => void;
    fieldset: Ref<Fieldset>;
    errorbag: Ref<ErrorBag>;
};
