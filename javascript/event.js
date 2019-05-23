var eventInspectorPanel = document.getElementsByClassName("event-inspector-panel")[0];

var checkBox = {
  button: document.querySelector("span.button"),
  control: function() {
    return this.button.parentElement;
  },
  notCheckedClass: "atv4 calendar sc-view sc-button-view sc-checkbox-view sc-checkbox-control checkbox sc-regular-size",
  checkedClass: "atv4 calendar sc-view sc-button-view sc-checkbox-view sc-checkbox-control checkbox sc-regular-size sel"
}

var getEventTitle = document.getElementsByTagName("input");
var monthEvents = document.getElementById("sc2750");
var eventDay = document.getElementById("sc2750-1");
var eventContainer = eventDay.firstChild;

function setEventInspectorPanelClass() {
  var classes = eventInspectorPanel.className;
  eventInspectorPanel.className = classes + " perfectLeft";
}
setEventInspectorPanelClass();

function setEventInspectorPanelStyle() {
  eventInspectorPanel.style.left = "1000px";
  eventInspectorPanel.style.top = "300px";
}
setEventInspectorPanelStyle();

getEventTitle[0].defaultValue = "New Event";

document.getElementById("sc2298").addEventListener("click", openEventForm);

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
  eventInspectorPanel.parentNode.removeChild(eventInspectorPanel);
}

document.getElementById("sc4852-label").addEventListener("click", cancelEvent);

cancelEvent();

function openEventForm() {
  document.body.appendChild(eventInspectorPanel);
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
