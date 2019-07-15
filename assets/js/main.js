// Custom javascript
$(function (){

  function countdown() {

    var now = new Date();
    var eventDate = new Date(2019, 08, 1, 16,00,00);
    var currentTime = now.getTime();
    var evenTime = eventDate.getTime();

    var remTime = evenTime - currentTime;

    var sec = Math.floor(remTime / 1000);
    var min = Math.floor(sec / 60);
    var hur = Math.floor(min / 60);
    var day = Math.floor(hur / 24);

    hur %= 24;
    min %= 60;
    sec %= 60;

    hur = (hur < 10) ? "0" + hur : hur;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    $('.seconds').text(sec);
    $('.minutes').text(min);
    $('.hours').text(hur);
    $('.days').text(day);

    setTimeout(countdown, 1000);
  }

  countdown();
});

$(document).ready(function() {
  document.querySelector(".card-flip").classList.toggle("flip");

  var listItem = document.getElementsByClassName('list-group-item');

  for(let i=0; i<listItem.length; i++ ) {
    listItem[i].addEventListener('click', closeNav);
  }

});

$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar").addClass("fixednav"); 

  } else {
    $(".navbar").removeClass("fixednav");
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin

function openNav() {
  $('#sidebar-wrapper').toggleClass('toggle');
  $('#wrapper').toggleClass('toggle');
  $('#navbarResponsive').toggleClass('toggle');
}

function closeNav() {
  $('#sidebar-wrapper').removeClass('toggle');
  $('#wrapper').removeClass('toggle');
  $('#navbarResponsive').removeClass('toggle');
}



