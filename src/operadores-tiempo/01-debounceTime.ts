import { Observer, fromEvent } from 'rxjs';

import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

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
  .pipe(debounceTime(1000), pluck('target', 'value'), distinctUntilChanged())
  .subscribe((value) => console.log(value));
