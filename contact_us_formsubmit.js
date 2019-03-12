/*
    Project V4: Basic HTML and CSS
    Henery Hardware - website
    Author: Matthew Henery
    Date: 3/12/19
    Filename: contact_us_formsubmit.js
*/
window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Contact Form is for test purposes only.  The provided information will not be sent to any server.");
      return false;
   }
   
}