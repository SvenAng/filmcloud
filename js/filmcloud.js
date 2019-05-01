/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.exampleBehavior = {
    attach: function (context, settings) {
//        console.log("I'm alive!");
        // Mobilmenu
        jQuery(".c-hamburger").click(function(){
            jQuery('#main-navigation').toggleClass('open');
            jQuery('header').toggleClass('open');
            jQuery('.c-hamburger').toggleClass('is-active');
        });
//        Sökblocket
        var myvar
        myvar = 0;
        jQuery(".search-button").click(function(){ 
            jQuery('.search-block-wrapper').slideDown();
//            jQuery('header').slideDown();
//            return false;
            if(myvar == 0){
//                setTimeout(tajmer, 10000);
                myvar=1;
               }else{
                   jQuery('.search-block-wrapper').slideUp();
                   myvar=0;
               }
            
        });
        // timer
        function tajmer(){
            jQuery('.search-block-wrapper').slideUp();
            myvar=0;
//            console.log(myvar);
        }
        //Ifall man vill stänga ner blocket
        jQuery(document).bind('mousemove', function() {
//            setTimeout(tajmer, 0);
        });
        // Scroll topp
        jQuery(".scroll-top").click(function() {
            jQuery("html, body").animate({scrollTop: 0 }, "slow");
            return false;

        });

        var offset = 120;
        var duration = 500;

        jQuery('.scroll-top').hide();

        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.scroll-top').fadeIn(duration);
            } else {
                jQuery('.scroll-top').fadeOut(duration);
            }
        });
        
        
    }
  };

})(jQuery, Drupal);
