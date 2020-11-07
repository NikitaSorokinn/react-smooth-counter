export interface IAnimation {

    animate(endNumber: number, htmlElement: HTMLElement, finishAnimationCallback: ()=>void): any
}