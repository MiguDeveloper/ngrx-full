import { Observable, Observer, Subscription } from 'rxjs';
const observer: Observer<any> = {
  next: (rpta) => console.log(`siguiente [obs]: ${rpta}`),
  error: (err) => console.log(`error [obs]: ${err}`),
  complete: () => console.log('complete'),
};

const subsArr: Subscription[] = [];

const intervalo$ = new Observable<number>((subs) => {
  let cont = 0;
  const interval = setInterval(() => {
    cont++;
    subs.next(cont);
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log('intervalo destruido');
  };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

// una alternativa para encadenar subscripciones es usa el add
subs1.add(subs2).add(subs3);

subsArr.push(subs1, subs2, subs3);

// Recoradar que el complete(este siempre ejecuta el return del subscriber)
// no es igual que el unsubscribe
setTimeout(() => {
  subs1.unsubscribe();
  //subsArr.forEach((sub) => sub.unsubscribe());
  console.log('completado setTimeout');
}, 3500);
