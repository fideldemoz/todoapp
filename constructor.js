class Project {
	tasks = [];
	notes = [];
	constructor (name) {
		this.name = name;
	}
	addTask (task) {
		this.tasks.push(task);
	}
	removeTask (task) {
		this.tasks = this.tasks.filter((toremove) => {
			toremove !== task;
		})
	}
	addNote (note) {
		this.notes.push(note);
	}
	removeNote (note) {
		this.notes = this.notes.filter((toremove) => {
			toremove !== note;
		})
	}
}
class Task {
	constructor (title, due, priority, ...checklist) {
		this.title = title;
		this.due = new Date(due);
		this.priority = priority;
		this.checklist = checklist;
	}
	edit(title, due, priority, ...checklist) {
		this.title = title;
		this.due = new Date(due);
		this.priority = priority;
		this.checklist = checklist;
	}
}
class Note {
	constructor (title,text) {
		this.title = title;
		this.text = text;
	}
	edit (text,title) {
		this.title = title;
		this.text = text;
	}
}