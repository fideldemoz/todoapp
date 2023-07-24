localStorage.setItem("projects", "[]");
localStorage.setItem('projects', JSON.stringify((JSON.parse(localStorage.projects).push([]))))