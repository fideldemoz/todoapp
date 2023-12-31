import './styles.css';
import './add_icon.svg';
const Projectform = document.querySelector("form.add-project"),
Taskform = document.querySelector("form.add-task-form"),
Noteform = document.querySelector("form.add-note-form"),
overlay = document.querySelector(".o"),
addProjectBtn = document.querySelector("button.plus"),
addTaskBtn = document.querySelector("button.add-task"),
addNoteBtn = document.querySelector("button.add-note"),
projectsNode = document.querySelector("ul.projects"),
homeBtn = document.querySelector("button.home"),
todayBtn = document.querySelector("button.today"),
weekBtn = document.querySelector("button.week"),
myDate = document.querySelector("#due"),
today = new Date();
myDate.value = today.toISOString().substr(0, 10);

function toggleProjectForm () {
	 Projectform.classList.toggle("show");
}
function openForm (node) {
	overlay.classList.toggle('overlay');
	node.classList.toggle("show")
}
function closeForm () {
	Taskform.classList.remove("show");
	Noteform.classList.remove("show");
	overlay.classList.remove('overlay')
}

export {
	Projectform,
	Taskform,
	Noteform,
	overlay,
	addProjectBtn,
	addTaskBtn,
	addNoteBtn,
	projectsNode,
	toggleProjectForm,
	openForm,
	closeForm,
	homeBtn,
	myDate,
	today,
	todayBtn,
	weekBtn,
}