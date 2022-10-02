// slider banner bottom mobile
$(".banner__bottom-list").slick({
  slidesToShow: 8,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6.5,
        slidesToScroll: 2,
        infinite: false,
        // dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 2,
        infinite: false,
        // dots: true,
      },
    },
  ],
});

$(".banner__carousel-list").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 1500,
  dots: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
});

// danh muc
$(".category__list").slick({
  slidesToShow: 10,
  slidesToScroll: 3,
  infinite: false,

  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6.5,
        slidesToScroll: 3,
        infinite: false,
        // dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 3,
        infinite: false,
        // dots: true,
      },
    },
  ],
});
//slider flash sale
$(".flash-sale__list").slick({
  slidesToShow: 6,
  slidesToScroll: 6,
  infinite: false,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 2,
        infinite: false,
        // dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2,
        infinite: false,
        // dots: true,
      },
    },
  ],
});

// slider shop mail left slide 1
$(".shop-mail__ad").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2000,
  dots: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
});

// slider shop mail right  slide 2
$(".shop-mail__promotion").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: false,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 4,
        infinite: false,
        // dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2,
        infinite: false,
        // dots: true,
      },
    },
  ],
});
// search trend
$(".search-trends__list").slick({
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        infinite: false,
        // dots: true,
      },
    },
  ],
});
// top search
$(".top-search__list").slick({
  slidesToShow: 6,
  slidesToScroll: 6,
  infinite: false,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 2,
        infinite: false,
        // dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2,
        infinite: false,
        // dots: true,
      },
    },
  ],
});
