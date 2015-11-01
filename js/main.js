function fire() {
  var segmenter = new TinySegmenter();

  var textarea = $("#input");
  var showcase = $("#showcase");
  var segs = segmenter.segment(textarea.val());
  segs.push("f");

  var time = 0
  $.each(segs, function(i, seg){
    time = i * 100
      console.log(time);
    setTimeout(function(){
      showcase.text(seg);
//      console.log(seg);
    }, time);
  });
}
