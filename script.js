$(function() {
    $("body").after("<p></p>");
    $("p").text("hola ");
    $("p").after("<button></button>");
    $("button").text("enviar");
    $("p").addClass("red");
    $("button").addClass("red");
    $("button").on("click",function(){
        $("p").append("Lalo ");
    });
});