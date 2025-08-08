document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Use addEventListener instead of onclick
        removeButton.addEventListener("click", function () {
            taskList.removeChild(li);
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }

    // Click listener
    addButton.addEventListener("click", addTask);

    // Enter key listener — using 'keydown' instead of 'keypress'
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
