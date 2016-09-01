var link = document.querySelector("#popup");
var form = document.querySelector(".hidden-form");
var arrival = form.querySelector("[name=arrival-date]");
var departure = form.querySelector("[name=departure-date]");
var counter1 = form.querySelector("[name=adults-counter]");
var counter2 = form.querySelector("[name=children-counter]");
var storage1 = localStorage.getItem("counter1");
var storage2 = localStorage.getItem("counter2");

link.addEventListener("click", function (event) {
  "use strict";
  event.preventDefault();
  form.classList.toggle("evident");
  if (storage1) {
    counter1.value = storage1;
    counter2.focus();
  } else {
    counter1.focus();
  }
});

form.addEventListener("submit", function (event) {
  "use strict";
  if (!arrival.value || !departure.value || !counter1.value) {
    event.preventDefault();
    console.log("Не заполнены обязательные поля формы");
  } else {
    localStorage.setItem("arrival", arrival.value);
    localStorage.setItem("departure", departure.value);
    localStorage.setItem("counter1", counter1.value);
  }
});