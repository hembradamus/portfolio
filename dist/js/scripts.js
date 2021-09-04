const vh = window.innerHeight / 100;
const konami = ['arrowup','arrowup','arrowdown','arrowdown','arrowleft','arrowright','arrowleft','arrowright','b','a'];
const fanprojects = '<p class="text-center">You got <a href="https://en.wikipedia.org/wiki/Konami_Code" target="_blank">30 lives</a>! (and also found where I will feature fan projects in the future)</p><iframe width="0" height="0" src="https://www.youtube.com/embed/2mWZlNOzdv8?start=3&end=9&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';



//Helpers
function classFromClass(target_class, class_selection) {
    Array.from(document.getElementsByClassName(class_selection))
    .forEach((element) => element.classList.remove(target_class));
}
function classToClass(new_class, class_selection) {
    Array.from(document.getElementsByClassName(class_selection))
    .forEach((element) => element.classList.add(new_class));
}
function goBack() {
    window.history.back();
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

function cheatCodeSniffer(unlock_code, dom_e, new_content) {
    'use strict';
    let buffer = [];
    let lastKeyTime = Date.now();

    document.addEventListener('keydown', event => {
      const charList = unlock_code;
      const key = event.key.toLowerCase();

      if (charList.indexOf(key) === -1) return;

      const currentTime = Date.now();

      if (currentTime - lastKeyTime > 1000) {
          buffer = [];
      }

      buffer.push(key);
      lastKeyTime = currentTime;
      console.log(key);
      console.log(buffer);

      if(buffer.toString().indexOf(charList.toString()) >= 0) {
        const target = document.querySelector(dom_e);
        const range = document.createRange();
        range.setStartBefore(document.getElementsByTagName('section').item(0), 0);
        range.setEndAfter(document.getElementsByTagName('section').item(1), 0);
        const scroll_start = range.getBoundingClientRect().height;

        target.innerHTML += new_content;
        target.classList.remove('d-none');
        window.scrollTo({
            top: range.getBoundingClientRect().height,
            left: 0,
            behavior: "smooth"
        });

        target.classList.remove('opacity-off');
      }
    });
}