$(document).ready(function() {
  $(".branding").fadeTo(1000, 0.1);
  $(".branding").fadeTo(1000, 1);
  $(".branding").fadeTo(1000, 0.1);
  $(".branding").fadeTo(1000, 1);
  $(".branding").fadeTo(1000, 0.1);
  $(".branding").fadeTo(1000, 1);
  $(".branding").fadeTo(1000, 0.1);
  $(".branding").fadeTo(1000, 1);
  $(".branding").fadeTo(1000, 0.1);
  $(".branding").fadeTo(1000, 1);
});

$(document).ready(function() {
  var btn = $(".toTop");

  $(window).scroll(function() {
    if ($(window).scrollTop() > 250) {
      btn.addClass("toTop");
    } else {
      btn.removeClass("toTop");
    }
  });

  btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
  });
});

$(document).ready(function() {
  // Change background colors of the category name display
  $("[class=product-name][data-type=mineralwater]").css(
    "background-color",
    "green"
  );

  // Show hide the prroduct listing by the categories
  //if ticked then show otherwise hide
  var products = $("form#productCategories input[type=checkbox]");

  $(products).on("change", function() {
    if ($(this).is(":checked")) {
      updateProductView($(this).val(), "block");
    } else if ($(this).is(":not(:checked)")) {
      updateProductView($(this).val(), "none");
    }
  });

  function updateProductView(category, view) {
    dataSelector = "";
    switch (category) {
      case "mineralwater":
        dataSelector = "h2[data-type='mineralwater']";
        break;
      case "proteinbar":
        dataSelector = "h2[data-type='proteinbar']";
        break;
      case "vitamin":
        dataSelector = "h2[data-type='vitamin']";
        break;
    }

    $(".product-item")
      .has(dataSelector)
      .css("display", view);
  }
});

$(document).ready(function() {
  $("[class=product-name][data-type=proteinbar]").css(
    "background-color",
    "blue"
  );

  var products = $("form#productCategories input[type=checkbox]");

  $(products).on("change", function() {
    if ($(this).is(":checked")) {
      updateProductView($(this).val(), "block");
    } else if ($(this).is(":not(:checked)")) {
      updateProductView($(this).val(), "none");
    }
  });

  function updateProductView(category, view) {
    dataSelector = "";
    switch (category) {
      case "mineralwater":
        dataSelector = "[data-type='mineralwater']";
        break;
      case "proteinbar":
        dataSelector = "[data-type='proteinbar']";
        break;
      case "vitamin":
        dataSelector = "[data-type='vitamin']";
        break;
    }

    $(".product-item")
      .has(dataSelector)
      .css("display", view);
  }
});
