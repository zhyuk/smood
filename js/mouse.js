//메뉴 이동
$("#home").click(function () {
    $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 800);
});
$("#planning").click(function () {
    $('html, body').animate({
        scrollTop: $("#economy").offset().top
    }, 800);
});
$("#design").click(function () {
    $('html, body').animate({
        scrollTop: $("#service1").offset().top
    }, 800);
});
$("#contact").click(function () {
    $('html, body').animate({
        scrollTop: $("#profile").offset().top
    }, 800);
});

// 마우스
var element = document.getElementById("your-element-id");

element.addEventListener("mouseenter", function () {
    element.classList.add("custom-cursor");
});

element.addEventListener("mouseleave", function () {
    element.classList.remove("custom-cursor");
});