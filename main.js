let tasks = document.querySelector(".tasks");
let input = document.querySelector(".input-box");
let addTask = document.querySelector(".add-task");

addTask.onclick = function newTask() {
  if (input.value.trim() === "") {
    alert("This Field Can't Be Empty");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let i = document.createElement("i");
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let dateNow = `${year}-${month}-${day} ${hour}:${minutes}`;
    li.innerHTML = `${input.value}`;
    span.innerHTML = `${dateNow}`;
    span.className = "time";
    li.appendChild(span);
    li.appendChild(i);
    tasks.appendChild(li);
  }
  input.value = "";
  addToStorage();
};

tasks.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    addToStorage();
  } else if (e.target.tagName === "I") {
    e.target.parentElement.remove();
    addToStorage();
  }
});

function addToStorage() {
  localStorage.setItem("tasks", tasks.innerHTML);
}

function showTasks() {
  tasks.innerHTML = localStorage.getItem("tasks");
}

showTasks();
