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
const input = form.querySelector("input"); 

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const value = input.value;

  document.write(`Form submitted with input: ${value}`);
}

// Task 5 
// Task 5
const form2 = document.getElementById("task5");
const input2 = form2.querySelector("input");
const todoList = document.getElementById("todos");

form2.addEventListener("submit", addTodo); 

function addTodo(e) {
  e.preventDefault();

  const value = input2.value;

  const todo = document.createElement("div");
  todo.classList.add("todo");

  // Set todo text to input value
  todo.innerText = value; 

  todo.addEventListener("click", () => {
    todo.remove();
  });

  // Clear input
  input2.value = '';

  todoList.appendChild(todo);
}
