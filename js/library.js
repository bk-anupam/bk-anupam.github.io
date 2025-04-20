$(document).ready(function(){
  
  // Initialize animations
  init_document_ready();

  // Add smooth scroll effect
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
  });

  // Fade in elements on scroll
  $(window).scroll(function() {
    $('.blurb').each(function() {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({'opacity':'1'}, 500);
      }
    });
  });

});

// - - - - - - - - - - - - - - - - - - - - - - - - - 
/* - - - - - - - - - - - - - - - - - - - - - - - - -
 * Anything that should be run as soon as DOM is 
 * loaded.
 * - - - - - - - - - - - - - - - - - - - - - - - - -
 */
 
function init_document_ready() {
  // Initialize any existing functions
  create_colorSwatch();
  
  // Add hover effect to navigation
  $('.nav-item').hover(
    function() {
      $(this).find('i').addClass('fa-bounce');
    },
    function() {
      $(this).find('i').removeClass('fa-bounce');
    }
  );

  // // Add text animation to quote scroll
  // $('.scrolling-text').css({
  //   'animation': 'scroll-left 20s linear infinite',
  //   'white-space': 'nowrap'
  // });

  // Add fade-in effect for blurb content
  $('.blurb').css('opacity', '0').animate({
    'opacity': '1'
  }, 1000);
}

// - - - - - - - - - - - - - - - - - - - - - - - - -
// for each li.color, grab the hex color value in the item and set is at the background-color 

function create_colorSwatch() {

  $( "li.color" ).each(function() {
    
    var color = $( this ).text();
    $( this ).css( "background-color" , color );
    
    //if the single swatch color is too dark, use a lighter font color to display the hex color value
    
    var c = color.substring(1);      // strip #
    var rgb = parseInt(c, 16);   // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff;  // extract red
    var g = (rgb >>  8) & 0xff;  // extract green
    var b = (rgb >>  0) & 0xff;  // extract blue

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    if (luma < 85) {
      $( this ).css( "color" , "#f0f0f0" );
    }
    
  });

}

// - - - - - - - - - - - - - - - - - - - - - - - - -


