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

const subs1 = intervalo$.subscribe((num) => console.log(num));
const subs2 = intervalo$.subscribe((num) => console.log(num));
const subs3 = intervalo$.subscribe((num) => console.log(num));

subsArr.push(subs1, subs2, subs3);

// Recoradar que el complete no es igual que el unsubscribe
setTimeout(() => {
  subsArr.forEach((sub) => sub.unsubscribe());
}, 3500);
