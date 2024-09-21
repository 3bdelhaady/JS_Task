const inputField = document.getElementById("taskInput");
const addButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    const taskText = inputField.value;

    if (taskText.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        taskList.appendChild(listItem);

        inputField.value = "";
    }
});
