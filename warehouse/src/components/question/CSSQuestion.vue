<template>
  <div class="css_container">
    <el-collapse v-model="activeNames" class="tl">
      <el-collapse-item  v-for="(item,index) in lists" :key="index" :name="index" :title="item.title">
        <div v-html="item.content1"></div>
        <div >
          <div v-html="item.content2"></div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <h4>由图片1，变成图片2，使用flex布局，怎么实现</h4>
    <div class="example">
      <img src="../../assets/1.png" alt="">
      <p>
        flex-flow:column-reverse wrap-reverse;<br>
        align-content:space-between;<br>
        justify-content:center;<br>
      </p>
      <img src="../../assets/2.png" alt="">
    </div>
    <img src="../../assets/3.png" alt="" title="flex的属性大全">
  </div>
</template>

<script>
  export default {
    data(){
     return{
       activeNames: ['1'],
       lists:[
         {
           title:"input的date属性的默认样式更改",
           content1:'::-webkit-datetime-edit { padding: 1px; background: url(/study/image/selection.gif); }<br>',
           content2:'::-webkit-datetime-edit-fields-wrapper { background-color: #eee; }<br>'+
            '::-webkit-datetime-edit-text { color: #4D90FE; padding: 0 .3em; }<br>'+
            '::-webkit-datetime-edit-year-field { color: purple; }<br>'+
            '::-webkit-datetime-edit-month-field { color: blue; }<br>'+
            '::-webkit-datetime-edit-day-field { color: green; }<br>'+
            '::-webkit-inner-spin-button { visibility: hidden; }<br>'+
            '::-webkit-calendar-picker-indicator {<br>border: 1px solid #ccc;<br> border-radius: 2px;<br>'+
            'box-shadow: inset 0 1px #fff, 0 1px #eee;<br>background-color: #eee;<br>background-image: -webkit-linear-gradient(top, #f0f0f0, #e6e6e6);'+   
            '<br>color: #666}<br>',
         },
         {
           title:"媒体查询",
           content1:'@media screen and (min-width: 400px) and (max-width: 480px) {<br>body {width: 100%;background: yellow;}}(最小400，最大480)',
           content2:'<br>@media only screen and (min-width: 1029px) {body {background: green;}} 当屏幕大于1029px以后，使用这个样式'+
           '<br>@media screen and (orientation:portrait) and (max-width: 720px) {对应样式}  竖屏'+
           '<br>@media screen and (orientation:landscape){对应样式}  横屏'
         },
         {
           title:"移动端的meta",
           content1:'(meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes" /)',
  
         },
         {
           title:"改变select下拉的默认样式",
           content1:'select {<br> /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/<br>border: solid 1px #000;'+  
           '<br>/*很关键：将默认的select选择框样式清除*/<br> appearance:none;<br> -moz-appearance:none;<br> -webkit-appearance:none;'+ 
           '<br> /*在选择框的最右侧中间显示小箭头图片*/ background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;'+  
           '<br> /*为下拉小箭头留出一点位置，避免被文字覆盖*/<br> padding-right: 14px;}<br> /*清除ie的默认选择框样式清除，隐藏下拉箭头*/ '+
           '<br> select::-ms-expand { display: none; }<br> http://blog.csdn.net/java_zhaoyanli/article/details/52549787,'+
           '<br>在火狐下，option的css中不可以写display：inline-block；否则下拉列表会横放'+
           '<br>在谷歌下，给option的背景设置为空，当选择框中选中的那个鼠标经过时会变为空白，是因为将字体是白的，看不到了，只需要给option一个背景颜色即可；'+
           '<br>在ie8下，写css的HACK,写上\9;'
          
         },
         {
           title:"使用css写带border的小三角",
           content1:'.app .outer{ 后边的三角<br><br>position: absolute;<br>width: 0;<br>height: 0;'+
           '<br>border-left: 52px solid transparent;<br>border-right: 52px solid transparent;<br>border-top: 102px solid #0276c8;'+
           '<br>top:0;<br>left:-2px;<br>}<br>.app .inner{ 前面的三角<br>position: absolute;<br>width: 0;<br>height: 0;'+
           '<br>border-left: 50px solid transparent;<br>border-right: 50px solid transparent;<br>border-top: 100px solid #00a0e9;'+
           '<br>display: inline-block;<br>}<br>《div class="app"》<br>《span class="outer"》《/span》'+
           '<br>《span class="inner"》《/span》<br>《/div》'
         },
         {
           title:"给一个网站的标题前面添加小图标",
           content1:'1.网上制作一个favicon.ico图标，把它放到不是根目录的目录下(以前是放在根目录下)<br>2.在把(link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/)添加到head里面',
         },
         {
           title:"关于height:inherit",
           content1:'这个属性在一般情况下是和height:100%，一样的，但是当父元素没有定位，有固定高度的时候，子元素有定位的情况下，子元素写了height：100%,那么'+
           '子元素是会继承body或者是他的最终一个定位的父级的高度，而使用了height:inherit;的元素，就会始终都继承自己当前的父元素的高度',
         },
         {
           title:"关于text-align: center、verticle-align: center",
           content1:'这两个属性是只能用于行内元素，对于块级元素的布局是无效的，',
         },
          {
           title:"使用flex进行布局",
           content1:'父容器可以进行统一的设置子容器的排列方式，子容器也可以单独设置自身的排列方式，如果两者都设置了，以子为准，比如align-items是设置父容器的'+
           'align-self是设置子容器的，juqtify-content是负责主轴的，align-items负责交叉轴，主轴交叉轴又是根据flex-director这个属性的值来进行相应的变化',
         }
       ]
     }
   }        
  }
</script>

<style scoped lang="scss" type="text/css">
h4{
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  text-align: center;
}
.example{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 300px;
  img{
    width: 30%;
    height: inherit;
  }
  p{
    font-size: 16px;
  }
}
</style>