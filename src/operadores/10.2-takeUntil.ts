import { interval } from 'rxjs';
import { filter, map, scan, takeUntil, withLatestFrom } from 'rxjs/operators';

const numbers$ = interval(1000);
const isEven = (number) => number % 2 === 0;
const numbersEven$ = numbers$.pipe(filter(isEven));
const countEven$ = numbersEven$.pipe(scan((acc, cur) => acc + 1, 0));
const fiveEvenNumbers$ = countEven$.pipe(filter((val) => val > 5));

numbersEven$
  .pipe(
    withLatestFrom(countEven$),
    map(([number, count]) => `Even number (${count}): ${number}`),
    takeUntil(fiveEvenNumbers$)
  )
  .subscribe((value) => console.log(value));
