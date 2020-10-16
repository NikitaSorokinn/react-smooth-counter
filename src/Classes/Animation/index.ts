import {IAnimation} from "./interface";

export abstract class Animation implements IAnimation {

    abstract animate(endNumber: number, htmlElement: HTMLElement, finishAnimationCallback: ()=>void): any
}