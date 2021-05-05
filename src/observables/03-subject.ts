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
const subsDeSubject = obs$.subscribe(subject$);

// subs no coordinados
// const sub1 = obs$.subscribe((rnd) => console.log(`subs1 ${rnd}`));
// const sub2 = obs$.subscribe((rnd) => console.log(`subs2 ${rnd}`));

// subs coordinados por el subject
const sub1 = subject$.subscribe((rnd) => console.log(`subs1 ${rnd}`));
const sub2 = subject$.subscribe((rnd) => console.log(`subs2 ${rnd}`));

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subsDeSubject.unsubscribe();
}, 3500);
