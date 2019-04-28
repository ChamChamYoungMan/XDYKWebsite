//初始化网页跑马灯和轮播图片的特效
$(document).ready(function () {
    var i = 1;
    setInterval(function () {
        i++;
        if (i > 2) {
            i = 1;
        }
        $("#test_Pic>img")
            .attr("src", "img/" + i + ".png")
            .fadeIn(1000);
    }, 500);
    var mySwiper = new Swiper("#swiper-container1", {
        direction: "horizontal", //水平切换
        loop: true, //循环播放
        autoplay: true, //自动播放
        speed: 2000, //速度

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
    ////翻转效果
    var mySwipers = [];
    var swiperContainers = [
        "swiper-container2",
        "swiper-container3",
        "swiper-container4",
        "swiper-container5"
    ];
    $.each(swiperContainers, function (i, item) {
        mySwipers[i] = new Swiper("#" + item, {
            direction: "vertical"
        });
        $("#" + item).hover(
            function () {
                mySwipers[i].slideNext();
            },
            function () {
                mySwipers[i].slidePrev();
            }
        );
    });

    //滑动效果展示产品
    var mySwiper_production = new Swiper('#swiper-container7', {
        direction: "horizontal",
        initialSlide: 3,
        //effect: "coverflow",
        slidesPerView: 3,
        //spaceBetween: 30,
        centeredSlides: true,
        /*
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        */
        loop: true,
        navigation: {
            nextEl: ".product_Next",
            prevEl: ".product_Prev"
        },
    });

    $("#swiper-container7").hover(function () {
        $(".product_Next").removeClass("vpr-elements-dis");
        $(".product_Prev").removeClass("vpr-elements-dis");
    }, function () {
        $(".product_Next").addClass("vpr-elements-dis");
        $(".product_Prev").addClass("vpr-elements-dis");
    });

    //导航窗格激活效果
    $(".nav.navbar-nav>li").hover(
        function () {
            $(this).addClass("active");
        },
        function () {
            $(this).removeClass("active");
        }
    );


});