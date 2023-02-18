// создать поле и ячейки
let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i = 0; i < 64; i++) {
   let excel = document.createElement('div');
   field.appendChild(excel);
   excel.classList.add('excel');
}

let excel = document.getElementsByClassName('excel');
let x = 1, y = 8;
for (let i = 0; i < excel.length; i++) {
   if (x > 8) {
      x = 1;
      y--;
   }
   excel[i].setAttribute('posX', x);
   excel[i].setAttribute('posY', y);
   x++;
   if ((i % 2 == 0 && y % 2 == 0) || (i % 2 != 0 && y % 2 != 0)) {
      excel[i].style.backgroundColor = "rgb(235,236,208)";
   }
   else {
      excel[i].style.backgroundColor = "rgb(119,149,86)";
   }
}

// поставить коня на место
let a = Math.round(Math.random() * 63);
excel[a].classList.add('current');
excel[a].classList.add('set');

let step = 1;
excel[a].innerHTML = step;

let currentX = excel[a].getAttribute('posX');
let currentY = excel[a].getAttribute('posY');

function nextStep() {
   let vars = [document.querySelector('[posX = "' + (+currentX + 1) + '"][posY = "' + (+currentY + 2) + '"]'),
   document.querySelector('[posX = "' + (+currentX + 2) + '"][posY = "' + (+currentY + 1) + '"]'),
   document.querySelector('[posX = "' + (+currentX + 2) + '"][posY = "' + (+currentY - 1) + '"]'),
   document.querySelector('[posX = "' + (+currentX + 1) + '"][posY = "' + (+currentY - 2) + '"]'),
   document.querySelector('[posX = "' + (+currentX - 1) + '"][posY = "' + (+currentY - 2) + '"]'),
   document.querySelector('[posX = "' + (+currentX - 2) + '"][posY = "' + (+currentY - 1) + '"]'),
   document.querySelector('[posX = "' + (+currentX - 2) + '"][posY = "' + (+currentY + 1) + '"]'),
   document.querySelector('[posX = "' + (+currentX - 1) + '"][posY = "' + (+currentY + 2) + '"]')];

   for (let i = vars.length; i >= 0; i--) {
      if (!vars[i] || vars[i].classList.contains('set')) {
         vars.splice(i, 1);
      }
   }

   if (vars.length > 0) {
      let nextArr = [];
      function nextStep() {
         for (let i = 0; i < vars.length; i++) {
            let nextX = vars[i].getAttribute('posX');
            let nextY = vars[i].getAttribute('posY');
            let nextVars = [document.querySelector('[posX = "' + (+currentX + 1) + '"][posY = "' + (+currentY + 2) + '"]'),
            document.querySelector('[posX = "' + (+nextX + 2) + '"][posY = "' + (+nextY + 1) + '"]'),
            document.querySelector('[posX = "' + (+nextX + 2) + '"][posY = "' + (+nextY - 1) + '"]'),
            document.querySelector('[posX = "' + (+nextX + 1) + '"][posY = "' + (+nextY - 2) + '"]'),
            document.querySelector('[posX = "' + (+nextX - 1) + '"][posY = "' + (+nextY - 2) + '"]'),
            document.querySelector('[posX = "' + (+nextX - 2) + '"][posY = "' + (+nextY - 1) + '"]'),
            document.querySelector('[posX = "' + (+nextX - 2) + '"][posY = "' + (+nextY + 1) + '"]'),
            document.querySelector('[posX = "' + (+nextX - 1) + '"][posY = "' + (+nextY + 2) + '"]')];
            for (let i = nextVars.length; i >= 0; i--) {
               if (!nextVars[i] || nextVars[i].classList.contains('set')) {
                  nextVars.splice(i, 1);
               }
            }
            nextArr.push(nextVars.length)
         }
         return nextArr;
      }

      nextArr = nextStep();
      let k = nextArr.length;
      let min = nextArr[0];
      var index = 0;
      while (k--) {
         if (nextArr[k] < min) {
            min = nextArr[k];
            index = k;
         }
      }

      step++;
      document.querySelector('.current').classList.remove('current');
      vars[index].classList.add('current');
      vars[index].classList.add('set');
      vars[index].innerHTML = step;
      currentX = vars[index].getAttribute('posX');
      currentY = vars[index].getAttribute('posY');

      if (step == 64) {
         clearInterval(interval);
         setTimeout(() => {
            console.log(step);
            // alert("Успех");
            // document.location.reload(true);
         })
      }
   }
   else {
      clearInterval(interval);
      setTimeout(() => {
         // alert("Неудача!!!");
         // document.location.reload(true);
      })
   }
}

let interval = setInterval(() => {
   nextStep();
}, 300);




