const todoList = [{
  name:'make dinner',
  dueDate: '2022-12-22'
},{
  name:'make dinner',
  dueDate: '2022-12-22'
}];

renderTodo();

function renderTodo(){
  let todoListHTML ='';

  for (let i = 0; i < todoList.length; i++) {
    const todoObj = todoList[i];
    //const name = todoObj.name;
    //const dueDate = todoObj.dueDate;

    //shortcut

    const { name } = todoObj;
    const { dueDate } = todoObj;

    //delete button

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick = "
      todoList.splice(${i},1);
      renderTodo();      
    " class ="btn-dlt">Delete</button>
    </div>`; //generating html using js
    todoListHTML+=html;
  }
  
  document.querySelector('.js-output').innerHTML = todoListHTML;
}


function addTodo(){
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  const dateElement = document.querySelector('.js-date-input');

  const dueDate = dateElement.value;
  
  todoList.push({
    name: name,
    dueDate: dueDate
  });

  //reset textbox

  inputElement.value ='';

  renderTodo();
}