function addTask() {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    
    if (newTaskInput.value === "") {
      alert("Please enter a task.");
      return;
    }
  
    const li = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = newTaskInput.value;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
      taskList.removeChild(li);
    };
    
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li);
  
  
    newTaskInput.value = "";
  }
  