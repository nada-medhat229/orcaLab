$(document).ready(function () {
  //loader
  setTimeout(function () {
    $(".loader").fadeOut(400);
  }, 1000);

  $('.customer .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    rtl:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        },
        1200:{
            items:3
        }
    }
})
$('.partners .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  rtl:true,
  margin:10,
  items:6,
  responsive:{
      0:{
          items:2
      },
      600:{
        items:3
      },
      900:{
          items:4
      },
      1000:{
          items:6
      }
  }
})
  $(function () {
    $(".user-rate").rateYo({
      rating: $(".user-rate").attr("rateYo"),
      starWidth: "15px",
      ratedFill: "#FFC107",
      readOnly: true,
      normalFill: "#FFC107",
      rtl:true
    });
  });
AOS.init();
});
