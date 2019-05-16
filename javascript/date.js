var todaysDate = new Date();
var thisMonth = todaysDate.getMonth();
var startingDay;
var maximumDay;

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

function getStartingDay() {
  var firstOfTheMonth = new Date(2018, thisMonth, 1);
  var dayOfTheWeek = firstOfTheMonth.getDay();
  var day;
  switch (dayOfTheWeek) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = 28;
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case  6:
      day = "Saturday";
  }
  return day;
}
startingDay = getStartingDay();

function getMaximumDay() {
  return 30;
}
maximumDay = getMaximumDay();

function setGridCellAtribute() {
  var monthBodyCollection = document.getElementsByClassName("month-body");
  var gridCellCollection = monthBodyCollection[0].getElementsByClassName("col");
  var i = 0;
  var dayCounter = startingDay;
  var gridCellClass;
  var cell;
  var offMonth = true;
  while (i < gridCellCollection.length) {
    cell = gridCellCollection[i];
    gridCellClass = cell.className
    // Set class for today's date
    if (dayCounter == todaysDate.getDate()) {
      cell.setAttribute("class", gridCellClass + " today");
      offMonth = false;
    }
    // Set off month class
    if (offMonth) {
      cell.setAttribute("class", gridCellClass + " off-month");
    }
    // increment day counter
    if (dayCounter < maximumDay) {
      dayCounter = dayCounter + 1;
    } else {
      dayCounter = 1;
    }
    i = i + 1;
  }
}
setGridCellAtribute();

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
