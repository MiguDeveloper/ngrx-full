import { fromEvent, Observer } from 'rxjs';
import { first, map } from 'rxjs/operators';

const observer: Observer<any> = {
  next: (value) => console.log(value),
  error: (err) => console.log(err),
  complete: () => console.log('complete'),
};

const obsClick$ = fromEvent<MouseEvent>(document, 'click');
obsClick$
  .pipe(
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first(({ clientY }) => clientY >= 150)
  )
  .subscribe(observer);
