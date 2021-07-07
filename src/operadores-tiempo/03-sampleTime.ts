import { Observer, fromEvent } from 'rxjs';

import { map, sampleTime } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    sampleTime(1000),
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe((value) => console.log(value));
