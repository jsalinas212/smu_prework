$("#growButton").on("click", function() {
    $("#box").animate({height:"+=35px", width:"+=35px"}, "fast")
})

$("#blueButton").on("click", function() {
    $("#box").css("background", "none")
    $("#box").css("background-color", "blue")
})

$("#redButton").on("click", function() {
    $("#box").css("background", "none")
	$("#box").css("background-color", "red")
})

$("#fadeButton").on("click", function() {
    $("#box").css("background", "-webkit-linear-gradient(red, yellow)")
})

$("#resetButton").on("click", function() {
    $("#box").css("background", "none")
    $("#box").css("background-color", "orange")
    $("#box").animate({height:"150px", width:"150px"}, "fast")
})

$("#spinButton").on("click", function() {
    $("#box").css("transition", "all ease .5s")
    $("#box").css("transform", "rotate(360deg)")
})