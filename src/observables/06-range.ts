// range crea un observable en base a un rango en principio son sincronos
// pero puedes modificarlo con el scheduler

import { asyncScheduler, Observer, range } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log(`next ${value}`),
  error: (err) => console.log(`error: ${err}`),
  complete: () => console.log,
};

const secuence$ = range(0, 10);

// lo volvemos asincrono con el scheduler
const secuenceAsync$ = range(0, 10, asyncScheduler);

console.log('inicio');
//secuence$.subscribe(observer);
secuenceAsync$.subscribe(observer);
console.log('fin');
