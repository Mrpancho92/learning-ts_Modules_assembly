"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import type { Queue } from "./queue"; // type показывает что импортируется тип 
// import { type Queue } from "./queue"; // в более современных версиях
// При использовании в tsconfig.json "module": "ES2015" вместо "module": "CommonJS" нужно в package.json добавить строчку "type": "module" и конкретно указать путь к файлу при импорте "./queue.js".
// "type": "module" необходимо и в html файле прописать в теге скрипт после src.
// Если использовать "module": "CommonJS" то в браузере будет ошибка. Этот тип модулей необходимо собирать с помощью сборщиков. 
const queue_js_1 = require("./queue.js");
class ArrayQueue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        if (this.isEmpty()) {
            // throw new Error("Queue Underflow");
            throw new Error(queue_js_1.underflow);
        }
        return this.queue.shift();
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[0];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    length() {
        return this.queue.length;
    }
}
class Stack {
    constructor(limit = Number.MAX_VALUE) {
        this.stack = [];
        this.limit = limit;
    }
    push(value) {
        if (this.length() + 1 > this.limit) {
            throw new Error("Stack Overflow");
        }
        this.stack.push(value);
    }
    pop() {
        if (this.length() !== 0) {
            return this.stack.pop();
        }
        throw new Error("Stack Underflow");
    }
    length() {
        return this.stack.length;
    }
    isEmpty() {
        return this.length() === 0;
    }
    top() {
        if (this.length() !== 0) {
            return this.stack[this.length() - 1];
        }
        return null;
    }
}
// Для тестов
const arrTest1 = new ArrayQueue();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
console.log(arrTest1.peek());
console.log(arrTest1.dequeue());
console.log(arrTest1.length());
const arrTest2 = new ArrayQueue();
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
