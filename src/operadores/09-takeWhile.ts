import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const obsClick$ = fromEvent<MouseEvent>(document, 'click');

obsClick$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('complete'),
  });
