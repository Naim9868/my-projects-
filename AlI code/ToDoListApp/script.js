// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => addTaskToDOM(task));
});

// Add a new task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const task = { text: taskText, completed: false };
    addTaskToDOM(task);
    saveTaskToLocalStorage(task);
    taskInput.value = "";
  }
});

// Add task to the DOM
function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.className = `task-item ${task.completed ? "completed" : ""}`;
  li.innerHTML = `
    <span>${task.text}</span>
    <button class="delete-btn"><i class="fas fa-trash"></i></button>
  `;
  
  // Toggle completed status
  li.querySelector("span").addEventListener("click", () => {
    li.classList.toggle("completed");
    updateTaskInLocalStorage(task.text, li.classList.contains("completed"));
  });

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
    removeTaskFromLocalStorage(task.text);
  });

  taskList.appendChild(li);
}

// Save task to localStorage
function saveTaskToLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Update task status in localStorage
function updateTaskInLocalStorage(text, completed) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskIndex = tasks.findIndex(task => task.text === text);
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

// Remove task from localStorage
function removeTaskFromLocalStorage(text) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task.text !== text);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}