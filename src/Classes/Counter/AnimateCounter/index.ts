import {Counter} from "../index";
import {IDelay} from "../../Delays/interfaces";
import {IAnimateCounter, IDelayCounter, IQueueCounter} from "../interfaces";
import {IAnimation} from "../../Animation/interface";

export class AnimateCounter extends Counter implements IDelayCounter, IAnimateCounter, IQueueCounter {

    IDelay: IDelay
    IAnimation: IAnimation

    queue: number[] = []
    currentQueue: number = undefined

    constructor(htmlElement: HTMLElement, startNumber: number,
                IDelay: IDelay, IAnimation: IAnimation) {

        super(htmlElement, startNumber)
        this.IDelay = IDelay
        this.IAnimation = IAnimation
        
        this.htmlElement.innerText = this.startNumber.toString()
    }

    count(endNumber: number, delayMs: number) {

        endNumber = Math.round(endNumber)

        if (this.queue[0] === this.currentQueue) {
            this.queue.push(endNumber)
        }
        else {
            this.currentQueue = endNumber

            if (this.queue[0] !== endNumber) {
                this.queue[0] = endNumber
            }

            const callback = () => {

                const finishAnimationCallback = () => {
                    this.queue.shift()
                    if (this.queue[0] !== undefined) this.count(this.queue[0], delayMs)
                }

                this.IAnimation.animate(this.currentQueue, this.htmlElement, finishAnimationCallback)
            }

            this.IDelay.delay(delayMs, callback).then()
        }
    }
}