$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'zoom-in-sm',
    outClass: 'zoom-out-sm',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
  $(".header").sticky({
    topSpacing:0,
    getWidthFrom: '.container',
    responsiveWidth: true
    });
  $(".header").on('sticky-start', function () {
    $(".header").css({"background": "#00A7E1", "transition": "3s"});
    $('.active').css({"border": "1", "border-style": "solid",
    "border-style": "solid", "border-color": "#003459","color": "#003459",
     "transition": "3s"});
    $(".sectionContact").css({"background": "#003459", 
                              "font-color": "#FFFFFF",
                              "transition": "3s"
                             });
  });
   $(".header").on('sticky-end', function () {
    $(".header").css({"background": "#00A7E1#003459", "transition": "3s"});
    $('.active').css({"border": "1", "border-style": "solid",
    "border-style": "solid", "border-color": "#00A7E1","color": "#00A7E1",
     "transition": "3s"});
       $(".sectionContact").css({"background": "#FFFFFF", 
                              "color": "#CECECE",
                              "transition": "3s"
                             });
  });
  $(".sectionContact").sticky({topSpacing:60});
    
     $('.caroucel').slick({
    autoplay: true,
    fade: true,
    dots: true,
    arrows: false
  });

});

//  $(document).ready(function(){
//     $(".header").sticky({topSpacing:0});
//   });

//  $(document).ready(function(){
//     $(".sectionContact").sticky({topSpacing:0});
//   });