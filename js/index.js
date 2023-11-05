// service1 영역 
window.onscroll = function () {
    console.log(window.scrollY);

    // service1 영역 타이틀,캐릭터 등장 및 제거
    if (window.scrollY > 13600) {
        $("#service1 .title_box").addClass("active");
        $("#service1 .main_box").addClass("active");
        // document.querySelector("#service1 .title_box").classList.add("active");
        // document.querySelector("#service1 .main_box").classList.add("active");
    } else {
        $("#service1 .title_box").removeClass("active");
        $("#service1 .main_box").removeClass("active");
        // document.querySelector("#service1 .title_box").classList.remove("active");
        // document.querySelector("#service1 .main_box").classList.remove("active");
    }

    // service1 영역 첫번째 이미지 등장
    if (window.scrollY > 13900) {
        $("#service1 .img_box").addClass("active");
    } else {
        $("#service1 .img_box").removeClass("active");
    }

    if (window.scrollY > 15030) {
        $("#service1 .right .img_box").addClass("active");
    } else {
        $("#service1 .right .img_box").removeClass("active");
    }
    if (window.scrollY > 14780) {
        document.querySelector("#service1 .right .title_box").classList.add("active");
        document.querySelector("#service1 .right .main_box").classList.add("active");
    } else {
        document.querySelector("#service1 .right .title_box").classList.remove("active");
        document.querySelector("#service1 .right .main_box").classList.remove("active");
    }

    if (window.scrollY > 15920) {
        $("#service2 .title_box").addClass("active");
        $("#service2 .main_box").addClass("active");
    } else {
        $("#service2 .title_box").removeClass("active");
        $("#service2 .main_box").removeClass("active");
    }
    if (window.scrollY > 16550) {
        $("#service2 .line1").addClass("active");
    } else {
        $("#service2 .line1").removeClass("active");
    }
    if (window.scrollY > 19000) {
        $("#service3 .title_box").addClass("active");
        $("#service3 .main_box").addClass("active");
    } else {
        $("#service3 .title_box").removeClass("active");
        $("#service3 .main_box").removeClass("active");
    }

    if (window.scrollY > 20300) {
        $("#service3 .right .title_box").addClass("active");
        $("#service3 .right .main_box").addClass("active");
    } else {
        $("#service3 .right .title_box").removeClass("active");
        $("#service3 .right .main_box").removeClass("active");
    }

    if (window.scrollY > 21765) {
        $("#service4 .bg_box").addClass("active");
    } else {
        $("#service4 .bg_box").removeClass("active");
    }
}




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