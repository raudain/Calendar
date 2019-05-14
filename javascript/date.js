var todaysDate = new Date();
var thisMonth = todaysDate.getMonth();
var startingDay;

function setMonth(date) {
  var getMonth = document.getElementById("sc2117");
  var monthText = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  getMonth.innerHTML = "<strong>" + monthText[thisMonth] + "</strong> 2019";

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

function setStartingDay() {
  var firstOfTheMonth = new Date(2018, thisMonth, 1);
  var dayOfTheWeek = firstOfTheMonth.getDay();
  switch (dayOfTheWeek) {
    case 0:
      startingDay = "Sunday";
      break;
    case 1:
      startingDay = "Monday";
      break;
    case 2:
      startingDay = 28;
      break;
    case 3:
      startingDay = "Wednesday";
      break;
    case 4:
      startingDay = "Thursday";
      break;
    case 5:
      startingDay = "Friday";
      break;
    case  6:
      startingDay = "Saturday";
  }
}
setStartingDay();

var maximumDay;
function setMaximumDay() {
  maximumDay = 31;
}
setMaximumDay();

function setGridCellAtribute() {
  var getGridCell = document.querySelectorAll("[role]");
  var i = 0;
  var dayCounter = startingDay;
  var gridCellClass;
  var cell;
  while (i < getGridCell.length) {
    cell = getGridCell[i];
    // Set off month class
    if (true) {

    }
    // Set class for today's date
    if (dayCounter == todaysDate.getDate()) {
      gridCellClass = cell.className
      cell.setAttribute("class", gridCellClass + " today");
    }
    // set day number
    cell.setAttribute("d", dayCounter);
    if (dayCounter < maximumDay) {
      dayCounter = dayCounter + 1;
    } else {
      dayCounter = 1;
    }
    i = i + 1;
  }
}

var getDay = document.getElementsByClassName("dt");
i = 0;
var day = startingDay;
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
