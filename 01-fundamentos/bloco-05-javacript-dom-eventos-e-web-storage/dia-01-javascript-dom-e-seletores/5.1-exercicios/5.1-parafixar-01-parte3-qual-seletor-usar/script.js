let headTitle = document.getElementById('header-container');
headTitle.style.backgroundColor = '#3AAF75';
let urgentTaskTitleBG = document.querySelectorAll('.emergency-tasks h3');
let notUrgentTaskTitleBG = document.querySelectorAll('.no-emergency-tasks h3');
let urgentTaskDivBG = document.querySelectorAll('.emergency-tasks div');
let notUrgentTaskDivBG = document.querySelectorAll('.no-emergency-tasks div');
let footerBG = document.getElementById('footer-container');


for (let notUrgentBG in notUrgentTaskTitleBG) {
  notUrgentTaskTitleBG[notUrgentBG].style.backgroundColor = 'black';
  notUrgentTaskDivBG[notUrgentBG].style.backgroundColor = '#E1E150';
  urgentTaskTitleBG[notUrgentBG].style.backgroundColor = '#CB52CB';
  urgentTaskDivBG[notUrgentBG].style.backgroundColor = '#FFA899'
};

footerBG.style.backgroundColor = '#072206';