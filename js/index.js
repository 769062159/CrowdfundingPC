$(function () {
    let node = `<div class="list">
      <img src="images/183.jpg" alt="">
      <div class="works-content">
         <div class="works-title">诸神之座</div>
         <div class="author">作者：小何流口水</div>
         <div class="desc">正文卷·共78章</div>
      </div>
      <div class="works-detail">
         <div class="text11">首发价：78元/份</div>
         <div class="text11">当前价：128元/份</div>
         <div class="text11">发行至今涨幅：64%</div>
         <div class="text11">交易指数：82</div>
         <div class="text11">收益指数：30</div>
         <div class="text11">热度指数：46</div>
      </div>
      <div class="text-bottom">万象权证：1530EF724E3D34A1</div>
   </div>
   <!--<div class="aaa"></div>-->
   <div class="list">
      <img src="images/184.jpg" alt="">
      <div class="works-content">
         <div class="works-title">超凡蚊暴君</div>
         <div class="author">作者：熊皮大衣</div>
         <div class="desc">正文卷·共78章</div>
      </div>
      <div class="works-detail">
         <div class="text11">首发价：69/份</div>
         <div class="text11">当前价：99/份</div>
         <div class="text11">发行至今涨幅：43%</div>
         <div class="text11">交易指数：60</div>
         <div class="text11">收益指数：80</div>
         <div class="text11">热度指数：28</div>
      </div>
      <div class="text-bottom">万象权证：11780C8324AE32C2</div>
   </div>
   <div class="list">
      <img src="images/185.jpg" alt="">
      <div class="works-content">
         <div class="works-title">旅法师的学霸系统 </div>
         <div class="author">作者：半箱方便面</div>
         <div class="desc">正文卷·共306章</div>
      </div>
      <div class="works-detail">
         <div class="text11">首发价：70元/份</div>
         <div class="text11">当前价：128元/份</div>
         <div class="text11">发行至今涨幅：82%</div>
         <div class="text11">交易指数：18</div>
         <div class="text11">收益指数：92</div>
         <div class="text11">热度指数：83</div>
      </div>
      <div class="text-bottom">万象权证：1A51E3DCF9F6195E</div>
   </div>`;
    $("#click-more").on("click",function () {
        $(".moreLoading img").css({display:"block"});
        setTimeout(function (){
            $(".content .works-box").append(node);
            $(".moreLoading img").css({display:"none"});
        },1000);
    });

})
