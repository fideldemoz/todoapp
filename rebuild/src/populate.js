import {format}  from 'date-fns';
import {projects} from './storage.js';
import {taskNodes, noteNodes, projectNode} from './node.js';
const parent = document.querySelector('.board');
function populateTasks (task) {
    const date = format(new Date(task.due), 'dd.MM.yyyy');
    parent.append(taskNodes(task.title,date, task.level));
}
function populateProjects (project,index) {
  const nav = document.querySelector('.projects ul');
  nav.append(projectNode(project.name,index));
  clickProject()
}
function populateNotes (note) {
  parent.append(noteNodes(note.title, note.text))
}
function populateAll () {
  projects.forEach( function(project, index) {
    populateProjects(project,index)
    project.tasks.forEach( function(task, index) {
      populateTasks(task)
    });
    project.notes.forEach( function(note, index) {
      populateNotes(note)
    });
  });
}
function openProject (project,index) {
  parent.setAttribute("data-project", project.name);
  parent.setAttribute("data-index", index);
  let nome = document.querySelector('.nome');
  nome.textContent = project.name;
  project.tasks.forEach( function(task, index) {
    populateTasks(task)
  });
  project.notes.forEach( function(note, index) {
    populateNotes(note)
  });
}
function clickProject() {
  let btnList = document.querySelectorAll("nav > ul > li > button");
  btnList.forEach((element) => {
    let i = element.dataset.index
    element.addEventListener("click", () => {
      openProject(projects[i], i);
    });
  });
}
console.log('\'populate.js\' fired')
export {
  populateNotes,
  populateProjects,
  populateTasks,
  populateAll
}