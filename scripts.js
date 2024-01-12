// Task 1 
const text = document.querySelector(".text");
const container = document.getElementById("task1");

// Task 2
function createElement() {
  const newElement = document.createElement("p");
  newElement.innerText = "New element";
  document.getElementById("task2").appendChild(newElement);  
}

// Task 3 
const list = document.getElementById("task3");
list.querySelectorAll("li").forEach(li => li.remove());

// Task 4
const form = document.getElementById("task4");
form.addEventListener("submit", handleSubmit); 

function handleSubmit(e) {
  e.preventDefault();
  
  document.write("Form submitted!");
}

// Task 5 
const form2 = document.getElementById("task5");
const todoList = document.getElementById("todos");

form2.addEventListener("submit", addTodo);

function addTodo(e) {
  e.preventDefault();
  
  const todo = document.createElement("div");
  todo.classList.add("todo");
  
  todo.innerText = "New Task created";
  
  todo.addEventListener("click", () => {
    todo.remove(); 
  });
  
  todoList.appendChild(todo);
}