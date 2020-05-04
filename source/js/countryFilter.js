var countryFilter = document.querySelector(".countries-filter");
var openFilter = countryFilter.querySelector(".countries-filter__btn");
var closeFilter = countryFilter.querySelector(".countries-filter__collapse");

openFilter.addEventListener("click", function () {
  if (countryFilter.classList.contains("countries-filter--closed")) {
    countryFilter.classList.remove("countries-filter--closed")
  } else {
    countryFilter.classList.add("countries-filter--closed")
  }
});

closeFilter.addEventListener("click", function () {
  if (!countryFilter.classList.contains("countries-filter--closed")) {
    countryFilter.classList.add("countries-filter--closed")
  }
});
