const buttonNodes = {
  "daily": document.querySelector('button.daily'),
  "home": document.querySelector('button.center'),
  "weekly": document.querySelector('button.weekly'),
  "creator": document.querySelector('button.new'),
},
formNodes = {
  "project": {
    "parent":document.querySelector('form.new-project'),
    "name": document.querySelector('#project-name'),
  },
  "task": {
    "parent":document.querySelector('form.new-task'),
    "title": document.querySelector('#task-title').value,
    "due": document.querySelector('#task-due').value,
    "level": document.querySelector('#task-priority').value,
    "outro": document.querySelector('#task-details').value,
  },
  "note": {
    "parent": document.querySelector('form.new-note'),
    "title": document.querySelector('#note-title'),
    "text": document.querySelector('#note-text'),
  },
},
taskNodes = function createTaskNode (title,due, priority) {
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
    case 'Hard':
      parent.style.border = '2px solid red';
      break;
    case 'Medium':
      parent.style.border = '2px solid green';
      break;
    default:
      parent.style.border = '2px solid gray';
      break;
  }
  parent.appendChild(checkbox);
  parent.appendChild(titleNode);
  parent.appendChild(para);
  parent.appendChild(span);
  return parent;
},
noteNodes = function createTaskNode (title, text) {
  const parent = document.createElement('div'),
  titleNode = document.createElement('h2'),
  para = document.createElement('p'),
  span = document.createElement('span');

  parent.classList.add('node');

  titleNode.innerHTML = title;
  para.innerHTML = text;
  span.innerHTML = 'Remove';
  parent.appendChild(titleNode);
  parent.appendChild(para);
  parent.appendChild(span);
  return parent;
},
projectNode = function (Text) {
  const li = document.createElement('li'),
  button = document.createElement('button');
  button.textContent = Text;
  li.appendChild(button);
  return li;
},
main = document.querySelector('.worker');
export {
  buttonNodes,
  formNodes,
  taskNodes,
  noteNodes,
  projectNode,
  main
};