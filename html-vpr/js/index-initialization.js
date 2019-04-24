//初始化网页跑马灯和轮播图片的特效
$(document).ready(function() {
    var i = 1;
    setInterval(function() {
        i++;
        if (i > 2) { i = 1; }
        $("#test_Pic>img").attr("src", "img/" + i + ".png").fadeIn(1000);
    }, 500);

    var mySwiper = new Swiper('.swiper-container', {

        direction: 'horizontal', //水平切换
        loop: true, //循环播放
        autoplay: true, //自动播放
        speed: 2000, //速度

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
})