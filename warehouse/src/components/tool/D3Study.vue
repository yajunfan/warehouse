<template>
  <div class="d3_container">
    <h4>D3.js是一个数据可视化的库，看看他们的DEMO就可以知道，技术基础是SVG。兼容性是IE9+。http://www.cnblogs.com/tanlujia/;</h4>
    <p>学习 D3 英文的： http://d3js.org/ ;中文版：https://github.com/d3/d3/wiki/API--%E4%B8%AD%E6%96%87%E6%89%8B%E5%86%8C</p>
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
       activeNames: ['1'],
       lists:[
         {
           title:"1.如何选择元素",
           content1:'在D3中，用于选择元素的函数有两个<br>-- d3.select()：是选择所有指定元素的第一个<br> -- d3.selectAll()：是选择指定元素的全部',
           content2:'这两个函数返回的结果称为选择集，常见用法如下。<br>'+
            'eg:var body = d3.select("body"); //选择文档中的body元素<br>'+
            'var p1 = body.select("p");      //选择body中的第一个p元素<br>'+
            'var p = body.selectAll("p");    //选择body中的所有p元素<br>'+
            'var svg = body.select("svg");   //选择body中的svg元素<br>'+
            'var rects = svg.selectAll("rect");  //选择svg中所有的svg元素<br>'+
            '选择集和绑定数据通常是一起使用的。<br>'
         },
         {
           title:"2.如何绑定数据",
           content1:' D3 有一个很独特的功能：能将数据绑定到 DOM 上，也就是绑定到文档上。这么说可能不好理解，例如网页中有段落元素 p 和一个整数 5，于是可以将整数 5 与 p 绑定到一起。绑定之后，当需要依靠这个数据才操作元素的时候，会很方便。',
           content2:'<br>D3 中是通过以下两个函数来绑定数据的：<br>-- datum()：绑定一个数据到选择集上'+
           '<br>-- data()：绑定一个数组到选择集上，数组的各项值分别与选择集的各元素绑定<br>相对而言，data() 比较常用。'+
           '<br>假设现在有三个段落元素如下。<br><p>Apple</p><br><p>Pear</p><br><p>Banana</p><br>接下来分别使用 datum() 和 data()，将数据绑定到上面三个段落元素上。'
         },
         {
           title:"3.datum() 和2上面的相接",
           content1:'假设有一字符串 China，要将此字符串分别与三个段落元素绑定，代码如下：<br>var str = "China";<br>var body = d3.select("body");'+
           '<br> var p = body.selectAll("p");<br>p.datum(str);<br>p.text(function(d, i){<br>return "第 "+ i + " 个元素绑定的数据是 " + d;});'+
           '<br>绑定数据后，使用此数据来修改三个段落元素的内容，其结果如下：第 0 个元素绑定的数据是 China <br>第 1 个元素绑定的数据是 China '+
           '<br>第 2 个元素绑定的数据是 China<br>在上面的代码中，用到了一个无名函数 function(d, i)。当选择集需要使用被绑定的数据时，常需要这么使用。其包含两个参数，其中'+
           '<br>d 代表数据，也就是与某元素绑定的数据<br>i 代表索引，代表数据的索引号，从 0 开始<br>例如，上述例子中：第 0 个元素 apple 绑定的数据是 China。'+
           '<br>2) data()<br>有一个数组，接下来要分别将数组的各元素绑定到三个段落元素上。<br>var dataset = ["I like dogs","I like cats","I like snakes"];'+
           '绑定之后，其对应关系的要求为：<br>Apple 与 I like dogs 绑定<br>Pear 与 I like cats 绑定<br>Banana 与 I like snakes 绑定'+
           '调用 data() 绑定数据，并替换三个段落元素的字符串为被绑定的字符串，代码如下：<br>var body = d3.select("body");'+
           'var p = body.selectAll("p");<br>p.data(dataset).text(function(d, i){<br>return d;});<br>'+
           '这段代码也用到了一个无名函数 function(d, i)，其对应的情况如下：<br>当 i == 0 时， d 为 I like dogs。<br>当 i == 1 时， d 为 I like cats。'+
           '<br>当 i == 2 时， d 为 I like snakes。<br>此时，三个段落元素与数组 dataset 的三个字符串是一一对应的，因此，在函数 function(d, i) 直接 return d 即可。'+
           '结果自然是三个段落的文字分别变成了数组的三个字符串。<br>I like dogs<br>I like cats<br>I like snakes'
         }
        
       ]
     }
   }      
  }
</script>

<style scoped lang="scss" type="text/css">
.d3_container{
  h4,p{
    font-size: 16px;
    text-align: left;
    background: blue;
    color: white;
    padding: 5px;
  }
}
</style>