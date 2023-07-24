import {formNodes} from './node.js'
import {hideForm, toggleMenu} from './forms.js'
import {Project, Task, Note} from './constructor.js'
import {projects, xxx} from './storage.js'

(function Addproject (argument) {
  const project = formNodes.project,
  projectForm = project.parent,
  name = project.name;

  const task = formNodes.task,
  taskForm = task.parent,
  title = task.title,
  due = task.due,
  level = task.due,
  outro = task.outro;

  const note = formNodes.note,
  noteForm = note.parent,
  noteTitle = note.title,
  noteText = note.title;

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const createdProject = new Project(name.value);
    projects.push(createdProject)
    localStorage.setItem('projects', JSON.stringify(projects))
    e.target.reset();
    hideForm('project')
    toggleMenu()
    xxx()
  })
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const createdTask = new Task (title.value, due.value, level.value, outro.value);
    console.log(createdTask);
    e.target.reset()
    hideForm('task')
    toggleMenu()
    })
  noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const createdNote = new Note (noteTitle.value, noteText.value);
    console.log(createdNote);
    e.target.reset()
    hideForm('note')
    toggleMenu()
  })
})()