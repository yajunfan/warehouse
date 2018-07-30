<template>
  <div class="Map_container">
    <el-collapse v-model="activeNames" class="tl">
      <el-collapse-item  v-for="(item,index) in lists" :key="index" :name="index" :title="item.title">
        <div v-html="item.content1"></div>
        <div >
          <div v-html="item.content2"></div>
          <img :src="item.imgurl" alt="">
        </div>
        <div v-html="item.content3"></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
 export default {
   data(){
     return{
       activeNames: ['1'],
       lists:[
         {
           title:"移动端实现简单的下拉刷新？",
           content1:'1.2之前的引用<br>'+
           '(script) src=‘http://api.map.baidu.com/api?key=46ce9d0614bf7aefe0ba562f8cf87194&v=1.0&services=false’ (/script)<br>',
           content2:'2.0的版本引用 <br>'+ 
           '(script) src=‘http://api.map.baidu.com/api?v=2.0&ak=zmAWIlHnn8qQ4qMKkBGtypeoZio5q86s’ type=‘text/javascript’(/script)<br>',
           content3:'关键点：一个是key---ak，services'
         },
         {
           title:"移动端的滚动条怎么设置样式？",
           content1:'出现滚动条是 overflow:scroll'
         },
         {
           title:"手机端的兼容性？",
           content1:'a)	一般都是设备的适配问题，还有安卓和苹果的区别，图标，如果雪碧图做的不精准，也会出问题',
           content2:'问：1）一些情况下对非可点击元素如(label,span)监听click事件，ios下不会触发，'+
           '<br>2）.IOS移动端(安卓不会)click事件300ms的延迟响应解决方式;<br>3）h5底部输入框被键盘遮挡问题'+
           '<br>4)禁止ios和android用户选中文字<br>fixed定位缺陷<br>在后面会一次写出解决方案'
         },
         {
           title:"一些情况下对非可点击元素如(label,span)监听click事件，ios下不会触发，",
           content1:'css增加cursor:pointer就搞定了'
         },
         {
           title:".IOS移动端(安卓不会)click事件300ms的延迟响应解决方式;",
           content1:'原因：当用户一次点击屏幕之后，浏览器并不能立刻判断用户是要进行双击缩放，还是想要进行单击操作。因此，iOS Safari 就等待 300 毫秒，以判断用户是否再次点击了屏幕。',
           content2:'解决：第一种：FastClick 在检测到 touchend 事件的时候，会通过 DOM 自定义事件立即'+
           '触发一个模拟click 事件的click事件（自定义事件），就是发布了一个假命令，让这个DOM立即执行click，把真正的命令杀掉。'+
           '并把浏览器在 300 毫秒之后真正触发的 click 事件阻止掉。<br>第二种：zepto库函数中，也有一个touch模块，此模块也包含tap事件，可以通过绑定tap来取代click事件。'+
           '<br>使用：引入fastclick.js，<br>有jquery的时候， $(function() {FastClick.attach(document.body);});<br>没有jquery的时候'+
           'if ("addEventListener" in document) {document.addEventListener("DOMContentLoaded", function() {FastClick.attach(document.body); }, false);}'+
           '<br>在vue中使用的话，<br>安装：npm install fastclick -S，<br>引入：import FastClick from "fastclick",<br>使用：FastClick.attach(document.body);', 
          
         },
         {
           title:"如果文本输入框在整个页面的下方，当我们点击输入框要输入文字时，系统弹出的虚拟键盘就会将输入框给挡住，h5底部输入框被键盘遮挡问题（在安卓下会出现，ios下回自动将整个页面上移动）",
           content1:'(现在的安卓系统好像已经没有这个问题了，低版本安卓系统的或许会有吧)我们可以借助元素的 scrollIntoViewIfNeeded() 方法。这个方法执行后如果当前元素在视口中不可见，则会滚动浏览器窗口或容器元素，'+
           '最终让它可见。如果当前元素在视口中已经是可见的，这个方法什么也不做。<br>这里使用了 jQuery 绑定了所有输入框（textinput、textarea）的点击事件，这样当输入框被点击后就调用它的'+
           'scrollIntoViewIfNeeded() 方法，保证输入框可见。（延迟400毫秒出现时有些 Android 手机键盘出现的比较慢）<br>'+
           "$$('input[type='text'],textarea').on('click', function () {<br>var target = this;<br>setTimeout(function(){"+
           "target.scrollIntoViewIfNeeded();<br>console.log('scrollIntoViewIfNeeded');<br>},400);})<br>或者;var oHeight = $(document).height(); //浏览器当前的高度"+
           '<br>$(window).resize(function(){if($(document).height() < oHeight){$("#footer").css("position","static");<br>'+
           '}else{$("#footer").css("position","absolute");}})',
         },
         {
           title:"禁止ios和android用户选中文字",
           content1:'-webkit-user-select:none',
           
         },
         {
           title:"fixed定位缺陷",
           content1:'a)ios下fixed元素容易定位出错，软键盘弹出时，影响fixed元素定位<br>b)android下fixed表现要比iOS更好，软键盘弹出时，不会影响fixed元素定位'+
           '<br>c)ios4下不支持position:fixed;<br>解决方案： 可用iScroll插件解决这个问题：首先获取浏览器窗口高度；然后获取固定工具栏的高度；接着将除固定工具栏'+
           '之外的内容全部放在一个固定区域内，该固定区域的高度=窗口高度-工具栏高度；之后对固定区域使用iscroll。这样，整个html页面的高度正好等于窗口高度，页面级别'+
           '不会出现滚动，工具栏就一直固定在当前的位置。在固定区域内滑动，可以查看页面其他内容，不会影响工具栏的定位'
         },
         {
           title:"做移动端的时候，需要转化rem，应该怎么写",
           content1:'在入口文件处，或者是其他什么位置，引入一段js即可，如下',
           content2:'(function (doc, win) {<br>var docEl = doc.documentElement,'+
           "resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',<br>"+
           "recalc = function () {<br>var clientWidth = docEl.clientWidth;<br>if (!clientWidth) return;"+
           "try{}catch(err){};<br>docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';};<br>"+
           "if (!doc.addEventListener) return;<br>win.addEventListener(resizeEvt, recalc, false);<br>"+
            "doc.addEventListener('DOMContentLoaded', recalc, false);})(document, window);<br>"+
            "这里的100和750是根据我们自己的实际需求来写的，<br>100指的是rem和px之间的换算关系是1rem = 100px；<br>"+
            "750指的是，设计是以750为宽的基础来设计样式的，如果是以640为基础，那就除以640"
         },
          {
           title:"移动端的双击事件",
           content1:'一般不会写双击事件，非要写，那就使用zepto里有一个doubleTap 事件就是双击的<br>如果在vue中，可以模拟'+
           '可以用单击事件，短时间之内连续两次单击事件计数，模拟双击事件<br>var count = 0<br>'+
           "document.getElementById('headerTitle').addEventListener('click', function () {<br>count++"+
           "<br>setTimeout(function () {<br>if (count === 2) {<br>self.toTop()<br>}<br>count = 0<br>}, 300)<br>}, false)"+
           "<br>模拟了一个，在300ms之间点击次数为2的事件",
         },
          {
           title:"写了一个移动端，如何在我们自己的手机上进行查看效果",
           content1:'如果使用vue进行开发的，<br>1)那么在vue的config的index.js中的dev的host中写为host:"0.0.0.0"，假设端口为8080'+
           '<br>第二步，使用cmd，打开命令窗口，输入ipconfig，获取到当前ip，比如为110.2.3.2<br>第三步，在项目中启动该项目'+
           '在浏览器输入110.2.3.2:8080,查看是否项目正常运行，<br>第四步，如果正常，打开材料二维码生成器，将110.2.3.2:8080输入'+
           '生成二维码，就可以使用手机扫描查看了(如果没有正常打开，我也不知道是什么原因了，可能是防火墙的原因，查看报错找原因)'
         },
         {
           title:"移动端上传图片的问题",
           content1:'上传图片分为上传一张还是多张，其实原理一样，只不过是进行了循环，使用的都是h5的input type是file的标签<br>',
           content2:'(input id="file" class="filepath" onchange="changepic(this)" type="file")'+
           '<input id="file" class="filepath" onchange="changepic(this)" type="file"><br>'+
           '或者是自己找的插件也行，比如我使用的是vant中的<van-uploader :after-read="onRead"><van-icon name="photograph" />'+
           '</van-uploader>,具体的执行函数如下<br>首先，我们会获取到我们上传的图片文件，在onRead和changepic函数中，onRead(file){'+
           '这里的file就是我上传上来的图片的所有信息}<br>或者是changepic(){var f=document.getElementById("file").files[0];<br>}'+
           '这里的f也是获取到的图片的所有信息，使用input的时候，我们一次只能拿一张图片，使用插件，会将所有的图片以数组的形式返回'+
           '<br>然后执行我们的上传之后的回调事件，一般上传成功后，我们会将该图片的信息发送给后台，后台给我们返回一个图片的url供我们使用'+
           '<br>unloadImg(file){<br>var this_ = this;<br>let formData = new FormData();<br>var type = file.type;(这里根据'+
            '我们获取的file的来获取对应的type，不一定就是直接file.type)<br>'+
            'if (type !="image/jpg" && type !="image/jpeg" && type !="image/bmp" && type !="image/png"&& type !="image/gif") {'+
            '<br>这里写逻辑，进行提示 “请选择图片格式文件上传(jpeg,jpg,png,gif, bmp)！”return false;};<br>formData.append("file", file);'+
            '这里使用ajax来进行请求，使用axios不执行<br> $.ajax({<br>url:"http://192.144.141.33:8081/book/upload/uploadImage",(后台给的上传url)'+
            "type:'POST',<br>data:formData,<br>cache: false,<br>contentType: false,<br>processData: false,<br>async: false,'"+
            "<br>success:function(res){写相关的逻辑}else{相关逻辑}"
           ,
         }
       ]
     }
   }     
 }
</script>

<style scoped>
.Map_container{

}
</style>