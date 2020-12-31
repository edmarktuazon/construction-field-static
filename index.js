// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {

  links.classList.toggle("show-links");
});

window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    status.classList.add('success');
    button.style = "display: none ";
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add('error');
    status.innerHTML = "One or more fields have an error. Please check and try again.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data)
}



//



$(window).scroll(function(){
  var height = $(window).scrollTop();
  if (height > 100){
      $("#topBtn").fadeIn();
  }else{
      $("#topBtn").fadeOut();
  }
});
$(document).ready(function(){
  $("#topBtn").click(function(event){
      event.preventDefault();
      $("html, body").animate( {scrollTop: 0}, "slow");
          return false;
  });
});

