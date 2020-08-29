import React, {useEffect} from 'react'

import {ISmoothCounterProps} from "./interfaces";

import Counter from "./Counter";

const SmoothCounter: React.FC<ISmoothCounterProps> =
    ({from, to, className= "", delay, style= {}}) => {

    const spanId:string = "react-smooth-counter-span-id"

    useEffect(()=>{
        new Counter(spanId, from, to, delay)
    },[])

    return (
        <span id={spanId} style={style} className={className}>
        </span>
    )
}

export default SmoothCounter