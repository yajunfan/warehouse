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
    <div class="tl">
      <img src="../../assets/4.png" alt="">
    </div>
    <ul class="tl">
      <li class="tl">
        <h4>判断一个单词是否是回文？</h4>
          /**<br>
          * 将字符串转成数组，使用数组的reserse的方法，进行反转之后，再次转为字符串<br>
          * 判断转过之后的字符串和原字符串是否一样<br>
          * @param {*} str<br>
          * @returns 布尔值<br>
          */<br>
          checkPalindrome(str) {  <br>
              return str == str.split('').reverse().join('');<br>
          },<br>
      </li>
      <li>
        <h4>去掉一组整型数组重复的值？</h4>
          /**<br>
          *通过对象属性名不重复的原理进行去重<br>
          *<br>
          * @param {*} ary 传入的数组<br>
          * @returns 返回去重之后的数组<br>
          */<br>
          removeDuplicate(ary){<br>
            var arynew=[];<br>
            var aryobj={};<br>
            var len = ary.length;<br>
            for(var i=0;i<len;i++){<br>
              aryobj[ary[i]]  =ary[i];<br>
            };<br>
            for(var key in aryobj){<br>
              arynew.push(key) ;<br>
            };<br>
            return arynew;  <br>
          },
      </li>
      <li>
        <h4>获取两个整型数组之间的共同的部分</h4>
          /**<br>
          * 双重循环<br>
          * @param {*} ary1<br>
          * @param {*} ary2<br>
          * @returns 返回的是两个数组中的公共部分<br>
          */<br>
          getCommonAry(ary1,ary2){<br>
            var aryCommon=[];<br>
            ary1.forEach(item2=>{<br>
              ary2.forEach(itemnew1=>{<br>
                if(item2 == itemnew1){<br>
                  aryCommon.push(item2) <br>
                }<br>
              }) <br>
            }); <br>
            return  aryCommon;<br>
          },<br>  
      </li>
      <li>
        <h4>获取字符串中出现最多的字母并且出现的次数？</h4>
          /**<br> 
          *注意的是对象的循环，在for in循环中，obj.key指的是添加一个key的属性值，而不会获取到key的值<br> 
          *使用obj[key]<br> 
          * @param {*} str 需要进行计算的字符串<br> 
          * @returns 返回获取到的字母和次数<br> 
          */<br> 
          stringnum(str){<br> 
            var ary=str.split("");<br> 
            //首先将目前有的集中可能放在对象中保存<br> 
            var obj={};<br> 
            ary.forEach((item,index)=>{<br> 
              obj[item] = 0;<br> 
            });<br> 
            //进行循环，通过原数组比较，相同的字母进行累加<br> 
            for(var i=0;i<ary.length;i++){<br> 
              var item = ary[i];<br> 
              for(var key in obj){<br> 
                if(key == item){<br> 
                  obj[key]++;<br> 
                }<br> 
              }<br> 
            };<br> 
            //对新的对象进行循环，获取到出现频率最高并且出现的次数<br> 
            var n=0,objbiger={};<br> 
            for(var key in obj){<br> 
              if(n<obj[key]){<br> 
                n = obj[key]<br> 
                objbiger={"name":[key],"num":n};<br> 
              }<br> 
            };<br> 
            return objbiger;<br> 
          },
      </li>
      <li>
        <h4>冒泡排序</h4>
          /**<br> 
          *两两进行比较，因为比较到最后，不需要和后面的再进行比较，因为自己本身就是最后一个<br> 
          *<br> 
          * @param {*} ary 需要进行排序的数组，可以是数字数组，也可以是字母数组，<br> 
          * @returns<br> 
          */<br> 
          bubblesort(ary){<br> 
            for(var i=0;i<ary.length-1;i++){<br> 
              for(var j=0;j < ary.length-1-i;j++){<br> 
                var itemF=ary[j];<br> 
                var itemA=ary[j+1];<br> 
                if(itemF>itemA){<br> 
                  var temp = itemF;<br> 
                  ary[j]= itemA;<br> 
                  ary[j+1] = temp;<br> 
                }<br> 
              }<br> 
            }<br> 
            return ary;<br> 
          },
      </li>
       <li>
        <h4>快速排序</h4>
          /**<br> 
          *快速排序，主要使用那个递归，将一个数组中的一个值取出，让数组中的每一个与它进行比较，比他大的放在右边的数组中，比他小的放在左边的数组中，<br> 
          * 然后将获取到的左右再次进行分左右，知道左右两边的数组都是只剩一个的时候，进行拼接左中右数组<br> 
          *递归就是在满足一定条件下，不断的调用自己这个函数，相当走到尽头就回头原路再走一遍，知道满足了某些条件就停止，循环是一个走完另一个跟着走，一个人不会回头
          * @param {*} ary 要排序的数组<br> 
          * @returns  返回拍好的数组<br> 
          */<br> 
          quicksort(ary){<br> 
            var leftary=[],rightary=[],middleary=[],num=ary[0];<br> 
            if(ary.length<1){<br> 
              return ary;<br> 
            }<br> 
            for(var i=0;i<ary.length;i++){<br> 
              var item = ary[i];<br> 
              if(item>num){<br> 
                rightary.push(item);<br> 
              }else if(item<num){<br> 
                leftary.push(item);<br> 
              }else {<br> 
                middleary.push(item);<br> 
              }<br> 
            }<br> 
            var aryback=quick(leftary).concat(middleary).concat(quick(rightary));<br> 
            return aryback;<br> 
          }<br> 
      </li>
      <li>
        <h4>找到一串正整数的最大的差值</h4>
        /**<br> 
        *通过不停的赋值，比较当前的上次的较小值获取到更小的那个值，然后将当前值和较小的值得到结果<br> 
        *<br> 
        * @param {*} ary<br> 
        * @returns<br> 
        */<br> 
        getMax(ary){<br> 
          var minnum = ary[0];<br> 
          var maxnum = 0;<br> 
          for(var i=0;i<ary.length;i++){<br> 
            var item = ary[i];<br> 
            minnum = Math.min(item,minnum);<br> 
            var value = item - minnum;<br> 
            maxnum = Math.max(maxnum,value);<br> 
          }<br> 
          return  maxnum;<br> 
        }<br> 
      </li>
    </ul>
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
         },
         {
           title:'对象的遍历赋值https://blog.csdn.net/tongshuo_11/article/details/73328208',
           content1:'在对一串字符串进行算法时，需要获取到字符串中出现次数最多的字母和出现的次数进行统计，出现一个问题'+
           '比如fyj和jyf这么一个效果<br>，其实重要的考察的就是对于reverse的实现。其实我们可以利用现成的函数，将字符串转换成数组<br>'+
           "function checkPalindrom(str) { return str == str.split('').reverse().join('');}"
         }
       ]
     }
   }     
 }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.Map_container{
    ul{
      li{
        margin-top: 20px;
        background: white;
        h4{
          background: blue;
          color: white;
          font-size: 16px;
        }
      }
    }
}
</style>