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

});

// service1 영역 
window.onscroll = function () {
    // console.log(window.scrollY);
    progressBar();

    //     // service1 영역 타이틀,캐릭터 등장 및 제거
    //     if (window.scrollY > 11800) {
    //         $("#service1 .title_box").addClass("active");
    //         $("#service1 .main_box").addClass("active");
    //         // document.querySelector("#service1 .title_box").classList.add("active");
    //         // document.querySelector("#service1 .main_box").classList.add("active");
    //     } else {
    //         $("#service1 .title_box").removeClass("active");
    //         $("#service1 .main_box").removeClass("active");
    //         // document.querySelector("#service1 .title_box").classList.remove("active");
    //         // document.querySelector("#service1 .main_box").classList.remove("active");
    //     }
    //     // service1 영역 첫번째 이미지 등장 및 제거
    //     if (window.scrollY > 125200) {
    //         $("#service1 .img_box .img1").addClass("active");
    //         $("#service1 .img_box .img2").addClass("active");
    //         $("#service1 .img_box .img3").addClass("active");
    //         $("#service1 .img_box .img4").addClass("active");
    //     } else {
    //         $("#service1 .img_box .img1").removeClass("active");
    //         $("#service1 .img_box .img2").removeClass("active");
    //         $("#service1 .img_box .img3").removeClass("active");
    //         $("#service1 .img_box .img4").removeClass("active");
    //     }
    //     // service1 영역 오른쪽 타이틀, 캐릭터 등장 및 제거
    //     if (window.scrollY > 12700) {
    //         $("#service1 .right .title_box").addClass("active");
    //         $("#service1 .right .main_box").addClass("active");
    //         // document.querySelector("#service1 .right .title_box").classList.add("active");
    //         // document.querySelector("#service1 .right .main_box").classList.add("active");
    //     } else {
    //         $("#service1 .right .title_box").removeClass("active");
    //         $("#service1 .right .main_box").removeClass("active");
    //         // document.querySelector("#service1 .right .title_box").classList.remove("active");
    //         // document.querySelector("#service1 .right .main_box").classList.remove("active");
    //     }

    //     if (window.scrollY > 15390) {
    //         $("#service1 .img_box .img5").addClass("active");
    //         $("#service1 .img_box .img6").addClass("active");
    //         $("#service1 .img_box .img7").addClass("active");
    //     } else {
    //         $("#service1 .img_box .img5").removeClass("active");
    //         $("#service1 .img_box .img6").removeClass("active");
    //         $("#service1 .img_box .img7").removeClass("active");
    //     }

    //     if (window.scrollY > 16025) {
    //         $("#service2 .title_box").addClass("active");
    //         $("#service2 .main_box").addClass("active");
    //     } else {
    //         $("#service2 .title_box").removeClass("active");
    //         $("#service2 .main_box").removeClass("active");
    //     }

    //     if (window.scrollY > 16730) {
    //         $("#service2 .img2").addClass("active");
    //     } else {
    //         $("#service2 .img2").removeClass("active");
    //     }
    //     if (window.scrollY > 16900) {
    //         $("#service2 .line1").addClass("active");
    //         $("#service2 .line2").addClass("active");
    //         $("#service2 .text1").addClass("active");
    //     } else {
    //         $("#service2 .line1").removeClass("active");
    //         $("#service2 .line2").removeClass("active");
    //         $("#service2 .text1").removeClass("active");
    //     }
    //     if (window.scrollY > 17220) {
    //         $("#service2 .img3").addClass("active");
    //         $("#service2 .line3").addClass("active");
    //         $("#service2 .text2").addClass("active");
    //         $("#service2 .line4").addClass("active");
    //     } else {
    //         $("#service2 .img3").removeClass("active");
    //         $("#service2 .line3").removeClass("active");
    //         $("#service2 .text2").removeClass("active");
    //         $("#service2 .line4").removeClass("active");
    //     }

    //     if (window.scrollY > 17845) {
    //         $("#service2 .line5").addClass("active");
    //         $("#service2 .img4").addClass("active");
    //         $("#service2 .img5").addClass("active");
    //         $("#service2 .line6").addClass("active");
    //         $("#service2 .text3").addClass("active");
    //     } else {
    //         $("#service2 .line5").removeClass("active");
    //         $("#service2 .img4").removeClass("active");
    //         $("#service2 .img5").removeClass("active");
    //         $("#service2 .line6").removeClass("active");
    //         $("#service2 .text3").removeClass("active");
    //     }

    //     if (window.scrollY > 19125) {
    //         $("#service3 .title_box").addClass("active");
    //         $("#service3 .main_box").addClass("active");
    //     } else {
    //         $("#service3 .title_box").removeClass("active");
    //         $("#service3 .main_box").removeClass("active");
    //     }

    //     if (window.scrollY > 19515) {
    //         $("#service3 .img1").addClass("active");
    //         $("#service3 .img2").addClass("active");
    //         $("#service3 .img3").addClass("active");
    //         $("#service3 .line7").addClass("active");
    //         $("#service3 .line8").addClass("active");
    //         $("#service3 .text1").addClass("active");
    //         $("#service3 .text2").addClass("active");
    //     } else {
    //         $("#service3 .img1").removeClass("active");
    //         $("#service3 .img2").removeClass("active");
    //         $("#service3 .img3").removeClass("active");
    //         $("#service3 .line7").removeClass("active");
    //         $("#service3 .line8").removeClass("active");
    //         $("#service3 .text1").removeClass("active");
    //         $("#service3 .text2").removeClass("active");
    //     }

    //     if (window.scrollY > 20380) {
    //         $("#service3 .right .title_box").addClass("active");
    //         $("#service3 .right .main_box").addClass("active");
    //     } else {
    //         $("#service3 .right .title_box").removeClass("active");
    //         $("#service3 .right .main_box").removeClass("active");
    //     }

    //     if (window.scrollY > 20930) {
    //         $("#service3 .main_img").addClass("active");
    //         $("#service3 .function_img").addClass("active");
    //     } else {
    //         $("#service3 .main_img").removeClass("active");
    //         $("#service3 .function_img").removeClass("active");
    //     }

    //     if (window.scrollY > 21300) {
    //         $("#service3 .line9").addClass("active");
    //         $("#service3 .text3").addClass("active");
    //     } else {
    //         $("#service3 .line9").removeClass("active");
    //         $("#service3 .text3").removeClass("active");
    //     }
    //     if (window.scrollY > 21850) {
    //         $("#service4 .bg_box").addClass("active");
    //         $("#service4 .title_box").addClass("active");
    //         $("#service4 .main_box").addClass("active");
    //     } else {
    //         $("#service4 .bg_box").removeClass("active");
    //         $("#service4 .title_box").removeClass("active");
    //         $("#service4 .main_box").removeClass("active");
    //     }

    //     if (window.scrollY > 23135) {
    //         $("#service4 .bg_box_right").addClass("active");
    //         $("#service4 .title_box.right").addClass("active");
    //         $("#service4 .main_box.right").addClass("active");
    //     } else {
    //         $("#service4 .bg_box_right").removeClass("active");
    //         $("#service4 .title_box.right").removeClass("active");
    //         $("#service4 .main_box.right").removeClass("active");
    //     }

    //     if (window.scrollY > 22295) {
    //         $("#service4 .img").addClass("active");
    //         $("#service4 .line10").addClass("active");
    //         $("#service4 .line11").addClass("active");
    //     } else {
    //         $("#service4 .img").removeClass("active");
    //         $("#service4 .line10").removeClass("active");
    //         $("#service4 .line11").removeClass("active");
    //     }

    //     if (window.scrollY > 23900) {
    //         $("#service4 .container2-img").addClass("active");
    //         $("#service4 .mockup-img").addClass("active");
    //         $("#service4 .line12").addClass("active");
    //         $("#service4 .mockup-fnc").addClass("active");
    //         $("#service4 .line13").addClass("active");
    //         $("#service4 .img6").addClass("active");
    //     } else {
    //         $("#service4 .container2-img").removeClass("active");
    //         $("#service4 .mockup-img").removeClass("active");
    //         $("#service4 .line12").removeClass("active");
    //         $("#service4 .mockup-fnc").removeClass("active");
    //         $("#service4 .line13").removeClass("active");
    //         $("#service4 .img6").removeClass("active");
    //     }

    //     if (window.scrollY > 25565) {
    //         $("#service5 .circle").addClass("active");
    //     } else {
    //         $("#service5 .circle").removeClass("active");
    //     }
    // }

    function progressBar() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementsByClassName("progress-bar")[0].style.width = scrolled + "%";
    }
}