function clickButton(selecter){
  const btnElement = document.querySelector(selecter);

  //remove previous button

  turnOfPreviousButton();

  if (!btnElement.classList.contains('is-toggled')){
    btnElement.classList.add('is-toggled');
  }else {
    btnElement.classList.remove('is-toggled');
  }
}

function turnOfPreviousButton(){
  const previousButton = document.querySelector('.is-toggled');


  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}

