const todoList = [];

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);

  //reset textbox

  inputElement.value ='';
}