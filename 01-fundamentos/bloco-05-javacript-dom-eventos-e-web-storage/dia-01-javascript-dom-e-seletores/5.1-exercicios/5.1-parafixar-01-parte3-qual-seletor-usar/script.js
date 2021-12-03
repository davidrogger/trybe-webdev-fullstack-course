let headTitle = document.getElementById('header-container');
headTitle.style.backgroundColor = '#3AAF75';
let urgentTaskTitleBG = document.querySelectorAll('.emergency-tasks h3');
let notUrgentTaskTitleBG = document.querySelectorAll('.no-emergency-tasks h3');
let urgentTaskDivBG = document.querySelectorAll('.emergency-tasks div');
let notUrgentTaskDivBG = document.querySelectorAll('.no-emergency-tasks div');
let footerBG = document.getElementById('footer-container');

function backColor (arrayTitle, color) {
  for (let index =0; index < arrayTitle.length; index += 1) {
    arrayTitle[index].style.background = color;
  };
} 

backColor(notUrgentTaskTitleBG, 'black');
backColor(urgentTaskTitleBG, '#B04DB5');
backColor(urgentTaskDivBG, 'salmon');
backColor(notUrgentTaskDivBG, '#DEE378');

footerBG.style.backgroundColor = '#072206';