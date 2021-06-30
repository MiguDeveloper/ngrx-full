import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

const sum = (acc, curr) => acc + curr;

const obs$ = interval(1000);

obs$
  .pipe(
    take(6),
    tap((value) => console.log(value)),
    reduce(sum, 0)
  )
  .subscribe((value) => console.log(value));
