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
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(value: T): void {
        this.observers.forEach(observer => observer.refresh(value));
    }

}