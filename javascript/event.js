var getEventTitle = document.getElementsByTagName("input");

getEventTitle[0].defaultValue = "New Event";

var eventFormCollection = document.getElementsByClassName("event-inspector-panel");
var monthEvents = document.getElementById("sc2750");
var eventDay = document.getElementById("sc2750-1");

var eventForm = eventFormCollection[0];
var eventContainer = eventDay.firstChild;

document.getElementById("sc2298").addEventListener("click", openEventForm);

var checkBox = {
  button: document.querySelector("span.button"),
  control: function() {
    return this.button.parentElement;
  },
  notCheckedClass: "atv4 calendar sc-view sc-button-view sc-checkbox-view sc-checkbox-control checkbox sc-regular-size",
  checkedClass: "atv4 calendar sc-view sc-button-view sc-checkbox-view sc-checkbox-control checkbox sc-regular-size sel"
}

function toggleCheckMark() {
  var checkBoxControl = checkBox.control();
  var classes = checkBoxControl.className;
  if (classes == checkBox.notCheckedClass) {
    checkBoxControl.className = checkBox.checkedClass;
  } else {
    checkBoxControl.className = checkBox.notCheckedClass;
  }
}

checkBox.button.addEventListener("click", toggleCheckMark);

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
