var a = function () {
    var b = $(window).scrollTop();
    var d = $("#scroller-anchor").offset().top;
    var f = $("#footer").offset().top;
    var c = $("#scroller");
    var h = $("#scroller").height() + 50; // margin

    if (b > d) {
        var myTop = $(window).scrollTop();
        if (myTop > f - h) myTop = f - h;
        c.css({
            position: "absolute",
            top: myTop,
            bottom: ""
        })
    } else {
        if (b <= d) {
            c.css({
                position: "absolute",
                top: "",
                bottom: ""
            })
        }
    }
};
$(window).scroll(a);
