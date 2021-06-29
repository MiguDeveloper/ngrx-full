import { Observable, Observer, Subject, Subscription } from 'rxjs';
const observer: Observer<any> = {
  next: (rpta) => console.log(`siguiente [obs]: ${rpta}`),
  error: (err) => console.log(`error [obs]: ${err}`),
  complete: () => console.log('complete'),
};

const obs$ = new Observable<number>((subs) => {
  const interval = setInterval(() => {
    subs.next(Math.random() * 10);
  }, 1000);

  return () => clearInterval(interval);
});

// Observaciones del Subject:
// 1. Casteo multiple, es decir emite el mismo valor a los subs
// 2. tambien es un observer
// 3. tiene los metodos next, error, complete

const subject$ = new Subject();
const subscription = obs$.subscribe(subject$);

// subs no coordinados
// const sub1 = obs$.subscribe((rnd) => console.log(`subs1 ${rnd}`));
// const sub2 = obs$.subscribe((rnd) => console.log(`subs2 ${rnd}`));

// subs coordinados por el subject
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);
const subs3 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);
