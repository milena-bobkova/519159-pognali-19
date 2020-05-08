var buttonDropdown = document.querySelector(".add-plan__choice-btn-country");

buttonDropdown.addEventListener("click", function (event) {
  event.preventDefault();
  listDropdown(buttonDropdown);
});

var listDropdown = function (item) {
  if (item.classList.contains("add-plan__choice-btn-country--active")) {
    item.classList.remove("add-plan__choice-btn-country--active");
  } else {
    item.classList.add("add-plan__choice-btn-country--active");
  }
};
