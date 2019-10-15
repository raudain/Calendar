var todaysDate = new Date();
var currentIndex = {
	year : todaysDate.getFullYear(),
	month : todaysDate.getMonth(),
	day : todaysDate.getDate()
}

function getlastDayOfTheMonth(month) {
	var maximumDay;
	switch (month) {
	// January
	case 0:
		maximumDay = 31;
		break;
	// February
	case 1:
		maximumDay = 28;
		break;
	// March
	case 2:
		maximumDay = 31;
		break;
	// April
	case 3:
		maximumDay = 30;
		break;
	// May
	case 4:
		maximumDay = 31;
		break;
	// June
	case 5:
		maximumDay = 30;
		break;
	// July
	case 6:
		maximumDay = 31;
		break;
	// August
	case 7:
		maximumDay = 31;
		break;
	// September
	case 8:
		maximumDay = 30;
		break;
	// October
	case 9:
		maximumDay = 31;
		break;
	// November
	case 10:
		maximumDay = 30;
		break;
	// December
	case 11:
		maximumDay = 31;
		break;
	}
	return maximumDay;
}

function getFirstSundayDay() {
	var previousMonth = currentIndex.month - 1;
	var dayBeforeFirstOfTheMonth = getlastDayOfTheMonth(previousMonth);
	var dateBeforeFirstOfTheMonth = new Date(currentIndex.year, previousMonth, dayBeforeFirstOfTheMonth);
	var dayOfTheWeek = dateBeforeFirstOfTheMonth.getDay();
	var day;
	switch (dayOfTheWeek) {
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = 29;
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
	case 6:
		day = 26;
	}
	return day;
}



function setCalendar() {
	var monthBody = document.querySelector("div.month-body");
	var grid = monthBody.parentElement;
	grid.className = grid.className + " num-rows6";

	var gridCellCollection = monthBody.getElementsByClassName("col");
	var i = 0;
	var dayCounter = getFirstSundayDay();
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
	dayCounter = getFirstSundayDay();
}
setCalendar();
