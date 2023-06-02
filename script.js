$(document).ready(function() {

   
    // *** ANIMATIONS *** //   
    
       
    //scrollNav function to smooth scroll from nav buttons to content
    function scrollNav() {
      $('.nav a').click(function(){  
        //Toggle Class
        $(".active").removeClass("active");      
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.'+theClass).parent('li').addClass('active');
        //Animate
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top}, 400);
        return false;
      });
     $('.scrollTop a').scrollTop();
    }
    scrollNav();
    //scrollNav end
    
       
    //OLDtitle flyIn animation start
    //$(function() {
    //   setTimeout(function() {
    //      $(".flyInText").removeClass("hidemeTitle")
    //   }, 500);
    //});
    //OLDtitle expand animation end
    
    //title slideDown animation start
    $("#titleText1").css('display', 'none').slideDown(1000);
    $("#titleText2").fadeIn(2000).removeClass('hidden');
    $("#hrTitle").fadeIn(2000).removeClass('hidden');
    
    //title slideDown animation end
    
    //title social buttons fadeIn animation start
    $("#socialButton1").fadeIn(3000).removeClass('hidden');
    $("#socialButton2").fadeIn(3000).removeClass('hidden');
    $("#socialButton3").fadeIn(3000).removeClass('hidden');
    //title social buttons flyin animation end
       
       
       
    //FadeIn Portfolio Items animation
       $(window).scroll(function() {
     
          $('.hidemePortfolio').each(function(i){
                
             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
             var bottom_of_window = $(window).scrollTop() + $(window).height();
                
             /* If the object is completely visible in the window, fade it in */
             if( bottom_of_window > bottom_of_object ){   
                 $(this).animate({'opacity':'1'},1000);
             }
          });
          
       });
    
    // Zoom img on hover function start   
       $('.imgZoom').hover(function() {
            $(this).addClass('transition');
     
        }, function() {
            $(this).removeClass('transition');
        });
    
    // Zoom img on hover function end      
      
    }); //document.ready end