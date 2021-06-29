import { interval, Observer, timer } from 'rxjs';
import { take } from 'rxjs/operators';

const observer: Observer<any> = {
  next: (value) => console.log(`next ${value}`),
  error: (err) => console.log(`error ${err}`),
  complete: () => console.log('complete'),
};

// El interval y el timer es asincrono por naturaleza
// el timer ejecuta el complete de tener un solo parametro, pero si pasamos
// dos parametros el primero indica el tiempo tras cual inicia la primera emision
// y ya no se detiene imitando el comportamiento del interval
const interval$ = interval(1000);
const timer$ = timer(3000);

// un ejemplo interesante seria mandar una notificacion despues de 5seg
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const notifiacion$ = timer(hoyEn5);

console.log('inicio');
//interval$.pipe(take(4)).subscribe(observer);
//timer$.subscribe(observer);
notifiacion$.subscribe(observer);
console.log('fin');
