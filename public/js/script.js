$(document).ready(function($){
  console.log('dom ready!')

  setTimeout(function(){
    $('.trans-grow').addClass('grow-length');
    $('.heading').addClass('appear');
  }, 275)

  setTimeout(function(){
    $('.vertical').addClass('grow-height');
  }, 1500)

  setTimeout(function(){
    $('.number.one').addClass('make-visible')
  }, 2000)

  setTimeout(function(){
    $('.number.two').addClass('make-visible')
  }, 2500)

  setTimeout(function(){
    $('.number.three').addClass('make-visible')
  }, 3000)

  $('.number.one').on('mouseover',function(){
    $('.inner.one').css('visibility','hidden')
  })

})
