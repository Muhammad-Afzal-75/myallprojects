const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();

    if (taskText === "") return; 

    const taskItem = document.createElement("div");
    taskItem.classList.add("flex", "justify-between", "items-center", "bg-gray-100", "p-3", "rounded-lg", "shadow");

    taskItem.innerHTML = `
    <span class="text-gray-800">${taskText}</span>
    <button class="delete-btn bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition transform hover:scale-105">Delete</button>
  `;

    taskList.appendChild(taskItem);

    taskInput.value = "";

    const deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });
});