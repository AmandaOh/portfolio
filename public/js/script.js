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

  setTimeout(function(){
    $('.inner.main').css('visibility', 'visible')
  }, 3300)

  $('.heading').on('mouseover',function(){
    $('.inner.main').css('visibility','visible')
    $('.inner.one').css('visibility','hidden')
    $('.inner.two').css('visibility','hidden')
    $('.inner.three').css('visibility','hidden')
  })

  $('.number.one').on('mouseover',function(){
    $('.inner.one').css('visibility','visible')
    $('.inner.main').css('visibility','hidden')
    $('.inner.two').css('visibility','hidden')
    $('.inner.three').css('visibility','hidden')
  })

  $('.number.two').on('mouseover',function(){
    $('.inner.two').css('visibility','visible')
    $('.inner.main').css('visibility','hidden')
    $('.inner.one').css('visibility','hidden')
    $('.inner.three').css('visibility','hidden')
  })

  $('.number.three').on('mouseover',function(){
    $('.inner.three').css('visibility','visible')
    $('.inner.main').css('visibility','hidden')
    $('.inner.one').css('visibility','hidden')
    $('.inner.two').css('visibility','hidden')
  })
})
