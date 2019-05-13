var todaysDate = new Date();

function setMonth(date) {
  var getMonth = document.getElementById("sc2117");
  var monthText = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  date = new Date();
  var month = date.getMonth();
  getMonth.innerHTML = "<strong>" + monthText[month] + "</strong> 2019";

  var getHeader = document.getElementsByClassName("display-header");
  var monthWidth = ["236.802px", "246.646px", "219.323px", "203.188px", "197.865px", "205.063px", "197.677px", "227.427px", "267.438px", "238.604px", "259.833px", "260.198px"];
  getHeader[0].style.width = monthWidth[3];
}

setMonth(todaysDate);

function setWeek() {
  var getThisWeek = document.getElementsByClassName("row5");
  var thisWeekLine = document.createElement("DIV");
  thisWeekLine.className = "this-week-line";
  getThisWeek[0].appendChild(thisWeekLine);
}

setWeek();

var firstDate = new Date(2019, 3, 1);
var firstDayOfMonth = firstDate.getDay();
var firstDay;
if (firstDayOfMonth = 1) {
  firstDay = 31;
}

function getMaximumDay() {
  return 30;
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
  month = month - 1;
  if (month < 0) {
    month = 11;
  }
  getMonth.innerHTML = "<strong>" + monthText[month] + "</strong> 2019";
}

function goToNextMonth() {
  month = month + 1;
  if (month > 11) {
    month = 0;
  }
  getMonth.innerHTML = "<strong>" + monthText[month] + "</strong> 2019";
}

var getEventTitle = document.getElementsByTagName("input");
getEventTitle[0].defaultValue = "New Event";

function toggleCheckMark(element) {
  var classes = element.className;
  var unChecked = "atv4 calendar sc-view sc-button-view sc-checkbox-view sc-checkbox-control checkbox sc-regular-size";
  var checked = "atv4 calendar sc-view sc-button-view sc-checkbox-view sc-checkbox-control checkbox sc-regular-size sel";
  if (classes === unChecked) {
    element.className = checked;
  } else {
    element.className = unChecked;
  }
}

var getCheckBox = document.getElementsByTagName("span");
var parent = getCheckBox[0].parentElement;
getCheckBox[0].addEventListener("click", function() {
  toggleCheckMark(parent);
});

function cancelEvent() {
  var eventForm = document.getElementById("sc3841");
  eventForm.parentNode.removeChild(eventForm);
}

document.getElementById("sc4852-label").addEventListener("click", cancelEvent);

cancelEvent();
