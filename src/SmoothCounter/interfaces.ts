export interface ISmoothCounterProps {
    className?: string
    startNumber?: number
    to: number
    delay?: number
    style?: object
}

export interface ISmoothCounter {

    $el: HTMLElement | null
    delay: number | undefined
    defaultNumber: number
    to: number

    count(to: number, delay: number):void
    animateCounter():void
    delayPromise(): Promise<undefined>
}