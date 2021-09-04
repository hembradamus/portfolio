const vh = window.innerHeight / 100;


// Toast
window.onload = (event) => {
    let myAlert = document.querySelector('.toast');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
    console.log('mmmm-hmmmmm');
}

//Google slides iframe cleanup
document.querySelector("iframe").onload = function() {
    classFromClass('opacity-0','opacity-0')
    classToClass('opacity-0','loading');
};

//Scroll to Top button
window.onscroll = function() {scrollFunction()};

//Modals
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
});



let kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {
  
    kkeys.push( e.keyCode );
  
    if ( kkeys.toString().indexOf( konami ) >= 0 ) {
  
      $(document).unbind('keydown',arguments.callee);
      
      // do something awesome
      document.getElementById('bonasu').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/2mWZlNOzdv8?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
  
  });
  