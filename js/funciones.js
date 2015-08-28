$(document).ready(function(){
    
    
    //menu pegajoso
    var altura = $('.navegacion').offset().top;    
    $(window).on('scroll', function(){
        if($(window).scrollTop() > altura){
            $('.navegacion').addClass('fixed');
        }else{
            $('.navegacion').removeClass('fixed');
        }
    });
    //menu pegajoso
    
    
    
    //scroll top
    $('.goTop').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        });
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('.goTop').slideDown(300);
        }else{
            $('.goTop').slideUp(300);
        }
    });
    //scroll top
    
    
    //slide de imagenes
     $(function(){
          $(".slides").slidesjs({
            play: {
              active: true,
              effect: "slide",
              interval: 5000,
              auto: true,
              swap: true,
              pauseOnHover: false,
              restartDelay: 2000
            }
          });
      });
    //slide de imagenes
    
    //menu responsive
    function toggleMobileMenu(){
		var $mobileMenu = $('#mobile-main-menu');	
		$mobileMenu.slideToggle('fast');
	}
		$('#mobile-menu-button').on('click', toggleMobileMenu);
        $('.mobile-main-menu-item').on('click', toggleMobileMenu);
    //menu responsive
});