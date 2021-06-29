import { fromEvent, Observer } from 'rxjs';

const obs1$ = fromEvent<MouseEvent>(document, 'click');
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer: Observer<any> = {
  next: (rpta) => console.log('next[obs]', rpta),
  error: (err) => console.log(err),
  complete: () => console.log('complete'),
};

obs1$.subscribe(({ x, y }) => console.log(x, y));
obs2$.subscribe((event) => console.log(event.key));
