declare class EventBus {
    private queue;
    constructor();
    $on(name: string, callback: (data: any) => void): void;
    $off(name: string, callback: () => void): void;
    $emit(name: string, data: any): void;
}
export default function useEventBus(): EventBus;
export {};
