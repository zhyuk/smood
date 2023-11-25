//메뉴 이동
$("#logo").click(function () {
    $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 800);
});
$(".plan-nav").click(function () {
    $('html, body').animate({
        scrollTop: $("#economy").offset().top
    }, 800);
});
$(".design-nav").click(function () {
    $('html, body').animate({
        scrollTop: $("#service1").offset().top
    }, 800);
});
$(".contact-nav").click(function () {
    $('html, body').animate({
        scrollTop: $("#profile").offset().top
    }, 800);
});

// 마우스
// var element = document.getElementById("my-element-id");

// element.addEventListener("mouseenter", function () {
//     element.classList.add("custom-cursor");
// });

// element.addEventListener("mouseleave", function () {
//     element.classList.remove("custom-cursor");
// });