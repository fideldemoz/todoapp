const projects = JSON.parse(localStorage.getItem("projects")) || [];

function xxx() {
  if (projects.length > 0) {
    projects.forEach( function(element, index) {
      console.log(element.name)
    });
  }
}

export {projects, xxx};