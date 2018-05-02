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
