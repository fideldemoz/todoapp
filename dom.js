const Projectform = document.querySelector("form.add-project"),
Taskform = document.querySelector("form.add-task-form"),
overlay = document.querySelector(".overlay"),
addProjectBtn = document.querySelector("button.plus");
addTaskBtn = document.querySelector("button.add-task")

addProjectBtn.addEventListener("click", () => {
	Projectform.classList.toggle("show");
})
addTaskBtn.addEventListener("click", () => {
	Taskform.classList.toggle("show")
})