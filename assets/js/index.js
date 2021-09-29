$(document).ready(function () {
    $("a").click(function (event) {
        event.prevenDefault();
        var gato = this.hash;
        $("html").animate({
            scrolltop: $(gato).offset().top,
        }, 
        1000
        );
    });
});

$('[data-toggle="tooltip"]').tooltip()
$('[data-toggle="popover"]').popover()