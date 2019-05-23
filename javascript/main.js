var todaysDate = new Date();
var startingDay;
var currentMonthIndex = todaysDate.getMonth();

function getStartingDay() {
  var firstOfTheMonth = new Date(2018, currentMonthIndex, 1);
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

function getlastDayOfTheMonth(month) {
  var max;
  switch (month) {
    case 0:
      max = "Sunday";
      break;
    case 1:
      max = "Monday";
      break;
    case 2:
      max = 28;
      break;
    case 3:
      max = 30;
      break;
    case 4:
      max = 31;
      break;
    case 5:
      max = "Friday";
      break;
    case  6:
      max = "Saturday";
  }
  return max;
}

function setCalendar() {
  var monthBodyCollection = document.getElementsByClassName("month-body");
  var gridCellCollection = monthBodyCollection[0].getElementsByClassName("col");
  var dayCollection = document.getElementsByClassName("dt");
  var i = 0;
  var dayCounter = startingDay;
  var gridCellClass;
  var cell;
  var lastMonth = currentMonthIndex - 1;
  var month = lastMonth;
  var maximumDay = getlastDayOfTheMonth(lastMonth);
  while (i < gridCellCollection.length) {
    cell = gridCellCollection[i];
    gridCellClass = cell.className
    // set off month condition
    if (dayCounter == 1) {
      month = month + 1;
      maximumDay = getlastDayOfTheMonth(currentMonthIndex);
    }
    // Set class for today's date
    if (dayCounter == todaysDate.getDate()) {
      cell.setAttribute("class", gridCellClass + " today");

      var thisWeek = cell.parentElement;
      var weekLine = document.createElement("DIV");
      weekLine.setAttribute("class", "this-week-line");
      thisWeek.appendChild(weekLine);
    }
    // Set off month class
    if (month != currentMonthIndex) {
      cell.setAttribute("class", gridCellClass + " off-month");
    }
    // increment day counter
    dayCollection[i].innerHTML = dayCounter;
    if (dayCounter < maximumDay) {
      dayCounter = dayCounter + 1;
    } else {
      dayCounter = 1;
    }
    i = i + 1;
  }
  dayCounter = startingDay;
}
setCalendar();
