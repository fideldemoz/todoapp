const Projectform = document.querySelector("form.add-project"),
Taskform = document.querySelector("form.add-task-form"),
overlay = document.querySelector(".o"),
addProjectBtn = document.querySelector("button.plus");
addTaskBtn = document.querySelector("button.add-task")

addProjectBtn.addEventListener("click", () => {
	Projectform.classList.toggle("show");
})
addTaskBtn.addEventListener("click", (e) => {
	overlay.classList.toggle('overlay');
	Taskform.classList.toggle("show")
})
overlay.addEventListener("click", (e) => {
	Taskform.classList.remove("show");
	overlay.classList.remove('overlay')
})
