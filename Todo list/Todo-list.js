const todoList = [];

renderTodo();

function renderTodo(){
  let todoListHTML ='';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`; //generating html using js
    todoListHTML+=html;
  }
  
  document.querySelector('.js-output').innerHTML = todoListHTML;
}


function addTodo(){
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);

  //reset textbox

  inputElement.value ='';

  renderTodo();
}