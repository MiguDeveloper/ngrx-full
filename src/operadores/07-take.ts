import { interval, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

// lo bueno es que el take cancela el observable y ya no sigue emitiendo
const numbers$ = of(1, 2, 3, 4, 5);
numbers$
  .pipe(
    tap((x) => console.log('tap', x)),
    take(1)
  )
  .subscribe(
    (x) => console.log(x),
    (err) => console.log(err),
    () => console.log('complete')
  );
const obs$ = interval(1000);
obs$.pipe(take(4)).subscribe((x) => console.log(x));
