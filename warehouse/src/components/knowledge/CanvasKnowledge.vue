<template>
  <div class="canvas_container">
    <el-collapse v-model="activeNames" class="tl">
      <el-collapse-item  v-for="(item,index) in lists" :key="index" :name="index" :title="item.title">
        <div v-html="item.content1"></div>
        <div >
          <div v-html="item.content2"></div>
        </div>
      </el-collapse-item>
      
    </el-collapse>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        lists:[
          {
            title:"1）建立canvas画布",
            content1:'(canvas id="myC" width="200" height="200" style="border:1px solid #000000; ")(/canvas)<br>'+
            'Ps:width,height是画布的宽高，样式是为了显示这个画布，绘制是在js中'
          },
          {
            title:"2）运行在script中",
            content1:'A: 获取当前canvas的id元素。如：oMyC<br>B: 获取这个对象上的方法。Var ctx=oMyC.getCtx(“2d”)à 不支持3d'+
            'C: 使用这个对象上的方法。'
          },
          {
            title:"3) 该对象上的方法 --- fillstyle、creatLinearGradient、addColorStop",
            content1:'可以是纯色，可以是渐变，也可以是图片；<br>1)纯色：  <br>Ctx.fillstyle=”red”  填充的样式 将我之后要做的东西填充背景色'+
            '<br>2)渐变色：  <br>需要创建一个渐变。Var aa=Ctx.creatLinearGradient(x,y,x1,y1),这四个参数分别代表<br>'+
            'x->渐变开始的x点坐标  y->渐变开始的y点坐标   x1->渐变结束的x点坐标   y1->渐变结束的y点坐标<br>'+
            '增加颜色  aa.addColorStop(offer,color) 这两个参数分别代表<br>Offer –>这是一个范围在 0.0 到 1.0 之间的浮点值。offset '+
            '为 0 对应开始点，offset 为 1 对应结束点。一次只写一个颜色，可以增加很多个，最后ctx.fillstyle=aa; 完成渐变填充；<br>'+
            '3)图片的填充：<br>window.onload=function(){var canvas = document.getElementById("myCanvas");var ctx=canvas.getCtx("2d");'+
            'var img = new Image();img.src="12.jpg";img.onload=function() {var pattern = ctx.createPattern(img, "no-repeat");'+
            'ctx.fillStyle=pattern;ctx.fillRect(0, 0, 400, 400) 填充的图片的矩形框的x，y轴起止点坐标}}'
          },
          {
            title:"4) 该对象上的方法 --- fillRect",
            content1:'Ctx.fillRect(20,30,40,50)  定义了矩形当前的填充方式，对应方向是x，y、width,height;<br>'
          },
          {
            title:"5) 该对象上的方法 --- 绘制矩形和圆形: moveTo、lineTo(x,y)、stroke(). beginPath()、arc(x,y,r,start,2*Math.PI);",
            content1:'1）矩形对角线<br>moveTo(x,y) 定义线条开始坐标 lineTo(x,y) 定义线条结束坐标<br>stroke() 绘制线条我们必须使用到 '+
            '"link" 的方法，比如stroke() 或者 fill()。<br>例子 ：ctx.moveTo(0,200); ctx.lineTo(200,0); ctx.stroke(); 这样就画出一条对角线'+
            'Ps:width,height是画布的宽高，样式是为了显示这个画布，绘制是在js中<br>'+
            '2)圆形 <br>ctx.beginPath(); ctx.arc(95,50,40,0,2*Math.PI); ctx.stroke();<br>'+
            '注意点：使用canvas需要注意的是，书写顺序，比如线条的填充，宽度要写在填充颜色的上面；<br>'+
            '还有例子就是，我用arc画出一个圆，然后给这个圆的线条增加宽度（linewidth），然后给这个线条增加颜色，这时候，就需要将ctx.strokeStyle=“纯色、渐变、图片”写在stroke()之前。否则不出效果'
          },
          {
            title:"6)使用canvas来将文字进行原地旋转",
            content1:'function drawFont(text,x,y,color,angle,x1,y1) {<br>if(angle ||x1 || y1){<br>if(angle ||x1 || y1){'+
            '//关键ctx.save();<br>ctx.translate(x,y);<br>ctx.rotate(Math.PI/angle);<br>ctx.fillText(text,x1,y1);<br>ctx.restore();<br>'+
            '}else{<br>ctx.font = "30px Courier New";<br>ctx.fillStyle =color;<br>ctx.fillText(text,x,y);}}<br>'+
            'text：要写入的文字；x，y是不需要旋转的文字的坐标；color是文字的颜色；angle是需要旋转的文字的一个旋转的数值；x1，y1是旋转的文字的偏移量<br>'+
            '进行重复性的画图的时候，最后一次画图不可以调用和上面同函数名的函数，，原因不明。可以重起一个名字来写函数，也可以直接将方法的内容写在下面'
          },
          {
            title:"7）在一个canvas画好的图形中填充图片的方法",
            content1:'function draw(x,y,r,x1,y1,text,w,bgImg) {<br>&nbsp;&nbsp;if(bgImg){<br>var img = new Image();<br>img.src=bgImg;'+
            'img.onload = function(){<br>ctx.drawImage(img,x-61,y-62,110,110)};<br>}else{<br>ctx.beginPath();<br>ctx.arc(x,y,r,0,2*Math.PI,false);<br>'+
            "ctx.fillStyle='lightblue';<br>ctx.fill();<br>ctx.stroke();<br>ctx.font = 'bold 16px Arial';<br> ctx.fillStyle = 'red';<br>"+
            "ctx.textAlign = 'center';<br>ctx.textBaseline = 'middle';<br>ctx.moveTo(x, y);  // 文字填充位置<br>ctx.fillText(text,x,y,w);}<br>"+
            "ctx.stroke();<br>ctx.closePath()<br>}"+
            "参数：x,y,r是第一个圆形的坐标位置以及圆形的半径；text 是文字内容; w 是文字的宽度;bgImg  是填充的图片"
          },
          {
            title:"8）canvas将html保存成图片并进行下载",
            content1:"1)使用canvas将html保存成图片的时候，如果事前已经将html的css设置了overflow:hidden,那么，保存的时候将只保存一部分"+
            '引用html2canvas.js（在四月的独立页面的js中可找到），html：(a class="aa" )点击下载<!--<img src="imgAddress" alt="" class="bgImg">-->'+
            '这个图片科协可不写，写了就是点击图片才会下载，不写就是点击a标签两次进行下载(/a)<br>js： $scope.aa=function () {<br>'+      
            '// 将 id 为baseReport11 的 div 渲染成 canvas，这里根据自己需要来写<br>html2canvas(document.getElementById("baseReport11"), {<br>'+
            'height:2000,（根据自己情况设置）<br>// 渲染完成时调用，获得 canvas<br>onrendered: function(canvas) {<br>// 从 canvas 提取图片数据'+
            'var imgData = canvas.toDataURL("image/jpeg");<br>得到图片的url地址,使用html5中的a标签的download属性进行下载'  + 
            '$(".aa").attr("href",imgData).attr("download","filename");<br>$(".bgImg").attr("src",imgData);}})}'
          },
          {
            title:"9）绘制多圆多线的情况下，会出现填充一整块的现象，原因是第一个点会与最后一个点被认为 是在画图形而不是在画线",
            content1:'解决方式：ctx.beginPath();<br>ctx.lineTo(lx1,ly1);<br>ctx.strokeStyle = "blue";<br>'+
            'ctx.arc(rx1,ry1,r1,0,2*Math.PI,true);　　//定义第一个圆形路径<br>ctx.fillStyle="blue";这里要进行填充一次<br>'+
            'ctx.fill();<br>ctx.stroke();<br>ctx.closePath();   每次都要进行关闭绘画路径<br>ctx.beginPath();  再次开启绘画路径 <br>'+
            'ctx.arc(rx2,ry2,r2,0,2*Math.PI,true);<br>ctx.fillStyle="blue"; //这个不写的话，那么第二个圆就没有背景色<br>ctx.fill();<br>'+
            'ctx.moveTo(lx2,ly2);第二条线要写上起始坐标<br>ctx.lineTo(lx3,ly3);<br>ctx.stroke();'
          },
          {
            title:"10）使用canvas实现自由画笔的功能，其中就使用了jsCanvas.js和jsColor.js",
            content1:'(script src=”//cdn.bootcss.com/jcanvas/16.7.3/jcanvas.js")("/script)<br>'+
            '(script src="//cdn.bootcss.com/jcanvas/15.8.17/plugins/jcanvas-donuts.min.js")(/script)<br>'+
            '(script src="//cdn.bootcss.com/jcanvas/15.8.17/plugins/jcanvas-handles.min.js")(/script)<br>'+
            '(script src="//cdn.bootcss.com/jcanvas/15.8.17/plugins/jcanvas-hearts.js")(/script)<br>'+
            '(script src="jscolor.min.js")(/script)'
          }
        ]
      }
    }    
  }
</script>

<style scoped lang="scss" type="text/css">
.canvas_container{
  width: 100%;
  height: 100%;
}
</style>