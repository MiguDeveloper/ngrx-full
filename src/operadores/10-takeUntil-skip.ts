import { fromEvent, interval, timer } from 'rxjs';
import { skip, takeUntil } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Detener time';

const body = document.querySelector('body');
body.append(button);

const count$ = interval(1000);

// Para este caso escucharemos el evento clik del boton,
// pero para el ejemplo lo combinaremos con skip(2) para escuchar espeficamente
// el 2do click
const clickBtn$ = fromEvent(button, 'click').pipe(skip(1));

count$.pipe(takeUntil(clickBtn$)).subscribe((value) => console.log(value));
clickBtn$.subscribe(() => console.log('hizo click'));
