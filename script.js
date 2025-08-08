// Get references to the elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create the list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create the remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';

    // Remove button click event
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Append button to li, then li to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Event listeners
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
