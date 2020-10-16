import React from "react";

import {useCounter} from "../index";
import {ICounterProps} from "../interfaces";
import {FastAnimationCounter} from "../../../Classes/Animation/FastAnimationCounter";
import {TimeOutDelay} from "../../../Classes/Delays/TimeOutDelay";

export const FastCounter: React.FC<ICounterProps> =
    ({startNumber = 0, to= 0, className= "", delay = 0, style= {}}) => {

    const html = useCounter(startNumber, to, delay, style, className, new TimeOutDelay(), new FastAnimationCounter())

    return(
        html
    )
}