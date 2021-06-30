import { interval, Observer, of, range, merge, fromEvent } from 'rxjs';
import { map, mapTo, pluck, take } from 'rxjs/operators';

const observer: Observer<any> = {
  next: (value) => console.log(`next ${value}`),
  error: (err) => console.log(`error ${err}`),
  complete: () => console.log('complete'),
};

//const obs$ = of(...[1, 2, 3, 4, 5]);
const obs$ = range(1, 5);
obs$.pipe(map((value) => value * 10)).subscribe(observer);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

// map: transformamos el flujo por un stream
keyUp$.pipe(map((event) => event.code)).subscribe((code) => console.log(code));

// pluck: tomamos una propiedad especifica del objeto que fluye
const keyupPluck$ = keyUp$.pipe(pluck('code'));
keyupPluck$.subscribe((code) => console.log('pluck', code));

// mapTo: emitimos un elemento especifico
const keyupMapto$ = keyUp$.pipe(mapTo('tecla presionada'));
keyupMapto$.subscribe((value) => console.log('mapTo', value));

const interval$ = interval(1000);

interval$
  .pipe(take(5), mapTo('ejecutandose'))
  .subscribe((resp) => console.log(resp));

const emit1$ = interval(1000);
const emit2$ = interval(2000);
const emit3$ = interval(2500);
const emit4$ = interval(3000);

merge(
  emit1$.pipe(mapTo('primero')),
  emit2$.pipe(mapTo('segundo')),
  emit3$.pipe(mapTo('tercero')),
  emit4$.pipe(mapTo('cuarto'))
).subscribe(observer);
