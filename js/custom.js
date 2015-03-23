/**
 * Created by prima on 22.03.2015.
 */

$('.toggle div a').click(function(e) {
  var $this = $(this);
  if (!$this.hasClass('active')) {
    $this.addClass('active');
  } else {
    $this.removeClass('active');
  }
  e.preventDefault();
});