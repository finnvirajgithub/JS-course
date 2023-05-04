function clickButton(selecter){
  const btnElement = document.querySelector(selecter);

  if (!btnElement.classList.contains('is-toggled')){
    btnElement.classList.add('is-toggled');
  }else {
    btnElement.classList.remove('is-toggled');
  }
}

