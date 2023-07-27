import { compareAsc, format, sub, isWithinInterval, parseISO } from 'date-fns';
import {Project, Task, Note} from './constructor'
import {Projectform, Taskform, Noteform, overlay, addProjectBtn, addTaskBtn, addNoteBtn, projectsNode,toggleProjectForm, openForm, closeForm} from './dom'

const projects = JSON.parse(localStorage.getItem("projects")) || [],
home = [],
today = [],
week = [],
notes = [],
nome = document.querySelector(".nome"),
container = document.querySelector(".items");
function defaultProject () {
	if (projects.length === 0) {
		const d = new Project ('Inbox'),
		t = new Task ('Test Task',new Date(),'high','Click \"add task\" button to add another task.');
		d.tasks.push(t);
		projects.push(d);
		localStorage.setItem("projects", JSON.stringify(projects))
	}
	populateProjects();
	openProject(projects[0],0);
}
window.addEventListener('load', defaultProject)

Projectform.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = document.querySelector("#project-name").value,
	project = new Project (name);
	projects.push(project)
	localStorage.setItem("projects", JSON.stringify(projects))
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
	localStorage.setItem("projects", JSON.stringify(projects));
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
	localStorage.setItem("projects", JSON.stringify(projects));
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
		const noteWrapper = document.querySelector('div.notes');
		noteWrapper.appendChild(createNoteNode(element.title, element.text))
	})
	wrapper.appendChild(cnt);
	
}
function populateTasks (project) {
	const wrapper = document.querySelector(".tasks"),
	cnt = document.createElement("div"),
	tasks = project.tasks;
	wrapper.innerHTML = '';
	tasks.forEach( function(element, index) {
		const taskWrapper = document.querySelector('div.tasks');
		taskWrapper.appendChild(createTaskNode(element.title, element.due, element.priority))
	});
	wrapper.appendChild(cnt)
}
function createTaskNode (title,due, priority) {
  const parent = document.createElement('div'),
  checkbox  = document.createElement('div'),
  titleNode = document.createElement('h2'),
  para = document.createElement('p'),
  span = document.createElement('span');

  parent.classList.add('task');
  checkbox.setAttribute('role', 'checkbox')

  titleNode.innerHTML = title;
  para.innerHTML = due;
  span.innerHTML = 'Remove';
  switch (priority) {
    case 'high':
      parent.style.border = '4px solid red';
      break;
    case 'medium':
      parent.style.border = '4px solid green';
      break;
    case 'low':
      parent.style.border = '4px solid gray';
      break;
  }
  parent.appendChild(checkbox);
  parent.appendChild(titleNode);
  parent.appendChild(para);
  parent.appendChild(span);
  return parent;
}
function createNoteNode (title, text) {
  const parent = document.createElement('div'),
  titleNode = document.createElement('h2'),
  para = document.createElement('p'),
  span = document.createElement('span');

  parent.classList.add('note');

  titleNode.innerHTML = title;
  para.innerHTML = text;
  span.innerHTML = 'Remove';
  parent.appendChild(titleNode);
  parent.appendChild(para);
  parent.appendChild(span);
  return parent;
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
	let btnList = document.querySelectorAll("ul.projects>li>button"),
	items = document.querySelector('div.items');
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
	dailyTasks = new Project ('Today');
	projects.forEach( function(project, index) {
		project.tasks.forEach( function(task, index) {
			if (format(today, 'yyyy-MM-dd') === task.due) {
				dailyTasks.tasks.push(task);
			}
		});
	});
	openProject(dailyTasks,0);
	hide()
}
function getWeeklyTasks() {
	const today = new Date(),
	weeklyTasks = new Project ('This week'),
	minDate = sub (new Date(), {days:1}),
	maxDate = sub(minDate, {days:-7});
	projects.forEach( function(project, index) {
		project.tasks.forEach( function(task, index) {
			if (isWithinInterval (parseISO(task.due), {
			start: minDate,
			end: maxDate,})) {
				weeklyTasks.tasks.push(task);
			}
	})});
	openProject(weeklyTasks,0);
	hide()
}
function hide() {
	addTaskBtn.classList.add('hide');
	addNoteBtn.classList.add('hide');
}
function show() {
	addTaskBtn.classList.remove('hide');
	addNoteBtn.classList.remove('hide');
}

function activeFolder () {
	const btns = document.querySelectorAll('li button');
	const home = document.querySelector('button.home');
	const items = document.querySelector('div.items')
	btns.forEach( function(button, index) {
		button.classList.remove('active');
		home.classList.add('active');
		button.addEventListener('click', () => {
			if (button.textContent === items.dataset.project) {
				home.classList.remove('active');
				button.classList.add('active')
			}
		})
	});
}

export  {
	openProject,
	projects,
	getDailyTasks,
	show,
	getWeeklyTasks,
	activeFolder
}; 

