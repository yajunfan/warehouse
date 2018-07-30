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
           title:"如何将canvas绘制出的画作为背景图片，或者用于展示等",
           content1:'var context = document.getElementById("d1").getContext("2d");<br>'+
           'context.fill();之后，获取由改canvas转化成的url，<br>var strurl=context.canvas.toDataURL() ;这个str就是base64码的图片路径<br>',
           content2:'需要注意的是，必须要等到canvas画完之后再获取url，否则会出现不完整的情况'
         },
         {
           title:"前端模块化是什么意思",
           content1:'模块化的需求是规模的产物，当web page进化到web application，浏览器端处理的逻辑越来越复杂，展现的样式和动画越来多，对于'+
           '工程的要求也就越来越高。于是模块化的需求也就产生了。模块化的意义：<br>'+
           '组件的复用，降低开发成本和维护成本<br> 组件单独开发，方便分工合作<br>模块化遵循标准，方便自动化依赖管理，代码优化，部署'
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