// Задача 1


let yourNumber = +prompt('Введите своё число');
for(let index = 1; index <= yourNumber;index++) {
    let input = document.createElement('input');
    input.classList.add('input-item');
    input.value = `Input ${index}`;
    if (index === yourNumber) {
        input.classList.add('margin-zero');
    }
    if(index % 2 != 0) {
        input.classList.add('background-color');
    }
    if (index % 3 === 0) {
        input.value = '';
        input.placeholder = 'Какой-то текст!';
    }
    document.querySelector('form').querySelector('div').before(input);
}



// Задача 2


function clock(){
    let date = new Date(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    let time = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerText = time;
    }
    let timer;
    function clockStart() {
      timer = setInterval(clock, 1000);
      clock();
    }
    function clockStop() {
      clearInterval(timer);
      timerId = null;
    }



    // Задача 3


    let coffeeMachine = { 
        message: 'Your coffee is ready!',
       start: function() {
        setTimeout(() => alert(this.message), 3000);
      }
     }
     coffeeMachine.start();
     let teaPlease = {
         message: 'Wanna some tea instead of coffee?',
     };
     
     let newFunction = coffeeMachine.start.bind(teaPlease);
     
     newFunction();   