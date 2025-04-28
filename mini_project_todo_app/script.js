

const form = document.querySelector("form");
const todoText = document.querySelector("#todoinputtxt");
const addTodoButtom = document.getElementById("addTodoBtn");
const message = document.getElementById("message");
const uList = document.getElementById("todoList");


// console.log(todoText,addTodoButtom,message,uList);

function showMessage(status){
    message.innerHTML = status;
    setTimeout(()=>{
        message.innerHTML = "";
    },1000);
}

//delete todo...
const deleteTodo = (e)=>{
    const selecForDelete = e.target.parentElement.parentElement;
    uList.removeChild(selecForDelete);
    showMessage("todo deleted");

    //delete localStorage value clicking delete button..
    let todos = getTodoFromLocalStorage();
    todos = todos.filter((todo)=> todo.todoId != selecForDelete.id);
    localStorage.setItem("TODO",JSON.stringify(todos));
}

 //create todo..
const createTodo = (Id,Value)=>{
    
     const todoItem = document.createElement("li");
     todoItem.id = Id;
     todoItem.innerHTML = `
                 <span>${Value}</span>
                 <span id="deleteBtn" class="trash"><i class="fa-solid fa-trash"></i></span>
     `;
     uList.appendChild(todoItem);
   
     showMessage("todo added");
     //selecting delete button..
    const  trash = todoItem.querySelector("#deleteBtn");
     trash.addEventListener("click",deleteTodo);  
}


//for add todo...
const addtodo = (e) =>{
   try{
    e.preventDefault();
    //text that will be todo..
    let todoValue = e.target.children[1].value;
    
    if(todoValue == ""){
        throw new Error("Write some text please!");
    }
    //random id for each value..
    const todoId = Date.now().toString();
    

    createTodo(todoId,todoValue);
   
    //storing value inside localStorage....
    const todos = getTodoFromLocalStorage();
    todos.push({todoId,todoValue});
    localStorage.setItem("TODO",JSON.stringify(todos));

   todoText.value = "";
   }catch(err){
     showMessage(err.message);
   }
}

//get todo from local storage..
function getTodoFromLocalStorage(){
    return todos = localStorage.getItem("TODO")? JSON.parse(localStorage.getItem("TODO")): [];
}

function applyTodo(){
    const todos = getTodoFromLocalStorage();
    todos.map((todo)=> createTodo(todo.todoId, todo.todoValue));
}

form.addEventListener("submit", addtodo);
window.addEventListener("DOMContentLoaded", applyTodo);