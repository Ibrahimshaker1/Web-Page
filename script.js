$(".shoes_act_1").click(function(){
    $(".large_shoes_act").attr("src", "shoes_two_image.png")
})
$(".shoes_act_2").click(function(){
    $(".large_shoes_act").attr("src", "shoes_three_image.png")
})
$(".shoes_act_3").click(function(){
    $(".large_shoes_act").attr("src", "shoes_four_image.png")
})
$(".shoes_act_4").click(function(){
    $(".large_shoes_act").attr("src", "shoes_five_image.png")
})
var css = {
    "width": "100px",
    "height": "120px"
}
var newcss = {
    "width": "120px",
    "height": "140px"
}
$(".pro_img").on("mouseenter",function(){
    $(this).css(newcss)
})
$(".pro_img").on("mouseout",function(){
    $(this).css(css)
})

