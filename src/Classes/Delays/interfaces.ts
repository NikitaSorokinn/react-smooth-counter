export interface IDelay {

    delay(delayMs: number, callBack: ()=>any): Promise<any>
}