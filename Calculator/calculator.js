let calculation = '';
let pgelement = document.querySelector('.view');

function calculate (passvalue){
  calculation+=passvalue;
  pgelement.innerHTML = calculation;
}

function outputAnswer(){
  calculation = eval(calculation);
  pgelement.innerHTML = calculation;
}

function clearDisplay(){
  calculation = "";
  pgelement.innerHTML = "";
}
