// create variable for button save icon
let customIcon = document.querySelector(".custom-icon");
// create variable for timeblock rows
let customRow = document.querySelector(".custom-row");
// create varaibles for timeblock row buttons and textarea for each hour from 09Am to 17PM
let customButton09 = document.querySelector(".custom-button-09");
let customTextarea09 = document.querySelector(".custom-textarea-09");
let customButton10 = document.querySelector(".custom-button-10");
let customTextarea10 = document.querySelector(".custom-textarea-10");
let customButton11 = document.querySelector(".custom-button-11");
let customTextarea11 = document.querySelector(".custom-textarea-11");
let customButton12 = document.querySelector(".custom-button-12");
let customTextarea12 = document.querySelector(".custom-textarea-12");
let customButton13 = document.querySelector(".custom-button-13");
let customTextarea13 = document.querySelector(".custom-textarea-13");
let customButton14 = document.querySelector(".custom-button-14");
let customTextarea14 = document.querySelector(".custom-textarea-14");
let customButton15 = document.querySelector(".custom-button-15");
let customTextarea15 = document.querySelector(".custom-textarea-15");
let customButton16 = document.querySelector(".custom-button-16");
let customTextarea16 = document.querySelector(".custom-textarea-16");
let customButton17 = document.querySelector(".custom-button-17");
let customTextarea17 = document.querySelector(".custom-textarea-17");

// apply styling to button save icon to center an change pointer to a hand.
customIcon.setAttribute("style", "align-items:center; cursor:pointer;");
// apply styling to timeblock row for gap between each row
customRow.setAttribute("style", "margin-bottom:1rem;");

// display the current time and day
var today = moment();
$("#currentDay").text(today.format("dddd,  MMM Do"));

// get the current time in hours
currentTimeHour = parseInt(today.format("H"));

// create variables to be used for applying past, present and future colours for each hour from 09am to 17pm as appropriate.
let hour09 = parseInt(9);
let hour10 = parseInt(10);
let hour11 = parseInt(11);
let hour12 = parseInt(12);
let hour13 = parseInt(13);
let hour14 = parseInt(14);
let hour15 = parseInt(15);
let hour16 = parseInt(16);
let hour17 = parseInt(17);

// get data from local storage and initialise function to apply past, present and future colours for each hour from 09am to 17pm as appropriate.
function init() {
  // get data from local storage to be displayed for 9am row
  customTextarea09.textContent = localStorage.getItem("09AM");
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour09) customTextarea09.classList.toggle("present");
  else if (currentTimeHour > hour09) customTextarea09.classList.toggle("past");
  else customTextarea09.classList.toggle("future");

  // get data from local storage to be displayed for 9am row
  customTextarea10.textContent = localStorage.getItem("10AM");
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour10) customTextarea10.classList.toggle("present");
  else if (currentTimeHour > hour10) customTextarea10.classList.toggle("past");
  else customTextarea09.classList.toggle("future");

  // get data from local storage to be displayed for 9am row
  customTextarea11.textContent = localStorage.getItem("11AM");
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour11) customTextarea11.classList.toggle("present");
  else if (currentTimeHour > hour11) customTextarea11.classList.toggle("past");
  else customTextarea11.classList.toggle("future");

  // get data from local storage to be displayed for 9am row
  customTextarea12.textContent = localStorage.getItem("12PM");
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour12) customTextarea12.classList.toggle("present");
  else if (currentTimeHour > hour12) customTextarea12.classList.toggle("past");
  else customTextarea12.classList.toggle("future");

  // get data from local storage to be displayed for 9am row
  customTextarea13.textContent = localStorage.getItem("13PM");
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour13) customTextarea13.classList.toggle("present");
  else if (currentTimeHour > hour13) customTextarea13.classList.toggle("past");
  else customTextarea13.classList.toggle("future");

  // get data from local storage to be displayed for 9am row
  customTextarea14.textContent = localStorage.getItem("14PM");
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour14) customTextarea14.classList.toggle("present");
  else if (currentTimeHour > hour14) customTextarea14.classList.toggle("past");
  else customTextarea14.classList.toggle("future");

  // get data from local storage to be displayed for 9am row
  customTextarea15.textContent = localStorage.getItem("15PM");
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour15) customTextarea15.classList.toggle("present");
  else if (currentTimeHour > hour15) customTextarea15.classList.toggle("past");
  else customTextarea15.classList.toggle("future");

  // get data from local storage to be displayed for 9am row
  customTextarea16.textContent = localStorage.getItem("16PM");
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour16) customTextarea16.classList.toggle("present");
  else if (currentTimeHour > hour16) customTextarea16.classList.toggle("past");
  else customTextarea16.classList.toggle("future");

  // get data from local storage to be displayed for 9am row
  customTextarea17.textContent = localStorage.getItem("17PM");
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour17) customTextarea17.classList.toggle("present");
  else if (currentTimeHour > hour17) customTextarea17.classList.toggle("past");
  else customTextarea17.classList.toggle("future");

  // call the function with the event listeners
  buttonListeners();
}

// function for the event listeners
function buttonListeners() {
  // event listener for 9am
  customButton09.addEventListener("click", function (event) {
    // get the text entry for 9am
    let input09AM = customTextarea09.value.trim();
    // store the text entry for 9am into local storage
    localStorage.setItem("09AM", input09AM);
  });

  // event listener for 10am
  customButton10.addEventListener("click", function (event) {
    // get the text entry for 10am
    let input10AM = customTextarea10.value.trim();
    // store the text entry for 10am into local storage
    localStorage.setItem("10AM", input10AM);
  });

  // event listener for 11am
  customButton11.addEventListener("click", function (event) {
    // get the text entry for 11am
    let input11AM = customTextarea11.value.trim();
    // store the text entry for 11am into local storage
    localStorage.setItem("11AM", input11AM);
  });
  // event listener for 12am
  customButton12.addEventListener("click", function (event) {
    // get the text entry for 12am
    let input12PM = customTextarea12.value.trim();
    // store the text entry for 12am into local storage
    localStorage.setItem("12PM", input12PM);
  });
  // event listener for 13am
  customButton13.addEventListener("click", function (event) {
    // get the text entry for 13am
    let input13PM = customTextarea13.value.trim();
    // store the text entry for 13am into local storage
    localStorage.setItem("13PM", input13PM);
  });
  // event listener for 14am
  customButton14.addEventListener("click", function (event) {
    // get the text entry for 14am
    let input14PM = customTextarea14.value.trim();
    // store the text entry for 14am into local storage
    localStorage.setItem("14PM", input14PM);
  });
  // event listener for 15am
  customButton15.addEventListener("click", function (event) {
    // get the text entry for 15am
    let input15PM = customTextarea15.value.trim();
    // store the text entry for 15am into local storage
    localStorage.setItem("15PM", input15PM);
  });
  // event listener for 16am
  customButton16.addEventListener("click", function (event) {
    // get the text entry for 16am
    let input16PM = customTextarea16.value.trim();
    // store the text entry for 16am into local storage
    localStorage.setItem("16PM", input16PM);
  });
  // event listener for 17am
  customButton17.addEventListener("click", function (event) {
    // get the text entry for 17am
    let input17PM = customTextarea17.value.trim();
    // store the text entry for 17am into local storage
    localStorage.setItem("17PM", input17PM);
  });
}

init();
