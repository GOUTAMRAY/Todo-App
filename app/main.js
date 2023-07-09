

const createTodoButton = document.querySelector(".todo .add-new-todo button");
const createTodoInput = document.querySelector(".todo .add-new-todo input");
const todoList = document.querySelector(".todo ul");



 const showTodos = () =>{
     
  let content = "";

 todos.map((item , index) => {
  content += `
    <li>
      <p><i class="fa fa-check"></i>${item}</p>
      <button onclick ="deletetodo('${item}')"><i class="fa fa-trash"></i></button>
    </li>
  
  `;
 });

 todoList.innerHTML = content;
 
 };


showTodos();


// create todo

createTodoButton.onclick = () => {
      const todo = createTodoInput.value;

// todo validation

      if(todo){
        todos.push(todo);
        createTodoInput.value = "";
      }else{
        alert("todo must be empty")
      }
     
      showTodos();
   
};

// delete todo data 

const deletetodo = (item) => {
  const updatetodos = todos.filter((data) => data != item);

  todos = updatetodos;

  showTodos();
 
};




