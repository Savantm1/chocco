let mobile_menu_btn = document.querySelector('.hamburger_link');
let mobile_menu = document.querySelector('.mobile_menu');
let mobile_close = document.querySelector('.close_img');
let main_nav = document.querySelector('.main_nav');


mobile_menu_btn.addEventListener('click', (evt) => {
  evt.preventDefault();
  mobile_menu.style.height = '100%';
});

function mobileBtnClose() {
  
  mobile_close.addEventListener("click", (evt) => {
    evt.preventDefault();
    mobile_menu.style.height = "0%";
  });

}

mobileBtnClose();


$(document).ready(function () {
  $(".").on("click", "a", function (evt) {
    evt.preventDefault();
    let id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({
      scrollTop: top
    }, 500);


  });
});


$(document).ready(function () {
  $(".paginator").on("click", "a", function (evt) {
    evt.preventDefault();
    let id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({
      scrollTop: top
    }, 500);
  });
});


$(document).ready(function () {
  $(".mobile_menu").on("click", "a", function (evt) {
    evt.preventDefault();
    let id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
      $('.mobile_menu').css("height", "0%");
    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({
      scrollTop: top
    }, 500);
  });
});


