$(window).scroll(function () {
  if ($("#menu").offset().top > 380) {
    $("#menu").addClass("navbar-white");
    $("#logo").addClass("logoLst");

  } else {
    $("#menu").removeClass("navbar-white");
    $("#logo").removeClass("logoLst");
  }
});



