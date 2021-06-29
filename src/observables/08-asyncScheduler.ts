// El asyncScheduler genera una suscripcion y nos permite administrar
// de una mejor manera los ciclos de un setTimeout y setInterval

import { asyncScheduler } from 'rxjs';

const task = () => {
  console.log('task complete');
};

const todo = (task) => {
  console.log(`task done ${task}`);
};

// Ejemplo que puede reemplazar el setTimeout(()=>{},1000)
const subs = asyncScheduler.schedule(task, 2000);
const subsTodo = asyncScheduler.schedule(todo, 4000, 'Codear');

// Ejemplo que puede reemplazar el setInterval(()=>{},1000)
const subsTime = asyncScheduler.schedule(
  function time(state) {
    console.log(state);
    this.schedule(++state, 1000);
  },
  6000,
  0
);

asyncScheduler.schedule(() => {
  subsTime.unsubscribe();
}, 10000);
