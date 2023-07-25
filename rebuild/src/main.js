import './styles.sass';
import './forms.scss';
import './elements.scss';
import {main} from './node.js';
import { newTask, newProject, newNote, newB, showForm, hideForm, toggleMenu} from './forms.js';
import {projects} from './storage.js';
import {populateAll} from './populate.js';

window.addEventListener('load', () => {
  populateAll();
})

newTask.addEventListener('click', () => {
  showForm('task');
  main.addEventListener('click', () => {
    hideForm('task')
  })
});
newNote.addEventListener('click', () => {
  showForm('note');
  main.addEventListener('click', () => {
    hideForm('note')
  })
});
newProject.addEventListener('click', () => {
  showForm('project');
  main.addEventListener('click', () => {
    hideForm('project')
  })
});
newB.addEventListener('click', toggleMenu)