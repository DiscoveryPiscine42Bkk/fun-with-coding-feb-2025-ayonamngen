document.addEventListener("DOMContentLoaded", loadTasks);

document.getElementById("newTask").addEventListener("click", function() {
    let taskText = prompt("Enter a new TO DO:");
    if (taskText) {
        addTask(taskText);
        saveTasks();
    }
});

function addTask(taskText) {
    let task = document.createElement("div");
    task.textContent = taskText;
    task.classList.add("task");
    task.addEventListener("click", function() {
        if (confirm("Do you want to delete this TO DO?")) {
            task.remove();
            saveTasks();
        }
    });

    let list = document.getElementById("ft_list");
    list.insertBefore(task, list.firstChild);
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll(".task").forEach(task => {
        tasks.push(task.textContent);
    });
    document.cookie = "tasks=" + JSON.stringify(tasks) + "; path=/";
}

function loadTasks() {
    let cookies = document.cookie.split("; ");
    let tasksCookie = cookies.find(cookie => cookie.startsWith("tasks="));
    if (tasksCookie) {
        let tasks = JSON.parse(tasksCookie.split("=")[1]);
        tasks.forEach(taskText => addTask(taskText));
    }
}
