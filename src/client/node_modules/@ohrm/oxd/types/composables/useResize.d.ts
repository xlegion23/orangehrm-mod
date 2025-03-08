import type { Ref } from 'vue';
export interface State {
    width: number;
    height: number;
}
export default function useResize(domElem: Ref<HTMLElement | null | undefined>): {
    width: Ref<number>;
    height: Ref<number>;
};
