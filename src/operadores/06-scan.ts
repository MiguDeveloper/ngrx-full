import { from } from 'rxjs';
import { map, pluck, reduce, scan } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];
const sum = (acc, cur) => acc + cur;

// El operador reduce se caracteriza porque solo tiene una unica emision
const obs$ = from(numbers);
obs$.pipe(reduce(sum, 0)).subscribe((value) => console.log(value));

// El operador scan a diferencia de reduce es que si emite segun el flujo
obs$.pipe(scan(sum, 0)).subscribe((value) => console.log(value));

interface User {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const users: User[] = [
  { id: 'miguel', autenticado: true, token: null },
  { id: 'jeube', autenticado: false, token: 'ABC' },
  { id: 'oieon', autenticado: false, token: 'ABC123' },
];

const state$ = from(users);
const ids$ = state$.pipe(scan<User>((acc, cur) => ({ ...acc, ...cur }), {}));

ids$.pipe(pluck('id')).subscribe((value) => console.log(value));
