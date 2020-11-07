import React, {Dispatch, useLayoutEffect, useState, useRef} from "react";

import {ICounter} from "../../Classes/Counter/interfaces";

import {AnimateCounter} from "../../Classes/Counter/AnimateCounter";
import {IAnimation} from "../../Classes/Animation/interface";
import {IDelay} from "../../Classes/Delays/interfaces";

export const useCounter = (startNumber: number, endNumber: number,
                    delayMs: number, style: {}, className: string, IDelay: IDelay, IAnimation: IAnimation) => {
    const spanEl = useRef(null)
    const [iCounter, setCounter]: [ICounter | undefined, Dispatch<ICounter>] = useState()

    const count = (counter: ICounter) => {
        counter.count(endNumber, delayMs)
    }

    useLayoutEffect(()=>{

        const counterImplement: ICounter = new AnimateCounter(spanEl.current, startNumber, IDelay, IAnimation)
        if (startNumber !== endNumber) count(counterImplement)
        setCounter(counterImplement)
    }, [])

    useLayoutEffect(()=>{
        if (iCounter !== undefined) count(iCounter)
    }, [iCounter, endNumber])

    return (
        <span ref={spanEl} style={style} className={className}>
        </span>
    )
}