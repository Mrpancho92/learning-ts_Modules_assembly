// import type { Queue } from "./queue"; // type показывает что импортируется тип 
// import { type Queue } from "./queue"; // в более современных версиях
// При использовании в tsconfig.json "module": "ES2015" вместо "module": "CommonJS" нужно в package.json добавить строчку "type": "module" и конкретно указать путь к файлу при импорте "./queue.js".
// "type": "module" необходимо и в html файле прописать в теге скрипт после src.
// Если использовать "module": "CommonJS" то в браузере будет ошибка. Этот тип модулей необходимо собирать с помощью сборщиков. 
import { type Queue, underflow } from "./queue.js";

class ArrayQueue<T> implements Queue<T> {
    private queue: T[] = [];

    enqueue(this: ArrayQueue<T>, item: T): void {
        this.queue.push(item);
    }

    dequeue(this: ArrayQueue<T>): T {
        if (this.isEmpty()) {
            // throw new Error("Queue Underflow");
            throw new Error(underflow);
        }

        return this.queue.shift() as T;
    }

    peek(this: ArrayQueue<T>): T | null {
        if (this.isEmpty()) {
            return null;
        }

        return this.queue[0];
    }

    isEmpty(this: ArrayQueue<T>): boolean {
        return this.queue.length === 0;
    }

    length(this: ArrayQueue<T>): number {
        return this.queue.length;
    }
}

class Stack<T> {
    private stack: T[] = [];
    private limit: number;

    constructor(limit: number = Number.MAX_VALUE) {
        this.limit = limit;
    }

    push(this: Stack<T>, value: T) {
        if (this.length() + 1 > this.limit) {
            throw new Error("Stack Overflow");
        }

        this.stack.push(value);
    }

    pop(this: Stack<T>): T {
        if (this.length() !== 0) {
            return this.stack.pop() as T;
        }

        throw new Error("Stack Underflow");
    }

    length(this: Stack<T>): number {
        return this.stack.length;
    }

    isEmpty(this: Stack<T>): boolean {
        return this.length() === 0;
    }

    top(this: Stack<T>): T | null {
        if (this.length() !== 0) {
            return this.stack[this.length() - 1];
        }

        return null;
    }
}

// Для тестов
const arrTest1 = new ArrayQueue<number>();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
console.log(arrTest1.peek());
console.log(arrTest1.dequeue());
console.log(arrTest1.length());

const arrTest2 = new ArrayQueue<string>();
arrTest2.enqueue("5");
arrTest2.enqueue("10");
console.log(arrTest2.peek());
console.log(arrTest2.dequeue());
console.log(arrTest2.length());

// const stackTest1 = new Stack<number>(10);
// stackTest1.push(20);
// stackTest1.push(50);
// console.log(stackTest1.top());
// console.log(stackTest1.pop());
// console.log(stackTest1.length());

// const stackTest2 = new Stack<string>(10);
// stackTest2.push("20");
// stackTest2.push("50");
// console.log(stackTest2.top());
// console.log(stackTest2.pop());
// console.log(stackTest2.length());