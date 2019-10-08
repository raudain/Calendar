var todaysDate = new Date();
var currentIndex = {
  year: todaysDate.getFullYear(),
  month: todaysDate.getMonth(),
  day: todaysDate.getDate()
}

function getStartingDay() {
  var firstOfTheMonth = new Date(currentIndex.year, currentIndex.month, 1);
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
      day = 26;
      break;
    case  6:
      day = 26;
  }
  return day;
}

function getlastDayOfTheMonth(month) {
  var max;
  switch (month) {
    case 0:
      max = 31;
      break;
    case 1:
      max = 28;
      break;
    case 2:
      max = 31;
      break;
    case 3:
      max = 30;
      break;
    case 4:
      max = 31;
      break;
    case 5:
      max = 30;
      break;
    case  6:
      max = 31;
    case  7:
      max = 31;
    case  8:
        max = 30;
    case  9:
        max = 31;
    case  10:
        max = 30;
    case  11:
        max = 31;
  }
  return max;
}

function setCalendar() {
  var monthBody = document.querySelector("div.month-body");
  var grid = monthBody.parentElement;
  grid.className = grid.className + " num-rows6";

  var gridCellCollection = monthBody.getElementsByClassName("col");
  var i = 0;
  var dayCounter = getStartingDay();
  var gridCellClass;
  var cell;
  var month = currentIndex.month - 1;
  while (i < gridCellCollection.length) {
    cell = gridCellCollection[i];
    gridCellClass = cell.className
    // set off month condition
    if (dayCounter == 1) {
      month = month + 1;
    }
    // Set class for today's date
    if (dayCounter == currentIndex.day) {
      cell.setAttribute("class", gridCellClass + " today");

      var thisWeek = cell.parentElement;
      var weekLine = document.createElement("DIV");
      weekLine.setAttribute("class", "this-week-line");
      thisWeek.appendChild(weekLine);
    }
    // Set off month class
    if (month != currentIndex.month) {
      cell.setAttribute("class", gridCellClass + " off-month");
    }
    // increment day counter
    document.getElementsByClassName("dt")[i].innerHTML = dayCounter;
    if (dayCounter < getlastDayOfTheMonth(month)) {
      dayCounter = dayCounter + 1;
    } else {
      dayCounter = 1;
    }
    i++;
  }
  dayCounter = getStartingDay();
}
setCalendar();
