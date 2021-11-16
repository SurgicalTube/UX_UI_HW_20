$('.button-link').click(function() {
    var getElement = $(this).attr('button');
    if ($(getElement).length) {
        var getOffset = $(getElement).offset().top;
        $('html, body').animate({
            scrollTop: getOffset -50
        }, 500);
    }
});

$(document).ready(function() {
    $(".button-link").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
          }, 500);
      });
  });



