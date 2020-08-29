import {ISmoothCounter} from "./interfaces";

export default class Counter implements ISmoothCounter{

    $el: HTMLElement | null;
    delay: number | undefined;
    from: number;
    to: number;

    constructor(elID: string, from: number, to: number, delay?: number) {
        this.$el = document.getElementById(elID)
        this.delay = delay
        this.from = Math.round(from)
        this.to = Math.round(to)

        if (this.$el === null) throw new Error("Span has not found")
        this.$el.innerHTML = this.from.toString()

        if (this.delay === undefined) this.delay = 0

        this.delayPromise().then(()=>{this.animateCounter()})
    }

    animateCounter = (): void => {

        let sign: number = 1
        let currentCount: number = Number(this.$el.innerHTML)
        let left: number = this.to - currentCount

        if (currentCount > this.to) {
            sign = -1
            left = currentCount - this.to
        }
        if (currentCount === this.to) return

        let incrementRadius: number = Math.round(left / 18)
        const increment = incrementRadius === 0 ? 1 : incrementRadius * 2
        currentCount = currentCount + (increment * sign)

        this.$el.innerHTML = currentCount.toString()

        requestAnimationFrame(this.animateCounter)
    }

    delayPromise = () => {
        return new Promise<undefined>((resolve)=>{
            setTimeout(()=>{
                resolve()
            }, this.delay)
        })
    }
}