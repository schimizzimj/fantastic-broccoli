var a = function parallax_resize() {

  var h = $(window).height();
  var hString = h + "px";

  $("section.module.parallax").css({"height": hString});
};

$(a);
$(window).resize(a);
