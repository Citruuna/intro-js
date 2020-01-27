(function() {
  var itemClassName = "slider__photo";
  (items = document.getElementsByClassName(itemClassName)),
    (totalItems = items.length),
    (slide = 0);

  // Set event listeners
  function setEventListeners() {
    var next = document.getElementsByClassName("slider__button--next")[0],
      prev = document.getElementsByClassName("slider__button--prev")[0];

    next.addEventListener("click", getNext);
    prev.addEventListener("click", getPrev);
  }

  function getNext() {
    items[slide].classList.remove("active");
    if (slide === totalItems - 1) {
      slide = 0;
    } else slide++;
    //slide = slide === totalItems - 1 ? 0 : slide + 1;
    items[slide].classList.add("active");
  }

  function getPrev() {
    items[slide].classList.remove("active");
    if (slide === totalItems - 5) {
      slide = 4;
    } else slide--;
    items[slide].classList.add("active");
  }

  function initSlider() {
    // setInitialClasses();
    setEventListeners();

    // Set moving to false so that the slider becomes interactive
    moving = false;
  }

  initSlider();
})();

document.getElementsByClassName("active");
slide = slide === totalItems - 1 ? 0 : slide++;
