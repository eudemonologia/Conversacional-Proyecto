var $tele = $("#television");
var $autoplay = $("#hover-video");

$tele.on("mouseenter", function () {
  $autoplay.get(0).play();
});

$tele.on("mouseout", function () {
  $autoplay.get(0).pause();
});

var $audio = $("#old-radio");
var $autoplayradio = $("#celestino");

$audio.on("mouseenter", function () {
  $autoplayradio.get(0).play();
});

$audio.on("mouseout", function () {
  $autoplayradio.get(0).pause();
});
