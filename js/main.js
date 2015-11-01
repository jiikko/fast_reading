function fire() {
  var segmenter = new TinySegmenter();

  var textarea = $("#input");
  var showcase = $("#showcase");
  var now = $("#now");
  var segs = segmenter.segment(textarea.val());
  segs.push("f");

  var time = 0;
  $.each(segs, function(i, seg){
    time = (i * 100);
    setTimeout(function(current_time){
      return function() {
        showcase.text(seg);
        now.css("width", current_time / time * 100 + '%')
      }
    }(time), time);
  });
}
