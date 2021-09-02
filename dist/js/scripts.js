const vh = window.innerHeight / 100;


// Calls
window.onload = (event) => {
    let myAlert = document.querySelector('.toast');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
    console.log('mmmm-hmmmmm');
}

document.querySelector("iframe").onload = function() {
    classFromClass('opacity-0','opacity-0')
    classToClass('opacity-0','loading');
};

//Helpers
function classFromClass(target_class, class_selection) {
    Array.from(document.getElementsByClassName(class_selection))
    .forEach((element) => element.classList.remove(target_class));
}
function classToClass(new_class, class_selection) {
    Array.from(document.getElementsByClassName(class_selection))
    .forEach((element) => element.classList.add(new_class));
}

//"Sometimes sticky" Scroll to Top button

function scrollFunction() {
    //Would like to clean this up at some point to improve how the sticky point is determined detect for where the target element would otherwise normall appear in the DOM
    let mybutton = document.getElementById('scroll_btn');
    let btn_h = mybutton.getBoundingClientRect().height;
    let doc_h = document.querySelector("body").getBoundingClientRect().height;
    let window_h = window.innerHeight;
    let footer_h = document.querySelector('footer').getBoundingClientRect().height;
    let sticky_start = doc_h - window_h - footer_h - btn_h;

    if (document.documentElement.scrollTop < sticky_start) {
        mybutton.classList.add('active_scroll');
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.classList.add('onscreen');
        } else {
            mybutton.classList.remove('onscreen');
        }
    } else {
        mybutton.classList.remove('active_scroll');
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
