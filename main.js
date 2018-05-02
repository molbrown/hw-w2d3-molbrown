var seven = calculator.querySelector('#seven');
seven.addEventListener('click', function(){
  document.querySelector('#display').value += '7';
})

var eight = calculator.querySelector('#eight');
eight.addEventListener('click', function(){
  document.querySelector('#display').value += '8';
})

var nine = calculator.querySelector('#nine');
nine.addEventListener('click', function(){
  document.querySelector('#display').value += '9';
})

var divide = calculator.querySelector('#divide');
divide.addEventListener('click', function(){
  document.querySelector('#display').value += '/';
})

var four = calculator.querySelector('#four');
four.addEventListener('click', function(){
  document.querySelector('#display').value += '4';
})

var five = calculator.querySelector('#five');
five.addEventListener('click', function(){
  document.querySelector('#display').value += '5';
})

var six = calculator.querySelector('#six');
six.addEventListener('click', function(){
  document.querySelector('#display').value += '6';
})

var times = calculator.querySelector('#times');
times.addEventListener('click', function(){
  document.querySelector('#display').value += '*';
})

var one = calculator.querySelector('#one');
one.addEventListener('click', function(){
  document.querySelector('#display').value += '1';
})

var two = calculator.querySelector('#two');
two.addEventListener('click', function(){
  document.querySelector('#display').value += '2';
})

var three = calculator.querySelector('#three');
three.addEventListener('click', function(){
  document.querySelector('#display').value += '3';
})

var minus = calculator.querySelector('#minus');
minus.addEventListener('click', function(){
  document.querySelector('#display').value += '-';
})

var zero = calculator.querySelector('#zero');
zero.addEventListener('click', function(){
  document.querySelector('#display').value += '0';
})

var decimal = calculator.querySelector('#decimal');
decimal.addEventListener('click', function(){
  document.querySelector('#display').value += '.';
})

var plus = calculator.querySelector('#plus');
plus.addEventListener('click', function(){
  document.querySelector('#display').value += '+';
})

var clear = calculator.querySelector('#clear');
clear.addEventListener('click', function(){
  document.querySelector('#display').value = '';
})

var equals = calculator.querySelector('#equals');
equals.addEventListener('click', function(){
  var math = eval(document.querySelector('#display').value);
    if (math !== undefined) {
        document.querySelector('#display').value = math;
    }
  }
)