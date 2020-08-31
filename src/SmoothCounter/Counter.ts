import {ISmoothCounter} from "./interfaces";

export default class Counter implements ISmoothCounter{

    $el: HTMLElement | null;
    delay: number | undefined;
    defaultNumber: number;
    to: number;

    constructor(spanEl: HTMLElement | null, defaultNumber: number) {
        this.$el = spanEl
        this.defaultNumber = defaultNumber
        if (this.$el === null) throw new Error("Span has not found")
    }

    count = (to: number, delay: number): void => {
        this.to = Math.round(to)
        this.delay = delay

        this.$el.innerText = this.defaultNumber.toString()
        this.delayPromise().then(()=>{this.animateCounter()})
    }

    animateCounter = (): void => {
        let sign: number = 1
        let currentCount: number = Number(this.$el.innerText)
        let left: number = this.to - currentCount

        if (currentCount > this.to) {
            sign = -1
            left = currentCount - this.to
        }
        if (currentCount === this.to) {
            this.defaultNumber = this.to
            return
        }

        let incrementRadius: number = Math.round(left / 10)
        const increment: number = incrementRadius === 0 ? 1 : incrementRadius * 2
        currentCount = currentCount + (increment * sign)

        this.$el.innerText = currentCount.toString()

        requestAnimationFrame(this.animateCounter)
    }

    delayPromise = (): Promise<undefined> => {
        return new Promise<undefined>((resolve)=>{
            setTimeout(()=>{
                resolve()
            }, this.delay)
        })
    }
}