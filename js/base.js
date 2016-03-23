// $( document ).ready(function(){
//   console.log( "ready" );

//     var jumboHeight = $('.jumbotron').outerHeight();
//   function parallax(){
//       var scrolled = $(window).scrollTop();
//       $('.bg').css('height', (jumboHeight-scrolled) + 'px');
//   }

//   $(window).scroll(function(e){
//       parallax();
//   });
// });

// var jumboHeight = $('.jumbotron').outerHeight();
// function parallax(){
//     var scrolled = $(window).scrollTop();
//     $('.bg').css('height', (jumboHeight-scrolled) + 'px');
// }


$(window).scroll(function(e){
    parallax();
});

$('.carousel').carousel({
  interval: 2000
});
