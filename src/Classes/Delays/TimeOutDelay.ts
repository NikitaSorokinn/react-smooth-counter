import {IDelay} from "./interfaces";

export class TimeOutDelay implements IDelay {

    delay(delayMs: number, callBack: ()=> void): Promise<undefined> {

        return new Promise((resolve)=> {

            const innerCallBack = function () {
                callBack()
                resolve()
            }

            setTimeout(innerCallBack, delayMs)
        })
    }
}