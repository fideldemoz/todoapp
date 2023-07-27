import './elements.scss';
import './styles.sass';
import {homeBtn, todayBtn, weekBtn} from './dom';
import {openProject, projects,getDailyTasks, show,getWeeklyTasks, activeFolder} from './app';


homeBtn.addEventListener("click", function () {
	show();
	openProject(projects[0],0);
  activeFolder()
})
todayBtn.addEventListener("click", function () {
	getDailyTasks()
  activeFolder()
})
weekBtn.addEventListener("click", function () {
  getWeeklyTasks()
  activeFolder()
})