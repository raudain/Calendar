function getMaximumDay() {
  return 30;
}

var getMonth = document.getElementById("sc2118");
var monthText = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var todaysDate = new Date();
var month = todaysDate.getMonth();
getMonth.innerHTML = "<strong>" + monthText[month] + "</strong> 2019";

var firstDate = new Date(2019, 3, 1);
var firstDayOfMonth = firstDate.getDay();
var firstDay;
if (firstDayOfMonth = 1) {
  firstDay = 31;
}

var getGridCell = document.querySelectorAll("[role]");
var i = 0;
var day = firstDay;
var maximumDay = getMaximumDay();
var gridCellClass;
while (i < getGridCell.length) {
  if (day == todaysDate.getDate()) {
    gridCellClass = getGridCell[i].className
    getGridCell[i].setAttribute("class", gridCellClass + " today");
  }
  getGridCell[i].setAttribute("d", day);
  i = i + 1
  if (day < maximumDay) {
    day = day + 1;
  } else {
    day = 1;
  }
}

var getDay = document.getElementsByClassName("dt");
i = 0;
day = firstDay;
while (i < getDay.length) {
  getDay[i].innerHTML = day;
  i = i + 1;
  if (day < maximumDay) {
    day = day + 1;
  } else {
    day = 1;
  }
}

function goToPreviousMonth() {
  monthIndex = monthIndex - 1;
  if (monthIndex < 0) {
    monthIndex = 11;
  }
  getMonth.innerHTML = "<strong>" + monthText[monthIndex] + "</strong> 2019";
}

function goToNextMonth() {
  month = month + 1;
  if (monthIndex > 11) {
    monthIndex = 0;
  }
  getMonth.innerHTML = "<strong>" + monthText[monthIndex] + "</strong> 2019";
}
