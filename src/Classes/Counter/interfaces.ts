import {IDelay} from "../Delays/interfaces";
import {IAnimation} from "../Animation/interface";

export interface IAnimateCounter {
    IAnimation: IAnimation
}

export interface ICounter {
    htmlElement: HTMLElement
    startNumber: number

    count(endNumber: number, delayMs: number): void
}

export interface IDelayCounter {
    IDelay: IDelay
}

export interface IQueueCounter {
    queue: number[]
    currentQueue: number
}