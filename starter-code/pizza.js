// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $("aside ul li:nth-child(4)").css("display", "none");
  $("aside ul li:nth-child(5)").css("display", "none");

  $("section").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $(".btn-sauce").removeClass("active");

  updatePrices();

  $(".btn-pepperonni").click(function(e) {
    if ($(".pep").css("display") == "none") {
      $(".pep").css("display", "");
      $(".btn-pepperonni").addClass("active");
      $("aside ul li:nth-child(1)").css("display", "");
    } else {
      $(".pep").css("display", "none");
      $(".btn-pepperonni").removeClass("active");
      $("aside ul li:nth-child(1)").css("display", "none");
    }
    updatePrices();
  });
  $(".btn-mushrooms").click(function(e) {
    if ($(".mushroom").css("display") == "none") {
      $(".mushroom").css("display", "");
      $(".btn-mushrooms").addClass("active");
      $("aside ul li:nth-child(2)").css("display", "");
    } else {
      $(".mushroom").css("display", "none");
      $(".btn-mushrooms").removeClass("active");
      $("aside ul li:nth-child(2)").css("display", "none");
    }
    updatePrices();
  });

  $(".btn-green-peppers").click(function(e) {
    if ($(".green-pepper").css("display") == "none") {
      $(".green-pepper").css("display", "");
      $(".btn-green-peppers").addClass("active");
      $("aside ul li:nth-child(3)").css("display", "");
    } else {
      $(".green-pepper").css("display", "none");
      $(".btn-green-peppers").removeClass("active");
      $("aside ul li:nth-child(3)").css("display", "none");
    }
    updatePrices();
  });

  $(".btn-sauce").click(function(e) {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    if ($(".btn-sauce").hasClass("active")) {
      $("aside ul li:nth-child(4)").css("display", "");
    } else {
      $("aside ul li:nth-child(4)").css("display", "none");
    }
    updatePrices();
  });
  $(".btn-crust").click(function(e) {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    if ($(".btn-crust").hasClass("active")) {
      $("aside ul li:nth-child(5)").css("display", "");
    } else {
      $("aside ul li:nth-child(5)").css("display", "none");
    }
    updatePrices();
  });
});

function updatePrices() {
  var precioTotal = parseInt($("b").html().split(" ")[0].split("$")[1]);
  $("aside ul li").each(function() {
    if ($(this).css("display") != "none") {
      precioTotal += parseInt($(this).html().split(" ")[0].split("")[1]);
      }
  });
  $("strong").html("$" + precioTotal);
}
