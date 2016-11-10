var Swiper=require('./components/swiper/swiper-3.3.1.min');


var swiperAnimate=require('./components/swiper/swiper.animate1.0.2.min');


var swiper=new Swiper('.swiper-container',{

     pagination: '.swiper-pagination',

    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
});
// console.log(Swiper);


var $ = require('zepto-modules/zepto');
require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch'); 
module.exports = $;

$("#myIscroll").hide();
$(".swiper-container").show();




$("#enter").tap(function(){
    $("#myIscroll").show();
    $(".swiper-container").hide();

    Skill();
    function Skill(){
        $.post('/api/skill',{},function(response){
    console.log(response.length);

        for(var i=0;i<response.length;i++){
            $("#scroller ul").append("<li><span class='cg'>"+response[i].category+"</span><span>"+
                response[i].name+"</span><span>使用时间："+
                response[i].time+"</span><span>熟悉程度："+
                response[i].level+"</span></li>")
        }
         var IScroll=require('./components/iscroll/iscroll');
    var myScroll;
    myScroll = new IScroll('#wrapper', { mouseWheel: true });

    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    
    })
    }
     $("#skill").tap(function(){
        $("#scroller ul li").remove();
        Skill();
     })

    $("#project").tap(function(){
         $("#scroller ul li").remove();

         $.post('/api/project',{},function(response){
    console.log(response.length);

        for(var i=0;i<response.length;i++){
            $("#scroller ul").append("<li><span class='cg'>项目名称："+
                response[i].name+"</span><span >类型："+
                response[i].category+"</span><span>网址："+
                response[i].url+"</span><span>项目描述："+
                response[i].description+"</span><span>负责模块："+
                response[i].detail+"</span><span>使用技术："+
                response[i].tech+"</span></li>")
        }

    
    })

    })

    $("#work").tap(function(){
         $("#scroller ul li").remove();

         $.post('/api/work',{},function(response){
    console.log(response.length);

        for(var i=0;i<response.length;i++){
            $("#scroller ul").append("<li><span class='cg'>公司名称："+
                response[i].name+"</span><span>公司门户网址："+
                response[i].url+"</span><span>工作时间："+
                response[i].time+"</span><span>职位："+
                response[i].posts+"</span><span>公司规模："+
                response[i].peoples+"</span><span>参与项目："+
                response[i].projects+"</span></li>")
        }

    
    })

    })

    
   
})


