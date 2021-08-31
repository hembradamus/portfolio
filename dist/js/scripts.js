window.onload = (event) => {
    let myAlert = document.querySelector('.toast');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
    console.log('mmmm-hmmmmm');
}

document.querySelector("iframe").onload = function() {myFunction()};

function myFunction() {
  Array.from(document.getElementsByClassName("opacity-0"))
  .forEach((element) => element.classList.remove('opacity-0'));
  Array.from(document.getElementsByClassName("loading"))
  .forEach((element) => element.classList.add('opacity-0'));
}

//Get the button:
mybutton = document.getElementById("scoll_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}