import {formNodes} from './node.js'
import {hideForm, toggleMenu} from './forms.js'
import {Project, Task, Note} from './constructor.js'
import {projects} from './storage.js'
import {populateNotes, populateProjects, populateTasks} from './populate.js';

(function Addproject (argument) {
  const project = formNodes.project,
  projectForm = project.parent,
  name = project.name;

  const task = formNodes.task,
  taskForm = task.parent,
  title = task.title,
  due = task.due,
  level = task.level,
  outro = task.outro;

  const note = formNodes.note,
  noteForm = note.parent,
  noteTitle = note.title,
  noteText = note.text;

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const createdProject = new Project(name.value);
    projects.push(createdProject)
    localStorage.setItem('projects', JSON.stringify(projects))
    e.target.reset();
    hideForm('project')
    toggleMenu()
    populateProjects(createdProject)
  })
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const createdTask = new Task (title.value, due.value, level.value, outro.value);
    const board = document.querySelector('.board'),
    index = board.dataset.index || 0;
    projects[index].tasks.push(createdTask)
    localStorage.setItem('projects', JSON.stringify(projects))
    e.target.reset()
    hideForm('task')
    toggleMenu()
    populateTasks(createdTask)
    })
  noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const createdNote = new Note (noteTitle.value, noteText.value);
    const board = document.querySelector('.board'),
    index = board.dataset.index || 0;
    projects[index].notes.push(createdNote)
    localStorage.setItem('projects', JSON.stringify(projects))
    e.target.reset()
    hideForm('note')
    toggleMenu()
    populateNotes(createdNote)
  })
})()