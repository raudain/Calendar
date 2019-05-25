var evint = {
  panel: document.querySelector("div.event-inspector-panel"),
  pointer: document.querySelector("div.sc-pointer")
};
var eventDay = document.getElementById("sc2750-1");
var eventContainer = eventDay.firstChild;

// ****************************** Event panel *********************

function setEventInspectorPanelClass() {
  var classes = evint.panel.className;
  evint.panel.className = classes + " perfectLeft";
}
setEventInspectorPanelClass();

function setEventPanelStyle() {
  var left = window.innerWidth * .85714285714285716 - parseInt(evint.panel.style.width) - 5;
  evint.panel.style.left = left + "px";
  evint.panel.style.top = "300px";
}
setEventPanelStyle();

// ****************************** End event panel *********************

function setEventPointerClass() {
  var clasc = evint.pointer.className;
  evint.pointer.className = clasc + " perfectLeft"
}
setEventPointerClass();

function setEventTitle() {
  var title;
  document.getElementsByTagName("input")[0].defaultValue = "New Event";
}
setEventTitle();

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
  evint.panel.parentNode.removeChild(evint.panel);
}

document.getElementById("sc4852-label").addEventListener("click", cancelEvent);

cancelEvent();

function openEventForm() {
  document.body.appendChild(evint.panel);
}

document.getElementById("sc2750").addEventListener("click", deselectEvents, true);
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
