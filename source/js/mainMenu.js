var navMain = document.querySelector('.main-nav');
var navInner = document.querySelector('.page-inner__nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener("click", function () {
  if (navInner) {
    if (navMain.classList.contains("main-nav--closed") && navInner.classList.contains("page-inner__nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.remove("page-inner__nav--closed");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.add("page-inner__nav--closed");
    }
  } else {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
    } else {
      navMain.classList.add("main-nav--closed");
    }
  }
});
