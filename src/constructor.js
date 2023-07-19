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
	constructor (title, due, priority, details) {
		this.title = title;
		this.due = new Date(due);
		this.priority = priority;
		this.details = details;
	}
	edit(title, due, priority, details) {
		this.title = title;
		this.due = new Date(due);
		this.priority = priority;
		this.details = details;
	}
}
class Note {
	constructor (title,text) {
		this.title = title;
		this.text = text;
	}
	edit (title,text) {
		this.title = title;
		this.text = text;
	}
}

export {
	Project,
	Task,
	Note,
}