class Project {
  #name;
  #tasks = [];
  #notes = [];
  #available = true;
  constructor (name) {
    this.#name = name;
  }
  getName () {
    return this.#name;
  }
  getTasks () {
    return this.#tasks;
  }
  getNotes () {
    return this.#notes;
  }
  isAvalailable () {
    return this.#available;
  }
  limit () {
    this.#available = false;
  }
}
class Task {
  #title;
  #due;
  #level;
  #outro;
  #completed = false;
  constructor (title, due, level, outro) {
    this.#title = title;
    this.#due = new Date(due);
    this.#level = level;
    this.#outro = outro;
  }
  getTitle() {
    return this.#title;
  }
  getDueDate() {
    return this.#due;
  }
  getLevel() {
    return this.#level;
  }
  getOutro () {
    return this.#outro;
  }
  setTitle (string) {
    this.#title = string;
  }
  setDue (date) {
    this.#due = date;
  }
  setLevel (string) {
    this.#level = string;
  }
  setOutro (string) {
    this.#outro = string;
  }
  isCompleted () {
    this.completed = true;
  }
  checkCompletion() {
    return this.#completed;
  }
}
class Note {
  #title;
  #text;
  #available = true;
  constructor (title, text) {
    this.#title = title;
    this.#text = text;
  }
  getTitle() {
    return this.#title;
  }
  getText() {
    return this.#text;
  }
  setTitle(string) {
    this.#title = string;
  }
  setText (string) {
    this.#text = string;
  }
  isAvalailable () {
    return this.#available;
  }
  limit () {
    this.#available = false;
  }
}

export {
  Project,
  Task,
  Note,
}