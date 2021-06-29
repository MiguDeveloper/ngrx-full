import { of, Observer } from 'rxjs';

// const obs$ = of<number>(1, 2, 3, 4, 5, 6);
// const obs$ = of<number>(...[1, 2, 3], 4, 5, 6);

const observer: Observer<any> = {
  next: (value) => console.log(`next ${value}`),
  error: (err) => console.log(`error ${err}`),
  complete: () => console.log('complete'),
};

const obs2$ = of(...[1, 2, 3, 4]);
const obs$ = of(
  [1, 2],
  { a: 1, b: 2 },
  function () {},
  true.valueOf,
  Promise.resolve(true)
);

obs$.subscribe(observer);
obs2$.subscribe(observer);
