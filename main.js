window.onload = function() {
  content = document.getElementById('slideshow');
  document.getElementById('input').addEventListener('change', function(evt) {
    var f = evt.target.files[0];
    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
	      var contents = e.target.result;
        makeSlideShow(contents);
      }
      r.readAsText(f);;
    }
  }, false);
};
