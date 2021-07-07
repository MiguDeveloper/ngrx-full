import { of, from } from 'rxjs';

import { distinct } from 'rxjs/operators';

const numbers$ = of(1, 2, 1, 2, 3, 4, 3, 5, 5, 5, 1, 2);
numbers$.pipe(distinct()).subscribe((value) => console.log(value));

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: 'Megaman' },
  { nombre: 'X' },
  { nombre: 'Zero' },
  { nombre: 'Megaman' },
  { nombre: 'X' },
  { nombre: 'Dr. Willy' },
  { nombre: 'X' },
  { nombre: 'X' },
];

const persons$ = from(personajes);
persons$
  .pipe(distinct((person) => person.nombre))
  .subscribe((value) => console.log(value));
