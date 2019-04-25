//初始化网页跑马灯和轮播图片的特效
$(document).ready(function () {
    var i = 1;
    setInterval(function () {
        i++;
        if (i > 2) {
            i = 1;
        }
        $("#test_Pic>img").attr("src", "img/" + i + ".png").fadeIn(1000);
    }, 500);

    var mySwiper = new Swiper('#swiper-container1', {

        direction: 'horizontal', //水平切换
        loop: true, //循环播放
        autoplay: true, //自动播放
        speed: 2000, //速度

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    //翻转效果
    var mySwiper2 = new Swiper('#swiper-container2', {
        //simulateTouch: true,
        effect: 'flip',
        flipEffect: {
            slideShadows: true,
            limitRotation: true,
        }
    })

    $("#swiper-container2").hover(function () {
        //alert(1);
        mySwiper2.slideNext();
    }, function () {
        //alert(2);
        mySwiper2.slidePrev();
    });



    //导航窗格激活效果
    $('.nav.navbar-nav>li').hover(function () {
        //alert(0);
        $(this).addClass('active');
    }, function () {
        //alert(1);
        $(this).removeClass('active');
    });


    /*
    $('.test').hover(function () {
            $(".test").fadeOut('slow').addClass('vpr-elements-dis');
            $(".test1").removeClass('vpr-elements-dis').slideUp('slow').css('display', "");
        },
        function () {
            $('.test1').hover(function () {
                return 0;
            }, function () {
                $(".test").removeClass('vpr-elements-dis').slideDown('slow').css('display', "");
                $(".test1").fadeOut('slow').addClass('vpr-elements-dis');
                //alert(0);
            })

            //return 0;
            //$(".test1").slideDown("1500").addClass('vpr-elements-dis');
            //$(".test").fadeIn('slow').removeClass('vpr-elements-dis');
            
            if (j == 1) {
                $(".test").slideDown('slow').removeClass('vpr-elements-dis');
                $(".test1").slideDown("1500").addClass('vpr-elements-dis');
                j = 0;
                alert(j)
            }
            
        });

  
    $('.test1').hover(function () {
            //return 0;
            $('.test').removeClass('vpr-elements-dis');
            $('.test1').slideDown(1500).addClass('vpr-elements-dis');
        },
        function () {

        });
       
    $('.test1').hover(function () {
            //return 0;
            $('.test').removeClass('vpr-elements-dis');
            $('.test1').slideDown(1500).addClass('vpr-elements-dis');
        },
        function () {

        });
        */
})