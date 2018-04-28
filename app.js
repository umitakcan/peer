window.sr = ScrollReveal();
 sr.reveal('.foo');
 sr.reveal('.bar');
 sr.reveal('.foo', { duration: 1500 });
 sr.reveal('.foo', { opacity: 0.8 });


$(document).ready(function(){
  
  $(function(){
    
    $('.main-title-container .slides:gt(0)').hide();
    setInterval(function(){
      $('.main-title-container :first-child').fadeOut(2000).next('.slides').fadeIn(2000)
      .end().appendTo('.main-title-container');
  }, 5000);
    
  });
  
});


$(document).ready(function(){
  
  $(function(){
    
    $('.main-title-container-2 .slider:gt(0)').hide();
    setInterval(function(){
      $('.main-title-container-2 :first-child').fadeOut(2000).next('.slider').fadeIn(2000)
      .end().appendTo('.main-title-container-2');
  }, 5000);
    
  });
  
});