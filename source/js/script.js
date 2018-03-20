$(document).ready(function(e) {
  if ($().rwdImageMaps) {
    $('img[usemap]').rwdImageMaps();
    var maphilight = function() {
      $('img[usemap]').maphilight({
        fillOpacity: 0.05,
        strokeColor: '#00f',
      });
    }
    $(document).on('ready', maphilight);
    $(window).on('resize', maphilight);
  }
});
