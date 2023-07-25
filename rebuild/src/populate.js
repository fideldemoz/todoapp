import {format}  from 'date-fns';
import {projects} from './storage.js';
import {taskNodes, noteNodes, projectNode} from './node.js';
const parent = document.querySelector('.board');
function populateTasks (task) {
    const date = format(new Date(task.due), 'dd.MM.yyyy');
    parent.append(taskNodes(task.title,date, task.level));
}
function populateProjects (project) {
  const nav = document.querySelector('.projects ul');
  nav.append(projectNode(project.name));
}
function populateNotes (note) {
  parent.append(noteNodes(note.title, note.text))
}
function populateAll () {
  projects.forEach( function(project, index) {
    populateProjects(project)
    project.tasks.forEach( function(task, index) {
      populateTasks(task)
    });
    project.notes.forEach( function(note, index) {
      populateNotes(note)
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