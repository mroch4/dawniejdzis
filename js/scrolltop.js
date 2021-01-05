jQuery(document).ready(function () {
  $("#backToTop").append('<a class="backToTop" href="javascript:void(null);" style="display: none;"><i class="fa fa-angle-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>');
  var $window = $(window);
  var distance = 600;
  $window.scroll(function () {
    if ($window.scrollTop() >= distance) {
      $(".backToTop").fadeIn();
    } else {
      $(".backToTop").fadeOut();
    }
  });

  $('.backToTop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
})