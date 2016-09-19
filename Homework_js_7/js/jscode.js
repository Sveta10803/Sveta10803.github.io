var $elem = jQuery.noConflict();
$(document).ready(function() {
  $elem(document).ready(function() {

$elem('ul.tab li').css('cursor', 'pointer');

$elem('ul.tab li').click(function(){
  var thisClass = this.className.slice(0,2);
  $elem('div.t1').hide();
  $elem('div.t2').hide();
  $elem('div.t3').hide();
  $elem('div.' + thisClass).show();
  $elem('ul.tab li').removeClass('current');
  $elem(this).addClass('current');
  });

});
}
