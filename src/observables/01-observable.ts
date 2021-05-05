import { Observable, Observer } from 'rxjs';

// usando el metodo estatico
// const obs$ = Observable.create();

const observer: Observer<string> = {
  next: (value) => console.log(`siguiente [next]: ${value}`),
  error: (error) => console.log(`error [obs]: ${error}`),
  complete: () => console.log('complete'),
};

const obs$ = new Observable<string>((subs) => {
  subs.next('Hola');
  subs.next('Miguel');
  subs.complete(); // corta la emision
  subs.next('Miguel');
});

// ejecutando los 3 callback del subscribe
// obs$.subscribe(
//   (rpta) => console.log(rpta),
//   (error) => console.log(error),
//   () => console.log('complete')
// );

// usando el observer
obs$.subscribe(observer);
