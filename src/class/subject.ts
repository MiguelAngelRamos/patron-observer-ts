import { ISubject } from "../interface/subject";
import { IObserver } from "../interface/observer";

export class Subject<T> implements ISubject<T> {

    observers: IObserver<T>[];

    constructor() {
        this.observers = [];
    }

    subscribe(observer: IObserver<T>): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver<T>): void {
        this.observers = this.observers.filter((obs: IObserver<T>):boolean => obs !== observer);
    }

    notify(value: T): void {
        this.observers.forEach((observer: IObserver<T>) => observer.refresh(value));
    }

}