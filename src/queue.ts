// export default interface Queue<T>  // так делать нельзя будет ошибка.

export interface Queue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined | null;
    isEmpty(): boolean;
    length(): number;
}

export const underflow = "Queue Underflow";