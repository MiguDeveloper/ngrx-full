import { from, Observer, of } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log(`next ${value}`),
  error: (err) => console.log(`error: ${err}`),
  complete: () => console.log('complete'),
};

const sourceFrom$ = from([1, 2, 3, 4, 5, 6]);
const sourceOf$ = of(...[1, 2, 3, 4, 5, 6]);
const sourceFetch$ = from(fetch('https://api.github.com/users/klerith'));

sourceFrom$.subscribe(observer);
sourceOf$.subscribe(observer);
sourceFetch$.subscribe(async (resp) => {
  console.log(resp);
  const data = await resp.json();
  console.log(data);
});

// funcion generadora
const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();
from(miIterable).subscribe(observer);
