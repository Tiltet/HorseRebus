// ФУНКЦИИ ДЛЯ КНОПОК START И STOP
let button__start = document.getElementById('button__start');
let button__stop = document.getElementById('button__stop');

const countSpan = document.querySelector('.counter__count');
let count = 900;

let interval;

button__start.addEventListener('click', () => {
   if (a >= 0 && button__start.classList.contains('active') == 0) {
      clearInterval(interval);
      interval = setInterval(() => {
         nextStep();
      }, count);
      button__start.classList.add('active');
      button__stop.classList.remove('active');
   }
});

button__stop.addEventListener('click', () => {
   if (a >= 0 ) {
      clearInterval(interval);
      button__stop.classList.add('active');
      button__start.classList.remove('active');
   }
   clearInterval(interval);
   // button__stop.classList.add('active');
   // button__start.classList.remove('active');
});
// ФУНКЦИИ ДЛЯ КНОПОК START И STOP



// ФУНКЦИЯ ДЛЯ СЧЕТЧИКА СКОРОСТИ ХОДА
const plusBtn = document.querySelector('.counter__plus');
const minusBtn = document.querySelector('.counter__minus');

plusBtn.addEventListener('click', () => {
   if (count > 100) {
      count = count - 100;
      countSpan.textContent = (10 - Math.floor(count / 100));

      button__stop.classList.add('active');
      button__start.classList.remove('active');

      clearInterval(interval);
   }
});

minusBtn.addEventListener('click', () => {
   if (count < 900) {
      count = count + 100;
      countSpan.textContent = (10 - Math.floor(count / 100));
   }

   button__stop.classList.add('active');
   button__start.classList.remove('active');
});
// ФУНКЦИЯ ДЛЯ СЧЕТЧИКА СКОРОСТИ ХОДА



// ФУНКЦИЯ ОБНОВЛЕНИЯ СТРАНИЦЫ
const refreshBtn = document.querySelector('.button__refresh');

refreshBtn.addEventListener('click', () => {
   // window.location.reload();
   for (let i = 0; i < 64; i++) {
      clearInterval(interval);
      excel[i].innerHTML = "";
      excel[i].classList.remove('set');
      excel[i].classList.remove('current');
      a = -1, check = 0;
      button__stop.classList.add('active');
      button__start.classList.remove('active');
      step = 1;
      temp = 0;
   }
});
// ФУНКЦИЯ ОБНОВЛЕНИЯ СТРАНИЦЫ

