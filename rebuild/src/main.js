import './styles.sass';
import './forms.scss';
import './elements.scss';
import {buttonNodes, formNodes, taskNodes,noteNodes, projectNode,main} from './node.js';

const newB = document.querySelector('button.new'),
menu = document.querySelector('div.options'),
toggleMenu = () => {
  menu.classList.toggle('show-form')
  newB.textContent === '-' ? newB.textContent = '+' : newB.textContent = '-';
},
showForm = (folder) => {
  switch (folder) {
    case 'project':
      formNodes.project.parent.classList.add('show-form');
      break;
    case 'note':
      formNodes.note.parent.classList.add('show-form');
      break;
    case 'task':
      formNodes.task.parent.classList.add('show-form');
      break;
  }
  newB.classList.add('deep');
  toggleMenu();
  showOverlay()
},
hideForm = (folder) => {
  switch (folder) {
    case 'project':
      formNodes.project.parent.classList.remove('show-form');
      break;
    case 'note':
      formNodes.note.parent.classList.remove('show-form');
      break;
    case 'task':
      formNodes.task.parent.classList.remove('show-form');
      break;
  }
  newB.classList.remove('deep');
  toggleMenu();
  hideOverlay()
},
newProject = document.querySelector('button.menu.project'),
newTask = document.querySelector('button.menu.task'),
newNote = document.querySelector('button.menu.note');
newProject.addEventListener('click', () => {
  showForm('project');
  main.addEventListener('click', () => {
    hideForm('project')
  })
});
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
function showOverlay() {
  main.classList.add('overlay');
}
function hideOverlay() {
  main.classList.remove('overlay');
}
newB.addEventListener('click', toggleMenu)