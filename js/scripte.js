// ВЫДАЧА АТРИБУТОВ КЛЕТКАМ
let excel = document.getElementsByClassName('excel');

let x = 0, y = 0;
for (let i = 0; i < 64; i++) {
   if (x > 7) {
      y++;
      x = 0;
   }

   excel[i].setAttribute('posX', x);
   excel[i].setAttribute('posY', y);
   excel[i].setAttribute('number', i);

   x++;
   if ((i % 2 == 1 && y % 2 == 1) || (i % 2 != 1 && y % 2 != 1)) {
      excel[i].style.backgroundColor = "rgb(235,236,208)";
   }
   else {
      excel[i].style.backgroundColor = "rgb(119,149,86)";
   }
}
// ВЫДАЧА АТРИБУТОВ КЛЕТКАМ

// ПОСТАНОВКА КОНЯ В РАНДОМНОЕ МЕСТО
let a = Math.round(Math.random() * 63);
console.log(a);

excel[a].classList.add('current');
excel[a].classList.add('set');
// ПОСТАНОВКА КОНЯ В РАНДОМНОЕ МЕСТО

let map = [
   [50, 11, 24, 63, 14, 37, 26, 35],
   [23, 62, 51, 12, 25, 34, 15, 38],
   [10, 49, 64, 21, 40, 13, 36, 27],
   [61, 22, 9, 52, 33, 28, 39, 16],
   [48, 7, 60, 1, 20, 41, 54, 29],
   [59, 4, 45, 8, 53, 32, 17, 42],
   [6, 47, 2, 57, 44, 19, 30, 55],
   [3, 58, 5, 46, 31, 56, 43, 18],
];

let step = 1;
excel[a].innerHTML = step;
step++;

function nextStep() {
   let currentX = excel[a].getAttribute('posX');
   let currentY = excel[a].getAttribute('posY');
   let start = map[currentY][currentX];

   for (let i = 0; i < excel.length; i++) {
      currentX = excel[i].getAttribute('posX');
      currentY = excel[i].getAttribute('posY');

      let temp = map[currentY][currentX] - start + 1;
      if (temp <= 0) {
         temp = temp + 64;
      }

      if (temp == step) {
         document.querySelector('.current').classList.remove('current');
         excel[i].innerHTML = temp;
         excel[i].classList.add('current');
         excel[i].classList.add('set');
         step++;
         break;
      }
   }
}

Start.onclick = function () {
   let speed = 1000;
   let i = 10;
   let interval = setInterval(() => {
      nextStep();
   }, speed);
   Stop.onclick = function () {
      clearInterval(interval);
      document.getElementById("Stop").disabled = true;
      document.getElementById("Start").disabled = false;
   };
   document.getElementById("Start").disabled = true;
   document.getElementById("Stop").disabled = false;
};

Stop.onclick = function () {
   clearInterval(interval);
   // document.getElementById("Stop").disabled = true;
};



