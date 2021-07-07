import { from } from 'rxjs';

import { distinctUntilKeyChanged } from 'rxjs/operators';

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
  .pipe(distinctUntilKeyChanged('nombre'))
  .subscribe((value) => console.log(value));
