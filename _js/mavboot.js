/********************************************************
mavboot.js - javascript for the Mavboot Theme.
1. Back to top button
2. Tooltips
3. Popovers
*********************************************************/

/* DISPLAY THE 'BACK TO TOP' BUTTON ON SCROLL DOWN */

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if ( document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



/* INITIALIZE ALL TOOLTIPS ON THE PAGE */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})



/* INITIALIZE ALL POPOVERS ON THE PAGE */
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
return new bootstrap.Popover(popoverTriggerEl)
})
