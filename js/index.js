$(document).ready(function(){
    const src = $("#story-page").attr("src");
    $(".close-card").click(function (e) { 
        $("#story-page").attr("src", src);
    });
});