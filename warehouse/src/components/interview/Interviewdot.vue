<template>
  <div class="Map_container">
    理解Web开发原理，精通JavaScript、Ajax等Web开发技术；
3. 熟悉常见的前端框架、库、工具，如：jQuery、Zepto、SeaJS、VUE、sass、git等；
4. 掌握至少一种前端自动化构建工具，如 grunt, gulp, browserify, webpack 等；
5. 深刻理解Web标准，对可用性、可访问性、HTTP协议、网页性能优化等相关知识有自己的理解和实践经验；
6. 对模块化、组件化、OOP、MVC有较多实践并有自己的理解；
7. 有移动端web开发经验，对设备适配、webview原理、性能调优等有深刻理解，精通移动端页面调试；
8. 有基于Node的全栈开发经验，对NodeJsAPI、源码、生产环境部署、性能监控、错误捕获等有深刻理解优先；
 熟悉主流框架、类库的设计和实现，熟练跨浏览器、跨终端的开发。
4. 了解常见网络协议和网络传输、对页面优化和算法有一定的研究。
5. 至少了解一种前端MVC,MVVM框架，并在实际开发中有运用。
精通HTML/CSS，熟悉html5；
3、精通JavaScript、Ajax、Node、vue，有优秀H5作品案例者优先；
4、精通chrome开发者工具/firebug等常用调试工具；
5、对互联网产品有着良好的感觉，对交互体验有较为深入的了解；
负责web前端架构设计及核心代码的实现
2、分析和发现系统中的可优化点，提高可靠性和性能
3、常用的Javascript模块封装和性能优化，更新和维护公司前端开发组件库
精通javascript、es6编程语言；
精通vue全家桶；
可以独立开发微信小程序前端项目；
熟悉bootstrap、sass、html5、dom、css3等前端技术；
加分项：node.js后台开发；
1.至少2年以上Web前后端交互的架构设计和开发工作经验；
2.精通HTML、JS、CSS代码并能通过DIV+CSS技术构建出兼容浏览器页面；
3.精通Jquery等相关JS框架并能够独立的使用并完成前台工作，熟悉WEB相关服务器环境的部署；
4.精通JavaScript、Ajax、DOM等前端技术，掌握面向对象编程思想；
5.熟悉Html5、Web可视化及相关技术者优先；

6.良好的沟通与表达能力、思路清晰，较强的动手能力与逻辑分析能力。
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
           title:"如何将canvas绘制出的画作为背景图片，或者用于展示等",
           content1:'var context = document.getElementById("d1").getContext("2d");<br>'+
           'context.fill();之后，获取由改canvas转化成的url，<br>var strurl=context.canvas.toDataURL() ;这个str就是base64码的图片路径<br>',
           content2:'需要注意的是，必须要等到canvas画完之后再获取url，否则会出现不完整的情况'
         },
         {
           title:"前端模块化是什么意思",
           content1:'模块化的需求是规模的产物，当web page进化到web application，浏览器端处理的逻辑越来越复杂，展现的样式和动画越来多，对于'+
           '工程的要求也就越来越高。于是模块化的需求也就产生了。模块化的意义：<br>'+
           '组件的复用，降低开发成本和维护成本<br> 组件单独开发，方便分工合作<br>模块化遵循标准，方便自动化依赖管理，代码优化，部署，'
         },
         {
           title:"js常见的一些算法",
           content1:'判断一个单词是否是回文<br>回文是指把相同的词汇或句子，在下文中调换位置或颠倒过来，产生首尾回环的情趣，叫做回文，也叫回环'+
           '比如fyj和jyf这么一个效果<br>，其实重要的考察的就是对于reverse的实现。其实我们可以利用现成的函数，将字符串转换成数组<br>'+
           "function checkPalindrom(str) { return str == str.split('').reverse().join('');}"
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