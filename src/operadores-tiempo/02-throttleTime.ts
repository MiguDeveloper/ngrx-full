import { Observer, fromEvent, asyncScheduler } from 'rxjs';

import { distinctUntilChanged, throttleTime, pluck } from 'rxjs/operators';

const observer: Observer<any> = {
  next: (value) => console.log(`next: ${value}`),
  error: (err) => console.log(`error: ${err}`),
  complete: () => console.log('complete'),
};

const input = document.createElement('input');
const body = document.querySelector('body');

input.setAttribute('type', 'text');
body.append(input);

const obsInput$ = fromEvent(input, 'keyup');
obsInput$
  .pipe(
    throttleTime(1000, asyncScheduler, { leading: false, trailing: true }),
    pluck('target', 'value'),
    distinctUntilChanged()
  )
  .subscribe((value) => console.log(value));
