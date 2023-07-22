import {homeBtn, todayBtn, weekBtn} from './dom';
import {openProject, projects,getDailyTasks, show,getWeeklyTasks} from './app';

openProject(projects[0],0);
homeBtn.addEventListener("click", function () {
	show();
	openProject(projects[0],0);
})
todayBtn.addEventListener("click", function () {
	getDailyTasks()
})
weekBtn.addEventListener("click", function () {
  getWeeklyTasks()
})