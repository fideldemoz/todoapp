import { compareAsc, format } from 'date-fns';
import {Project, Task, Note} from './constructor'
import {Projectform, Taskform, Noteform, overlay, addProjectBtn, addTaskBtn, addNoteBtn, projectsNode,toggleProjectForm, openForm, closeForm} from './dom'
const store = [],
projects = [],
home = [],
today = [],
week = [],
notes = [],
nome = document.querySelector(".nome"),
container = document.querySelector(".items");
const d = new Project ('Default'),
t = new Task ('Test Task',new Date(),'high','Click \"add task\" button to add another task.');
d.tasks.push(t);
projects.push(d);
populateProjects();

Projectform.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = document.querySelector("#project-name").value,
	project = new Project (name);
	projects.push(project)
	toggleProjectForm()
	populateProjects()
	e.target.reset()
})
Taskform.addEventListener("submit", (e) => {
	e.preventDefault();
	const title = document.querySelector("#title").value,
	due = document.querySelector("#due").value,
	priority = document.querySelector("#priority").value,
	details = document.querySelector("#details").value,
	task = new Task (title,due,priority,details);
	const currentFolder = document.querySelector('.items'),
	index = currentFolder.dataset.index;
	projects[index].tasks.push(task);
	populateTasks(projects[index]);
	closeForm();
	e.target.reset()
})
Noteform.addEventListener("submit", (e) => {
	e.preventDefault();
	const title = document.querySelector("#nt-title").value,
	text = document.querySelector("#nt-text").value,
	note = new Note (title, text),
	currentFolder = document.querySelector('.items'),
	index = currentFolder.dataset.index;
	projects[index].notes.push(note);
	closeForm()
	populateNotes(projects[index])
	e.target.reset()
})
function populateNotes (project) {
	const wrapper = document.querySelector(".notes"),
	cnt = document.createElement("div"),
	notes = project.notes;
	wrapper.innerHTML = '';
	notes.forEach( function(element, index) {
		const h1 = document.createElement('h1'),
		text = document.createElement('p');
		h1.textContent = element.title;
		text.textContent = element.text;
		cnt.appendChild(h1);
		cnt.appendChild(text);
	})
	wrapper.appendChild(cnt);
	
}
function populateTasks (project) {
	const wrapper = document.querySelector(".tasks"),
	cnt = document.createElement("div"),
	tasks = project.tasks;
	wrapper.innerHTML = '';
	tasks.forEach( function(element, index) {
		const p1 = document.createElement("p"),
		p2 = document.createElement("p"),
		p3 = document.createElement("p"),
		p4 = document.createElement("p"),
		hr = document.createElement("hr");
		p1.textContent = `Nome da tarefa: ${element.title}`;
		p2.textContent = `Due:  ${format(element.due, 'iii LLL dd, yyyy')}`;
		p3.textContent = `Priority:  ${element.priority}`;
		p4.textContent = `Details: ${element.details}`;
		cnt.appendChild(p1);
		cnt.appendChild(p2);
		cnt.appendChild(p3);
		cnt.appendChild(p4);
		cnt.appendChild(hr);
	});
	wrapper.appendChild(cnt)
}
function populateProjects () {
	projectsNode.innerHTML = '';
	const list = document.createDocumentFragment();
	projects.forEach( function(element, index) {
		if (index>0) {
		const btn = document.createElement("button"),
		li = document.createElement("li");
		li.setAttribute('data-index', index)
		btn.innerHTML = element.name;
		li.appendChild(btn);
		list.appendChild(li);
		}
	});
	projectsNode.appendChild(list);
	clickProject()
}
function clickProject () {
	let btnList = document.querySelectorAll("ul.projects>li>button");
	btnList.forEach((element,i) => {
		i++
			element.addEventListener("click", () => {
				show()
				openProject(projects[i],i)
			});
	})
}
function openProject (project,index) {
	container.setAttribute("data-project", project.name);
	container.setAttribute("data-index", index);
	nome.textContent = project.name;
	populateTasks(project);
	populateNotes(project);
}
addProjectBtn.addEventListener("click",toggleProjectForm)
addTaskBtn.addEventListener("click", () => {
	openForm(Taskform);
});
addNoteBtn.addEventListener("click", () => {
	openForm(Noteform)
})
overlay.addEventListener("click", closeForm)

function getDailyTasks() {
	const today = new Date(),
	dailyTasks = new Project ('daily');
	projects.forEach( function(project, index) {
		project.tasks.forEach( function(task, index) {
			if (format(today, 'MM-dd-yyyy') === format(task.due, 'MM-dd-yyyy')) {
				dailyTasks.tasks.push(task);
			}
		});
	});
	openProject(dailyTasks,0);
	hide()
}
function getWeeklyTasks() {
	const today = new Date(),
	lastDay = today+5;
	console.log(lastDay)
}
getWeeklyTasks()
function hide() {
	addTaskBtn.classList.add('hide');
	addNoteBtn.classList.add('hide');
}
function show() {
	addTaskBtn.classList.remove('hide');
	addNoteBtn.classList.remove('hide');
}

export  {
	openProject,
	projects,
	getDailyTasks,
	show,
}; 

