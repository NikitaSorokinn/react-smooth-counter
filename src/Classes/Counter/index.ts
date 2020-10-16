import { ICounter } from "./interfaces";

export abstract class Counter implements ICounter{

     htmlElement: HTMLElement
     startNumber: number

    protected constructor(htmlElement: HTMLElement, startNumber: number) {
        this.htmlElement = htmlElement
        this.startNumber = startNumber
    }

    abstract count(endNumber: number, delayMs: number): void
}