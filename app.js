function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value;

    if (task.trim() !== '') {
      const taskList = document.getElementById('taskList');
      const listItem = document.createElement('li');
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function() {
        listItem.classList.toggle('completed');
      });

      const label = document.createElement('label');
      label.textContent = task;

      const removeBtn = document.createElement('button');
      removeBtn.classList.add('remove-btn');
      removeBtn.innerHTML = '&times;';
      removeBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        listItem.remove();
      });

      listItem.appendChild(checkbox);
      listItem.appendChild(label);
      listItem.appendChild(removeBtn);
      taskList.appendChild(listItem);
      
      input.value = '';
    }
  }
  
  function removeCompletedTasks() {
    const taskList = document.getElementById('taskList');
    const completedItems = taskList.querySelectorAll('.completed');

    completedItems.forEach(function (item) {
      item.remove();
    });
  }