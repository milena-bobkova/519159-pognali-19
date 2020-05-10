var businessLink = document.querySelector(".rates__button");
var businessModal = document.querySelector(".rates-business");
var businessClose = businessModal.querySelector(".rates-business__button");

businessLink.addEventListener("click", function () {
  if (businessModal.classList.contains("rates-business--closed")) {
    businessModal.classList.remove("rates-business--closed");
  } else {
    businessModal.classList.add("rates-business--closed");
  }
});

businessClose.addEventListener("click", function () {
  if (!businessModal.classList.contains("rates-business--closed")) {
    businessModal.classList.add("rates-business--closed");
  }
});
