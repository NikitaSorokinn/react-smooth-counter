import React, {Dispatch, useLayoutEffect, useState, useRef} from 'react'

import {ISmoothCounterProps, ISmoothCounter} from "./interfaces";

import Counter from "./Counter";

const SmoothCounter: React.FC<ISmoothCounterProps> =
    ({startNumber = 0, to, className= "", delay = 0, style= {}}) => {

    const spanEl = useRef(null)
    let [iCount, setCount]: [ISmoothCounter | undefined, Dispatch<any>] = useState()

    useLayoutEffect(()=>{
        setCount(new Counter(spanEl.current, startNumber))
    }, [])

    useLayoutEffect(()=>{
        if (iCount !== undefined) iCount.count(to, delay)
    }, [iCount, to])

    return (
        <span ref={spanEl} style={style} className={className}>
        </span>
    )
}

export default SmoothCounter