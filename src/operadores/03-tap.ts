import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((x) => console.log('tap 1', x)),
    map((val) => val * 10),
    tap({
      next: (x) => console.log('despues', x),
      complete: () => console.log('se completo'),
    })
  )
  .subscribe((value) => console.log('subs', value));
