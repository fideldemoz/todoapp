import {homeBtn} from './dom';
import {openProject, projects} from './app';

openProject(projects[0],0);
homeBtn.addEventListener("click", function () {
	openProject(projects[0],0)
})