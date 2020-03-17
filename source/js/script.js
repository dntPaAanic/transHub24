var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add("main-nav--closed");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});

function scrollMenu() {
  var header = document.querySelector(".page-header");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 740 && window.innerWidth >= 1440 || window.pageYOffset > 0 && window.innerWidth < 1440) {
      header.classList.add("page-header--scrolled");
    } else {
      header.classList.remove("page-header--scrolled");
    }
  });
}

scrollMenu();
