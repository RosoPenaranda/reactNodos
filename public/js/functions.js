$(window).scroll(function () {
  if ($("#menu").offset().top > 380) {
    $("#menu").addClass("navbar-white");
    $("#LogoWhite").addClass("d-none");
    $("#LogoBlue").removeClass("d-none");

  } else {
    $("#menu").removeClass("navbar-white");
    $("#LogoWhite").removeClass("d-none");
    $("#LogoBlue").addClass("d-none");

  }
});



