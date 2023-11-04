$(function () {
    // ScrollTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    // 버튼 클릭 시 화면 맨 위로 스크롤하는 이벤트 핸들러
    var button = document.getElementById('ScrollTop');
    button.addEventListener('click', scrollToTop);

    // service5 btn 클릭 시 변경되는 코드
    $("div.top").click(function () {
        $("div.btn").removeClass("active");
        $("div.text").removeClass("active");
        $(".mockup").removeClass("active");
        $(".text-top").addClass("active");
        $(".mockup-top").addClass("active");
        $(this).addClass("active");
    })

    $("div.left").click(function () {
        $("div.btn").removeClass("active");
        $("div.text").removeClass("active");
        $(".mockup").removeClass("active");
        $(".text-left").addClass("active");
        $(".mockup-left").addClass("active");
        $(this).addClass("active");
    })

    $("div.bottom").click(function () {
        $("div.btn").removeClass("active");
        $("div.text").removeClass("active");
        $(".mockup").removeClass("active");
        $(".text-bottom").addClass("active");
        $(".mockup-bottom").addClass("active");
        $(this).addClass("active");
    })

    $("div.right").click(function () {
        $("div.btn").removeClass("active");
        $("div.text").removeClass("active");
        $(".mockup").removeClass("active");
        $(".text-right").addClass("active");
        $(".mockup-right").addClass("active");
        $(this).addClass("active");
    })
})