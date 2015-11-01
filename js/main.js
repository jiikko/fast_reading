function fire() {
  var startTime = new Date();
  var segmenter = new TinySegmenter();
  var textarea = $("#input");
  var showcase = $("#showcase");
  var now = $("#now");
  var segs = segmenter.segment(textarea.val());
  segs.push(null);

  var time = 0;
  $.each(segs, function(i, seg){
    time = (i * 100);
    setTimeout(function(current_time){
      return function() {
        showcase.text(seg);
        now.css("width", current_time / time * 100 + '%')
        if(seg === null) {
          var endTime = new Date();
          $("#time").text((endTime - startTime)/1000 + '秒');
          showcase.text("糸冬わり");
        }
      }
    }(time), time);
  });
}
