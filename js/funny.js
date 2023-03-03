// ФУНКЦИИ ДЛЯ КНОПОК START И STOP

let button__start = document.getElementById('button__start');
let button__stop = document.getElementById('button__stop');

const countSpan = document.querySelector('.counter__count');
let count = 900;

let interval;

button__start.addEventListener('click', () => {
   interval = setInterval(() => {
      nextStep();
   }, count);
   button__start.classList.add('active');
   button__stop.classList.remove('active');
});

button__stop.addEventListener('click', () => {
   clearInterval(interval);
   button__stop.classList.add('active');
   button__start.classList.remove('active');
});

// ФУНКЦИИ ДЛЯ КНОПОК START И STOP


// ФУНКЦИЯ ДЛЯ СЧЕТЧИКА СКОРОСТИ ХОДА
const plusBtn = document.querySelector('.counter__plus');
const minusBtn = document.querySelector('.counter__minus');

plusBtn.addEventListener('click', () => {
   if (count < 900) {
      count = count + 100;
      countSpan.textContent = count;
   }
});

minusBtn.addEventListener('click', () => {
   if (count > 100) {
      count = count - 100;
      countSpan.textContent = count;
   }
});
// ФУНКЦИЯ ДЛЯ СЧЕТЧИКА СКОРОСТИ ХОДА
