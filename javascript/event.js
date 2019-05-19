var getEventTitle = document.getElementsByTagName("input");
getEventTitle[0].defaultValue = "New Event";
var eventForm = document.getElementById("sc3841");

document.getElementById("sc2298").addEventListener("click", newEvent);

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

function newEvent() {
  document.body.appendChild(eventForm);
}
