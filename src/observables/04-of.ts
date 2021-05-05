import { of } from 'rxjs';

// const obs$ = of<number>(1, 2, 3, 4, 5, 6);
// const obs$ = of<number>(...[1, 2, 3], 4, 5, 6);

const obs$ = of<any>(
  [1, 2],
  { a: 1, b: 2 },
  function () {},
  true.valueOf,
  Promise.resolve(true)
);
obs$.subscribe(
  (resp) => console.log(resp),
  null,
  () => console.log('complete')
);
