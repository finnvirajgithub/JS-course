// dom project JS

let cost;

function handleKeydown(event){
  if (event.key === 'Enter'){
    calculateTotal();
  }
}

function calculateTotal(){
  const inputElement = document.querySelector('.js-cost-input');
  cost = Number(inputElement.value);
  const totalCost = document.querySelector('.js-total-cost');

  if (cost > 0) {
    totalCost.classList.remove('error');
    printValue();
  }else { 
    totalCost.classList.add('error');

    totalCost.innerHTML ='Error: cost cannot be less than $0'
  }
 
}

function printValue(){
  if (cost < 40){
    cost+=10;
  }
  
  document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}

function subscribe(){
  const btnElement = document.querySelector('.js-subscribe-btn');

  if (btnElement.innerText === 'Subscribe') {
    btnElement.innerHTML = 'Subscribed';
    btnElement.classList.add('is-subscribed');  // create class
  } else {
    btnElement.innerHTML = 'Subscribe';
    btnElement.classList.remove('is-subscribed');  //remove class
  }
}