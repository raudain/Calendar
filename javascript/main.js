var todaysDate = new Date();
var startingDay;
var currentMonthIndex = todaysDate.getMonth();
var monthIndex = currentMonthIndex;

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
  var offMonth = true;
  var maximumDay = getlastDayOfTheMonth(currentMonthIndex - 1);
  while (i < gridCellCollection.length) {
    cell = gridCellCollection[i];
    gridCellClass = cell.className
    if (dayCounter == 1) {
      offMonth = false;
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
    if (offMonth) {
      cell.setAttribute("class", gridCellClass + " off-month");
    }
    // increment day counter
    if (true) {

    }
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
