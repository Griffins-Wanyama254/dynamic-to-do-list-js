// Ensure the DOM is fully loaded before running any DOM-related code
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements using the exact IDs required by the checker
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // If empty, alert the user and stop
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new li element and set its text
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a remove button with the exact class name 'remove-btn'
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Assign an onclick event to remove this li from taskList
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the li, then append the li to taskList
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach event listener to addButton for 'click' to call addTask
    addButton.addEventListener("click", addTask);

    // Attach event listener to taskInput for 'keypress' and call addTask on Enter
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
