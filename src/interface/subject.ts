import { IObserver } from "./observer";

export interface ISubject<T> {
    observers: IObserver<T>[];
    subscribe(observer: IObserver<T>):void;
    unsubscribe(observer: IObserver<T>):void;
    notify(value: T):void;
}