import '../css/base.css'
import '../css/global.css'
import '../css/swiper.css'

window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical'
    });
    document.querySelector('#media').play();
    //页面加载就绪
    document.getElementById("loadBefore").style.display = 'none';
    //返回首页
    document.querySelector('.back').addEventListener('touchstart',function (ev) {
        swiper.slideTo(0);
    });
    //音乐事件
    document.querySelector('#music').addEventListener('touchstart',function () {
        var  isPlay= this.getAttribute('isPlay')=='true';
        if(isPlay){

            this.setAttribute('isPlay','false');
            this.classList.remove('rotate');
            this.classList.remove('music01');
            this.classList.add('music02');
            document.querySelector('#media').pause();
        }else{
            this.setAttribute('isPlay','true');
            this.classList.add('rotate');
            this.classList.remove('music02');
            this.classList.add('music01');
            document.querySelector('#media').play();
        }
    });
    function getTaxNew(money,other)
    {

        var income = parseFloat(money);
        if(isNaN(income)) {
            alert("无效的收入金额");
            return;
        }

        var insure = parseFloat(other);
        if(isNaN(insure)) {
            alert("无效的各项社会保险费金额");
            return;
        }

        var baseLine=3500;

        var taxableIncome = income - insure - baseLine;
        if(taxableIncome <=0){
            alert("您无需缴纳个人所得税!");
            return;
        }

        var R,Q;
        var A=taxableIncome;
        A=A.toFixed(2);
        if(A<=1500){R=0.03;Q=0;}
        else if(A>1500 && A<=4500){R=0.1;Q=105}
        else if(A>4500 && A<=9000){R=0.2;Q=555}
        else if(A>9000 && A<=35000){R=0.25;Q=1005}
        else if(A>35000 && A<=55000){R=0.3;Q=2755}
        else if(A>55000 && A<=80000){R=0.35;Q=5505}
        else{R=0.45;Q=13505;}
        var tax=taxableIncome * R -Q;
        var realIncome=income - insure - tax;

        return new Number(tax.toFixed(4)).toFixed(2);
    }


    //查看弹窗
    //p1
    document.querySelector('.swiper-slide1 .f,.swiper-slide1 .g').addEventListener('click',function () {
        document.querySelector('.slide1Wrap').classList.add('animatePop');
        document.querySelector('.slide1-h').classList.remove('none');
        document.querySelector('.swiper-container').classList.add('swiper-no-swiping');
    });
    document.querySelector('.slide1-h').addEventListener('click',function () {
        document.querySelector('.slide1-h').classList.add('none');
        document.querySelector('.slide1Wrap').classList.remove('animatePop');
        document.querySelector('.slide1-i').classList.remove('none');
        setTimeout(function () {
            document.querySelector('.swiper-container').classList.remove('swiper-no-swiping');
            document.querySelector('.slide1-i').classList.add('none');
        },3000);
    });
    //p2
    document.querySelector('.swiper-slide2 .f,.swiper-slide2 .g').addEventListener('click',function () {
        document.querySelector('.slide2-h').classList.remove('none');
        document.querySelector('.slide2Wrap').classList.add('animatePop');
        document.querySelector('.swiper-container').classList.add('swiper-no-swiping');

    });
    document.querySelector('.slide2-h').addEventListener('click',function () {
        document.querySelector('.slide2-h').classList.add('none');
        document.querySelector('.slide2Wrap').classList.remove('animatePop');
        document.querySelector('.slide2-i').classList.remove('none');
    });
    document.querySelector('.slide2-i').addEventListener('click',function () {
        document.querySelector('.slide2-i').classList.add('none');
        document.querySelector('.swiper-container').classList.remove('swiper-no-swiping');
    });


    document.querySelector('.swiper-slide3 .f,.swiper-slide3 .g').addEventListener('click',function () {
        document.querySelector('.slide3-h').classList.remove('none');
        document.querySelector('.slide3Wrap').classList.add('animatePop');
        document.querySelector('.swiper-container').classList.add('swiper-no-swiping');

    });
    document.querySelector('.slide3-h').addEventListener('click',function () {
        document.querySelector('.slide3-h').classList.add('none');
        document.querySelector('.slide3Wrap').classList.remove('animatePop');
        document.querySelector('.slide3-i').classList.remove('none');
    });
    document.querySelector('.slide3-i').addEventListener('click',function () {
        document.querySelector('.slide3-i').classList.add('none');
        document.querySelector('.swiper-container').classList.remove('swiper-no-swiping');
    });



    document.querySelector('.swiper-slide4 .f,.swiper-slide4 .g').addEventListener('click',function () {
        document.querySelector('.slide4-h').classList.remove('none');
        document.querySelector('.slide4Wrap').classList.add('animatePop');
        document.querySelector('.swiper-container').classList.add('swiper-no-swiping');

    });
    document.querySelector('.slide4-h').addEventListener('click',function () {
        document.querySelector('.slide4-h').classList.add('none');
        document.querySelector('.slide4Wrap').classList.remove('animatePop');
        document.querySelector('.slide4-i').classList.remove('none');
    });
    document.querySelector('.slide4-i').addEventListener('click',function () {
        document.querySelector('.slide4-i').classList.add('none');
        document.querySelector('.swiper-container').classList.remove('swiper-no-swiping');
    });
    document.querySelector('.swiper-slide5 .other').addEventListener('focus',function (e) {
        if(this.value==0){
            this.value="";
        }
    });
    document.querySelector('.swiper-slide5 .other').addEventListener('blur',function (e) {
        if(!this.value){
            this.value=0;
        }
    })

    document.querySelector('.swiper-slide5 .btn').addEventListener('click',function () {
        var val=document.querySelector('.swiper-slide5 .money').value;
        var val2=document.querySelector('.swiper-slide5 .other').value;

        if(val){
            var result=getTaxNew(val,val2);
            if(result){

                document.querySelector('.swiper-slide5 .result').innerHTML=result+'元';
            }

        }
    });
}