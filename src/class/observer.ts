import {IObserver} from "../interface/observer";

export class Observer<T> implements IObserver<T> {

    private readonly fn: (value: T) => void;
    constructor(fn: (value: T) => void) {
        this.fn = fn;
    }
    refresh(value: T): void {
        this.fn(value);
    }

}