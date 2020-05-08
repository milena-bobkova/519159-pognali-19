var businessLink = document.querySelector(".rates__button");
var businessModal = document.querySelector(".rates__business");
var businessClose = businessModal.querySelector(".rates__button-mod");

businessLink.addEventListener("click", function () {
  if (businessModal.classList.contains("rates__business--closed")) {
    businessModal.classList.remove("rates__business--closed");
  } else {
    businessModal.classList.add("rates__business--closed");
  }
});

businessClose.addEventListener("click", function () {
  if (!businessModal.classList.contains("rates__business--closed")) {
    businessModal.classList.add("rates__business--closed");
  }
});
