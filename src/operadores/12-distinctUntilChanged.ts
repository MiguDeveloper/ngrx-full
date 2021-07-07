import { of, Observer, from } from 'rxjs';

import { distinctUntilChanged } from 'rxjs/operators';

const observer: Observer<any> = {
  next: (value) => console.log(`next: ${value}`),
  error: (err) => console.log(`error: ${err}`),
  complete: () => console.log('complete'),
};

const numbers$ = of(1, 2, 1, 2, 3, 3, 3, 4, 5, 3, 5, 5, 5, 1, 2);
numbers$.pipe(distinctUntilChanged()).subscribe((value) => console.log(value));

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: 'Megaman' },
  { nombre: 'Megaman' },
  { nombre: 'X' },
  { nombre: 'Zero' },
  { nombre: 'Zero' },
  { nombre: 'Megaman' },
  { nombre: 'X' },
  { nombre: 'Dr. Willy' },
  { nombre: 'X' },
  { nombre: 'X' },
];

const persons$ = from(personajes);
persons$
  .pipe(distinctUntilChanged((prev, cur) => prev.nombre === cur.nombre))
  .subscribe((value) => console.log(value));
