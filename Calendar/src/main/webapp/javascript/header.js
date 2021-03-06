var navigationControlDate = document.getElementById("sc2117");

document.getElementById("sc2119").addEventListener("click", backOneMonth);
document.getElementById("sc2122").addEventListener("click", forwardOneMonth);

var month = {
  index: currentDateIndex.month,
  monthTextArray: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}

function setMonth(monthIndex) {
  function getMonthText(monthIndex) {
    var monthTextArray = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthTextArray[monthIndex];
  };
  var monthText = getMonthText(monthIndex);
  navigationControlDate.innerHTML = "<strong>" + monthText + "</strong> 2019";
}
setMonth(month.index);

function getHeaderWidth() {
  var monthWidth = ["236.802px", "246.646px", "219.323px", "203.188px", "197.865px", "205.063px", "197.677px", "227.427px", "267.438px", "238.604px", "259.833px", "260.198px"];

  return monthWidth[3];
}
var headerCollection = document.getElementsByClassName("display-header");
headerCollection[0].style.width = getHeaderWidth();

var thisMonth = todaysDate.getMonth();
monthTextCollection = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthIndex = 4;

function backOneMonth() {
  monthIndex = monthIndex - 1;
  setMonth(monthIndex);
}

function forwardOneMonth() {
  monthIndex = monthIndex + 1;
  setMonth(monthIndex);
}
