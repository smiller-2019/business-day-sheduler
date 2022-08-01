// create varaibles for timeblock row buttons and textarea for each hour from 09Am to 17PM
let customButton09 = $(".custom-button-09");
let customTextarea09 = $(".custom-textarea-09");
let customButton10 = $(".custom-button-10");
let customTextarea10 = $(".custom-textarea-10");
let customButton11 = $(".custom-button-11");
let customTextarea11 = $(".custom-textarea-11");
let customButton12 = $(".custom-button-12");
let customTextarea12 = $(".custom-textarea-12");
let customButton13 = $(".custom-button-13");
let customTextarea13 = $(".custom-textarea-13");
let customButton14 = $(".custom-button-14");
let customTextarea14 = $(".custom-textarea-14");
let customButton15 = $(".custom-button-15");
let customTextarea15 = $(".custom-textarea-15");
let customButton16 = $(".custom-button-16");
let customTextarea16 = $(".custom-textarea-16");
let customButton17 = $(".custom-button-17");
let customTextarea17 = $(".custom-textarea-17");

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
  $(customTextarea09).val(localStorage.getItem("09AM"));
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour09) $(customTextarea09).toggleClass("present");
  else if (currentTimeHour > hour09) $(customTextarea09).toggleClass("past");
  else $(customTextarea09).toggleClass("future");

  // get data from local storage to be displayed for 10am row
  $(customTextarea10).val(localStorage.getItem("10AM"));
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour10) $(customTextarea10).toggleClass("present");
  else if (currentTimeHour > hour10) $(customTextarea10).toggleClass("past");
  else $(customTextarea10).toggleClass("future");

  // get data from local storage to be displayed for 11am row
  $(customTextarea11).val(localStorage.getItem("11AM"));
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour11) $(customTextarea11).toggleClass("present");
  else if (currentTimeHour > hour11) $(customTextarea11).toggleClass("past");
  else $(customTextarea11).toggleClass("future");

  // get data from local storage to be displayed for 12pm row
  $(customTextarea12).val(localStorage.getItem("12PM"));
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour12) $(customTextarea12).toggleClass("present");
  else if (currentTimeHour > hour12) $(customTextarea12).toggleClass("past");
  else $(customTextarea12).toggleClass("future");

  // get data from local storage to be displayed for 13pm row
  $(customTextarea13).val(localStorage.getItem("13PM"));
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour13) $(customTextarea13).toggleClass("present");
  else if (currentTimeHour > hour13) $(customTextarea13).toggleClass("past");
  else $(customTextarea13).toggleClass("future");

  // get data from local storage to be displayed for 14pm row
  $(customTextarea14).val(localStorage.getItem("14PM"));
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour14) $(customTextarea14).toggleClass("present");
  else if (currentTimeHour > hour14) $(customTextarea14).toggleClass("past");
  else $(customTextarea14).toggleClass("future");

  // get data from local storage to be displayed for 15pm row
  $(customTextarea15).val(localStorage.getItem("15PM"));
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour15) $(customTextarea15).toggleClass("present");
  else if (currentTimeHour > hour15) $(customTextarea15).toggleClass("past");
  else $(customTextarea15).toggleClass("future");

  // get data from local storage to be displayed for 16pm row
  $(customTextarea16).val(localStorage.getItem("16PM"));
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour16) $(customTextarea16).toggleClass("present");
  else if (currentTimeHour > hour16) $(customTextarea16).toggleClass("past");
  else $(customTextarea16).toggleClass("future");

  // get data from local storage to be displayed for 17pm row
  $(customTextarea17).val(localStorage.getItem("17PM"));
  // select appropriate background colour for past, present or future depending on the current time
  if (currentTimeHour === hour17) $(customTextarea17).toggleClass("present");
  else if (currentTimeHour > hour17) $(customTextarea17).toggleClass("past");
  else $(customTextarea17).toggleClass("future");

  // call the function with the event listeners
  buttonListeners();
}

// function for the event listeners
function buttonListeners() {
  // event listener for 9am
  $(customButton09).click(function () {
    // get the text entry for 9am
    let input09AM = $(customTextarea09).val().trim();
    // store the text entry for 9am into local storage
    localStorage.setItem("09AM", input09AM);
  });

  // event listener for 10am
  $(customButton10).click(function () {
    // get the text entry for 10am
    let input10AM = $(customTextarea10).val().trim();
    // store the text entry for 10am into local storage
    localStorage.setItem("10AM", input10AM);
  });

  // event listener for 11am
  $(customButton11).click(function () {
    // get the text entry for 11am
    let input11AM = $(customTextarea11).val().trim();
    // store the text entry for 11am into local storage
    localStorage.setItem("11AM", input11AM);
  });
  // event listener for 12pm
  $(customButton12).click(function () {
    // get the text entry for 12pm
    let input12PM = $(customTextarea12).val().trim();
    // store the text entry for 12am into local storage
    localStorage.setItem("12PM", input12PM);
  });
  // event listener for 13pm
  $(customButton13).click(function () {
    // get the text entry for 13pm
    let input13PM = $(customTextarea13).val().trim();
    // store the text entry for 13PM into local storage
    localStorage.setItem("13PM", input13PM);
  });
  // event listener for 14pm
  $(customButton14).click(function () {
    // get the text entry for 14pm
    let input14PM = $(customTextarea14).val().trim();
    // store the text entry for 14PM into local storage
    localStorage.setItem("14PM", input14PM);
  });
  // event listener for 15pm
  $(customButton15).click(function () {
    // get the text entry for 15pm
    let input15PM = $(customTextarea15).val().trim();
    // store the text entry for 15PM into local storage
    localStorage.setItem("15PM", input15PM);
  });
  // event listener for 16pm
  $(customButton16).click(function () {
    // get the text entry for 16pm
    let input16PM = $(customTextarea16).val().trim();
    // store the text entry for 16PM into local storage
    localStorage.setItem("16PM", input16PM);
  });
  // event listener for 17pm
  $(customButton17).click(function () {
    // get the text entry for 17pm
    let input17PM = $(customTextarea17).val().trim();
    // store the text entry for 17am into local storage
    localStorage.setItem("17PM", input17PM);
  });
}

init();
