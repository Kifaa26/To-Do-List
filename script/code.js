let tasks = [];

  function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
      let task = {
        id: generateId(),
        name: taskInput.value,
        completed: false
      };

      tasks.push(task);
      renderTask(task);

      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }

  function renderTask(task) {
    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = task.name;
    if (task.completed) {
      li.classList.add("completed");
    }
    li.style.backgroundColor = getRandomColor();
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
      deleteTask(task.id);
      taskList.removeChild(li);
    };
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "✔️";
    doneBtn.className = "done-btn";
    doneBtn.onclick = function() {
      markAsDone(task.id);
      li.classList.add("completed");
    };
    li.appendChild(deleteBtn);
    li.appendChild(doneBtn);
    taskList.appendChild(li);
  }

  function deleteTask(id) {
    tasks = tasks.filter(function(task) {
      return task.id !== id;
    });
  }

  function markAsDone(id) {
    let task = tasks.find(function(task) {
      return task.id === id;
    });
    if (task) {
      task.completed = true;
    }
  }

  function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }