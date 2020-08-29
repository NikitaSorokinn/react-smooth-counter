export interface ISmoothCounterProps {
    className?: string
    from: number
    to: number
    delay?: number
    style?: object
}

export interface ISmoothCounter {

    $el: HTMLElement | null
    delay: number | undefined
    from: number
    to: number

    animateCounter():void
    delayPromise(): Promise<undefined>
}