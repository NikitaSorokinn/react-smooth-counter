import {Animation} from "../index";

export class FastAnimationCounter extends Animation {

    animate(endNumber: number, htmlElement: HTMLElement, finishAnimationCallback: ()=>void): any {
        let sign: number = 1
        let currentCount: number = Number(htmlElement.innerText)
        let left: number = endNumber - currentCount

        if (currentCount > endNumber) {
            sign = -1
            left = currentCount - endNumber
        }
        if (currentCount === endNumber) {
            finishAnimationCallback()
            return
        }

        let incrementRadius: number = Math.round(left / 10)
        const increment: number = incrementRadius === 0 ? 1 : incrementRadius * 2
        currentCount = currentCount + (increment * sign)

        htmlElement.innerText = currentCount.toString()

        const callback = () => {
            this.animate(endNumber, htmlElement, finishAnimationCallback)
        }

        requestAnimationFrame(callback)
    }
}