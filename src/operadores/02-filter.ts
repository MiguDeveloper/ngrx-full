import { from, fromEvent, Observer, of, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const observer: Observer<any> = {
  next: (value) => console.log(`${JSON.stringify(value)}`),
  error: (err) => console.log(`error ${err}`),
  complete: () => console.log('complete'),
};

range(1, 10)
  .pipe(
    filter((value, index) => {
      //console.log('index', index);
      return value % 2 === 1;
    })
  )
  .subscribe((x) => console.log(x));

const personajes = [
  {
    tipo: 'heroe',
    nombre: 'batman',
  },
  {
    tipo: 'heroe',
    nombre: 'robin',
  },
  {
    tipo: 'villano',
    nombre: 'jocker',
  },
];

const obs$ = from(personajes);

obs$
  .pipe(filter((personaje) => personaje.tipo === 'heroe'))
  .subscribe(observer);

const obsKeyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

obsKeyup$
  .pipe(
    map((evento) => evento.code),
    filter((code) => code === 'Enter')
  )
  .subscribe((val) => console.log(val));
