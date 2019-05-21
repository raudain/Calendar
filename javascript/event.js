var getEventTitle = document.getElementsByTagName("input");

getEventTitle[0].defaultValue = "New Event";

var eventFormCollection = document.getElementsByClassName("event-inspector-panel");
//var eventForm = document.getElementById("sc3841");
var monthEvents = document.getElementById("sc2750");
var eventDay = document.getElementById("sc2750-1");

var eventForm = eventFormCollection[0];
var eventContainer = eventDay.firstChild;

document.getElementById("sc2298").addEventListener("click", openEventForm);

function addClass(newClass) {
  oldClassName = this.className;
  this.className = oldClassName + "" + newClass;
}

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
  eventForm.parentNode.removeChild(eventForm);
}

document.getElementById("sc4852-label").addEventListener("click", cancelEvent);

cancelEvent();

function openEventForm() {
  document.body.appendChild(eventForm);
}

monthEvents.addEventListener("click", deselectEvents, true);
function deselectEvents() {
  var eventDayClass = eventDay.className;
  var eventDayClass = eventDayClass.slice(0,98);
  eventDay.setAttribute("class", eventDayClass);
}

eventContainer.addEventListener("click", selectEvent);
function selectEvent() {
  var eventDayClass = eventDay.className;
  eventDay.setAttribute("class", eventDayClass + " sel");
}

eventContainer.addEventListener("dblclick", openEventForm);
