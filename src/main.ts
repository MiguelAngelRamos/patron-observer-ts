import { Subject } from "./class/subject";
import {Observer} from "./class/observer";

// Subject de tipo number
const subject:Subject<number> = new Subject<number>();

// Los observadores de tipo number
const observer_1:Observer<number> = new Observer<number>( (value:number) => console.log(`Soy observer 1: ${value}`));
const observer_2:Observer<number> = new Observer<number>( (value:number) => console.log(`Soy observer 2: ${value}`));

// Vamos a subscribirnos al Subject

subject.subscribe(observer_1);
subject.subscribe(observer_2);

subject.notify(1.2);
subject.notify(30);


//*** Ahora con String ***

const subjectString:Subject<string> = new Subject<string>();

// Los observadores de tipo string
const observer_string_1:Observer<string> = new Observer<string>( (value:string) => console.log(`Soy observer 1 -  string : ${value.toUpperCase()}`));
const observer_string_2:Observer<string> = new Observer<string>( (value:string) => console.log(`Soy observer 2 - string : ${value.toLowerCase()}`));

subjectString.subscribe(observer_string_1);
subjectString.subscribe(observer_string_2);
subjectString.notify("NoDe");
subjectString.notify("AnGuLAr");




