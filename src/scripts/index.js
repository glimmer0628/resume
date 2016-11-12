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
            $("#skill").css('color','#63BAE0');
            $.post('http://8450553422.applinzi.com/www/mock/skill.php',{},function(response){
        
            var op=response.indexOf(']');
            response=response.substring(0,op+1);
            console.log(response);
            response=JSON.parse(response);
            // var b_col=['palegreen','#04A3E9','deeppink','orangered'];
             // $("#scroller_list").append("<li class='skill_title'>专业技能</li>");
              $("#scroller_list").css('background','transparent');
             $("#scroller_list").append("<li ><div class='skill_title'><img src='images/7.png'/><img src='images/8.png'/><img src='images/9.png'/></div></li>")
            for(var i=0;i<response.length;i++){
                $("#scroller_list").append("<li class='skill_li'><div class='skill_left skill_left"+i+"'></div><div class='skill_right'><span class='cg'>"+response[i].category+"</span><span><span class='skill_sp'>设计内容：</span>"+
                    response[i].name+"</span><span><span class='skill_sp'>掌握程度：</span>"+
                    response[i].level+"</span></div></li>")
            }


         var iScroll = require('./components/iscroll/iscroll');
            
         myScroll = new iScroll('#wrapper', { mouseWheel: true });

        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

         
        })
        }
         $("#skill").tap(function(){
            $('#footer div').css('color','#333333');
            $(this).css('color','#63BAE0');
            $("#scroller_list li").remove();
            Skill();
            myScroll.refresh();
         })

        $("#project").tap(function(){
             $('#footer div').css('color','#333333');
            $(this).css('color','#63BAE0');
             $("#scroller_list li").remove();
             

             $.post('http://8450553422.applinzi.com/www/mock/project.php',{},function(response){
            console.log(response.length);
                var op=response.indexOf(']');
            response=response.substring(0,op+1);
            console.log(response);
            response=JSON.parse(response);
             $("#scroller_list").css('background','transparent');
            // $("#scroller_list").append("<li class='project_title'>作品展示</li>")
            for(var i=0;i<response.length;i++){
                $("#scroller_list").append("<li class='project_li'><span class='cg'>"+
                    response[i].name+"<br/><span>"+ response[i].category+
                    "</span></span><img src='images/1.jpg'/><span><span class='pro_sp'>项目描述：</span>"+
                    response[i].description+"</span><span><span class='pro_sp'>负责模块：</span>"+
                    response[i].detail+"</span><span><span class='pro_sp'>使用技术：</span>"+
                    response[i].tech+"</span></li>")
            }
            
         myScroll.refresh();
        })

        })

        $("#work").tap(function(){
             $('#footer div').css('color','#333333');
            $(this).css('color','#63BAE0');
             $("#scroller_list li").remove();
            
                
             $.post('http://8450553422.applinzi.com/www/mock/work.php',{},function(response){
        console.log(response.length);
            var op=response.indexOf(']');
            response=response.substring(0,op+1);
            console.log(response);
            response=JSON.parse(response);
            // $("#scroller_list").append("<li class='work_title'>工作经历</li>")
             $("#scroller_list").css('background','#CFECFB');
            $("#scroller_list").append("<li ><div class='work_title'><img src='images/10.png'/><img src='images/11.png'/><img src='images/12.png'/></div></li>")
           
            for(var i=0;i<response.length;i++){
                
                $("#scroller_list").append("<li class='work_li'><span class='cg'>公司名称："+
                    response[i].name+"</span><span>工作时间："+
                    response[i].time+"</span><span>职位："+
                    response[i].posts+"</span><span>公司规模："+
                    response[i].peoples+"</span><span>参与项目："+
                    response[i].projects+"</span></li>")
            }
        myScroll.refresh();
        
        })

        })

     $("#my").tap(function(){
         $('#footer div').css('color','#333333');
        $(this).css('color','#63BAE0');
        $("#scroller_list").css('background','transparent');
        $("#scroller_list li").remove();
        myScroll.refresh();
        $("#scroller_list").append("<li class='my_li1'><span class='my_title'>个人基本情况</span><span class='title_e' >ABOUT ME</span>");
        // $("#scroller_list").append("<li class='title_e' >ABOUT ME</li>");
        $("#scroller_list").append("<li class='my_li'><span><span class='sp_t'>期望职位: </span>前端开发工程师</span><span><span class='sp_t'>期望月薪: </span>8k-10k</span><span ><span class='sp_t'>工作地点: </span>北京、青岛</span><span ><span class='sp_t'>自我评价：</span>我是一个做事认真负责，有耐心，能吃苦的人。平时工作会有自己的idea，创新能力比较强，有很强的团队意识，善与人沟通。希望进入贵公司，与公司一起成长进步。</span></li>");
         $("#scroller_list").append("<li><img class='my_img' src='images/6.png' /></li>");
       })
   
})


var interval=setInterval(function(){
    if(document.readyState==='complete'){
        clearInterval(interval);
        $('#preload').hide();
        $('.swiper-container').show();
        swiper.updateContainerSize();
        swiper.updateSlidesSize();
        

    }else{
        $('#preload').show();
    }
},50);


var wx = require('./components/weixin/jweixin');