import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const textoHtml = document.createElement('div');
let parrafos = '';
let texto =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum ullamcorper ligula a sodales. Sed sagittis tempus ipsum, id luctus sapien placerat a. Phasellus laoreet odio varius ante suscipit fringilla. Quisque vel volutpat massa. Pellentesque eleifend sagittis cursus. Aliquam eget libero a risus interdum consequat id at nunc. Curabitur hendrerit malesuada congue. Nullam tincidunt tristique nisl sit amet iaculis. Ut consectetur aliquet ante vitae iaculis. Fusce consectetur lorem sit amet eros ultrices, a aliquet felis blandit. Ut ac sollicitudin metus, sit amet porta mi. Morbi pulvinar magna quis aliquet porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur vitae commodo metus.</br></br>';
for (let index = 0; index < 10; index++) {
  parrafos += texto;
}
textoHtml.innerHTML = parrafos;

const body = document.querySelector('body');
body.append(textoHtml);

const getPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
  map((event) => getPorcentajeScroll(event)),
  tap((value) => console.log(value))
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
