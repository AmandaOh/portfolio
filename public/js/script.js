$(document).ready(function($){
  // console.log('dom ready!')

  setTimeout(function(){
    $('.trans-grow').addClass('grow-length');
    $('.heading-one').addClass('appear-from-right');
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
    $('.number.four').addClass('make-visible')
  }, 3500)

  setTimeout(function(){
    $('.inner.main').css('visibility','visible')
  }, 3800)

  $('.number.four').on('mouseover',function(){
    $('.inner.main').css('visibility','visible')
    $('.inner.one').css('visibility','hidden')
    $('.inner.two').css('visibility','hidden')
    $('.inner.three').css('visibility','hidden')
    $('.trans-grow').addClass('grow-length')
    $('.trans-grow').removeClass('reduce-length')
    $('.heading-one').addClass('appear-from-right')
    $('.heading-two').removeClass('appear-from-left')
  })

  $('.number.one').on('mouseover',function(){
    $('.inner.one').css('visibility','visible')
    $('.inner.main').css('visibility','hidden')
    $('.inner.two').css('visibility','hidden')
    $('.inner.three').css('visibility','hidden')
    $('.trans-grow').addClass('reduce-length')
    $('.trans-grow').removeClass('grow-length')
    $('.heading-one').removeClass('appear-from-right')
    $('.heading-two').addClass('appear-from-left')
  })

  $('.number.two').on('mouseover',function(){
    $('.inner.two').css('visibility','visible')
    $('.inner.main').css('visibility','hidden')
    $('.inner.one').css('visibility','hidden')
    $('.inner.three').css('visibility','hidden')
    $('.trans-grow').addClass('reduce-length')
    $('.trans-grow').removeClass('grow-length')
    $('.heading-one').removeClass('appear-from-right')
    $('.heading-two').addClass('appear-from-left')
  })

  $('.number.three').on('mouseover',function(){
    $('.inner.three').css('visibility','visible')
    $('.inner.main').css('visibility','hidden')
    $('.inner.one').css('visibility','hidden')
    $('.inner.two').css('visibility','hidden')
    $('.trans-grow').addClass('reduce-length')
    $('.trans-grow').removeClass('grow-length')
    $('.heading-one').removeClass('appear-from-right')
    $('.heading-two').addClass('appear-from-left')
  })
})
