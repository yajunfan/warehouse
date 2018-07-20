<template>
  <div class="echartStudy_container">
    <el-table :data="tableData" slot="empty" :span-method="objectSpanMethod"  border style="width: 100%; margin-bottom: 20px;text-align:center;font-size:14px;">
      <el-table-column  type="index" label="序号" width="80" header-align="center"> </el-table-column>
      <el-table-column prop="name" label="问题" header-align="center">
        <template slot-scope="scope">
         <p v-html="scope.row.name"></p>
        </template>  
      </el-table-column>
      <el-table-column prop="question" label="需求" header-align="center">
        <template slot-scope="scope">
         <p v-html="scope.row.question"></p>
        </template>
      </el-table-column>
      <el-table-column prop="answer" label="解决方式" header-align="center"> 
        <template slot-scope="scope">
          <img v-if="scope.row.imgurl" :src="scope.row.imgurl" alt="" style="display:inline-block;width:100px;height:100px;" @click="previewFn(scope.row.imgurl)">
          <p v-html="scope.row.answer"></p>
          <!-- <textarea v-else rows="2" v-model="scope.row.answer" style="width:100%;font-size:14px;color:#606266"></textarea> -->
        </template>
      </el-table-column>
    </el-table>
    <div class="prew_container" v-if="prewflag">
      <span class="d-i-b cp" title="关闭预览" @click="prewflag=false;">X</span>
      <img :src="previewimg" alt="预览">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      previewimg:"",
      prewflag:false,
      tableData: [{
        id: '1',
        num:12,
        name: 'jquery',
        question: '获取某一个网页的url的任何一部分',
        answer: "解答：1 获取上一个页面的一个URL，这个URL一般做一个页面的跳转  window.location.href<br>"
                  +"window.location.href='http://www.baidu.com'<br>"
                  +"2 获取一个页面的主机名<br>"
                  +"window.location.hostname<br>"
                  +"3 获取一个页面的主机名和端口号相当于是hostname和port<br>"
                  +"window.location.host<br>"
                  +"4 获取主机的端口号<br>"
                  +"window.location.port<br>"
                  +"5 获取URL的路径部分<br>"
                  +"window.location.pathname<br>"
                  +"6 获取查询部分的URL<br>"
                  +"window.location.search.substr(1).split（\'&\')<br>"
                  +"7 获取html中的第一个#（描点）<br>"
                  +"window.location.hash"
      }, {
        id: '2',
        num:12,
        name: 'jquery',
        question: 'resize 的时候刷新一下页面？',
        answer: "$(window).resize(function() { $('window').reload() });"
      }, {
        id: '3',
        num:12,
        name: 'jquery',
        question: '新创建的标签，只想让插入一次，之后只让更改该标签的样式或是src的话，怎么解决',
        answer: "解答：使用$(原有标签).html(新标签) 不可以使用append（）；"
      }, {
        id: '4',
        num:12,
        name: 'jquery',
        question: '在$.get()请求数据后，在获取之后的success函数中进行操作数据，在外界是获取不到数据的，如何使用angular获取到，并且绑定到页面',
        answer: "使用$apply。如：$scope.$apply(function(){  $scope.name=params（数据的对象）.name;}) 或者使用angular的promiss来进行同步解析<br>"
          +"myChart.on('click', function (data) {  //data就是我ajax请求成功的函数的参数<br>"
          +"          a=data.name;<br>"
          +"          $scope.name=a;<br>"
          +"          $scope.$apply(function () {<br>"
          +"              $scope.name=a;<br>"
          +"          })<br>"
          +"      });<br>"
      }, {
        id: '5',
        num:12,
        name: 'jquery',
        question: '事件是异步的，想要在执行完某个之后执行下一个事件',
        answer: "使用回调函数"
      }, {
        id: '6',
        num:12,
        name: 'jquery',
        question: '使用事件委托的时候，如果不执行或者直接就执行document上的事件',
        answer: "或许可以换一个执行事件， 比如，都是让click，可以将click更改为mousedown，换个思路来做"
      }, {
        id: '7',
        num:12,
        name: 'jquery',
        question: '使用jquery的三级联动地区的插件的时候，出现的问题',
        answer: "1）require中不需要引入city.min.js<br>"
               +"2）jquery.cityselect这个js需要进行define才能进行使用<br>" 
               +"3）jquery.cityselect这个中的默认配置中的url是相对于我的基本html来进行找路径的，否则，报错"
      }, {
        id: '8',
        num:12,
        name: 'jquery',
        question: 'jquery的close方法',
        answer: "获取到当前元素的最近的祖父元素"
      }, {
        id: '9',
        num:12,
        name: 'jquery',
        question: 'jquery的trigger方法',
        answer: '激活input的select方法，事先要先写好select方法，然后使用这个方法激活 $("input").select(function(){ $("input").after("文本被选中！");}); $("button").click(function(){ $("input").trigger("select");});'
      }, {
        id: '10',
        num:12,
        name: 'jquery',
        question: '使用jquery的select方法',
        answer: "当 textarea 或文本类型的 input 元素中的文本被选择时，会发生 select 事件。"
      }, {
        id: '11',
        num:12,
        name: 'jquery',
        question: 'jquery将数字转化成科学计数法形式展示，就是三个一组有一个逗号的样式  ',
        answer: "例如：this_.payMoney=Number(res.data.result).toLocaleString();"
      }, {
        id: '12',
        num:12,
        name: 'jquery',
        question: '使用ajax进行图片的上传提交',
        answer: " //上传图片    unloadImg(file,index){var this_ = this;<br>"+
          "let formData = new FormData();<br>"+
          "var type = file.type;<br>"+
          'if (type !="image/jpg" && type !="image/jpeg" && type !="image/bmp" && type !="image/png"&& type !="image/gif") {<br>'+
            'this_.$toast({mask: true,forbidClick:true,message: "请选择图片格式文件上传(jpeg,jpg,png,gif, bmp)！"  });<br>'+
            "return false;<br>"+
          "};<br>"+
          "formData.append('file', file);<br>"+
          "$.ajax({url:'http://192.144.141.33:8081/book/upload/uploadImage',type:'POST',data:formData,cache: false,contentType: false,<br>"+
            "processData: false,async: false,<br>"+
            "success:function(res){<br>"+
              "if(res.data.url){var imgurl=res.data.url;}else{<br>"+
                "this_.$toast({mask: false,message: res.message});<br>"+
              "}},<br>"+
            "error:function(){<br>"+
              'this_.$toast.loading({mask: true,message: "上传图片失败"});<br>'+
            "}<br>"+
          "})<br>;"+
        "}"
      }, 
      {
        id: '13',
        num:12,
        name: 'Angular',
        question: 'select使用时，如果直接在option上使用ng-repeat，可能会出现下拉列表中有留白情况',
        answer: "select id='type' ng-model='formData.type' ng-options='item.id as item.name for item in typeData'select<br>"
              +"解析：ng-options新鲜的指令，他的语法item.id as item.name for item in items。拿这句当案例，从后往前出现了三个关键字分别是in、for和as，<br>"
              +"this_in大家很熟悉从一个数组中依次遍历每一项的标识符，而for指代的是html5中option标签中的值，as 标签的意思是option标签中的value所对应的值<br>"
              +"如果我们要在每种选项前面多加一个“请选择”的选项，这时候只需要单独添加一个option标签行就成<br>"
              +"select id='type' ng-model='type' ng-options='item.id as item.name for item in items'option value='-1'请选择optionselect<br>"
              +"下拉框中经常使用的事件是ng-change；"
      }, 
      {
        id: '14',
        num:12,
        name: 'Angular',
        question: '使用分页了之后，怎么更改列表的序号',
        answer:"html中： <td ng-bind='{{orderNumber}}+$index+1'></td><br>"
               +"js中： $scope.orderNumber=20*($scope.currentPage-1);<br>" 
               +"20是当前一页显示的条数，$scope.currentPage指的是当前的页数"
      }, 
      {
        id: '15',
        num:12,
        name: 'Angular',
        question: '想后台请求后数据之后，始终报错（如右图）',
        answer: "后台返回的是一个字符串，这边解析不了，报错",
        imgurl:require("../../images/error.jpg")
      }, 
      {
        id: '16',
        num:12,
        name: 'Angular',
        question: 'angular使用分页，使用ui-bootstrap-tpls.js这个插件',
        answer: "在js中引入这个模块<br>"+   
          "var managerApp = angular.module('managerApp', ['ui.bootstrap']);<br>"+
          "设置一下$scope.currentPage = 1;  默认第一页页码<br>"+
          "$scope.maxSize = 20;     默认一页显示的最大条数<br>"+
          "$scope.totalItems=data.total;  总共数据有多少<br>"+
          "在html中<br>"+
          "<section class'row pageDemo' ><br>"+
          "  <section style='margin:0px auto;'><br>"+
          "  <pagination  total-items='totalItems' ng-model='currentPage' class='pagination-sm'  max-size='maxSize' previous-text='〈”next-text“=〉'  rotate='false' ng-change='getPageLists()'></pagination><br>"+
         " </section><br>"+
        "</section>"+
        "注意：这个分页的页码是根据itemsPerPage来计算的，所以根据需求来进行更改，你默认的是10，所以直接更改源码的itemsPerPage<br>"
      }, 
      {
        id: '17',
        num:12,
        name: 'Angular',
        question: '从后台获取的数据，如果是个对象，直接对这个对象进行操作，如删除等，会对原对象产生影响，这时就需要对这个对象进行深度克隆',
        answer: "var objNe w= angular.copy（原obj）；这样新对象进行任何操作，都不会对原对象产生影响"
      }, 
      {
        id: '18',
        num:12,
        name: 'Angular',
        question: '怎么将数据进行所有页面之间的传递',
        answer: "使用html5的locastorage或者是sessonstorage进行存储"
      }, 
      {
        id: '19',
        num:12,
        name: 'Angular',
        question: '当自定义了单选或者多选框的样式之后，点击label这个标签，会执行两次',
        answer: "只是因为label默认的有点击事件，解决方式是，将label换成别的标签来进行包住input"
      }, 
      {
        id: '20',
        num:12,
        name: 'Angular',
        question: '在js中写$scope.aa="111";怎么把aa作为参数传入html中？',
        answer: "<li ng-click=function（aa）{}></li>"
      }, 
      {
        id: '21',
        num:12,
        name: 'Angular',
        question: '怎么将取得的数据进行数据处理（数学的加减乘除)',
        answer: "1.使用angular的过滤器，自定义一个过滤器myIndex.filter('decimalFilter',function () {<br>"+//  定义过滤器的方法是return 后面的方法
              "return function (data) {<br>"+
                "return parseFloat(data)/100;};});<br>"+
              "2.将这个decimalFilter名字写入到对应的绑定的数据后面，如<br>"+
              "<span ng-bind='item.q|decimalFilter|number:2'></span>"
      }, 
      {
        id: '22',
        num:10,
        name: 'Angular',
        question: 'angular的loading效果（在study-2017.2-loading加载效果下）',
        answer: "1.引入loading-bar.css、loading-bar.js和  angular-animate.js（可引可不引，把自己需要的animates复制一个放在css中也行）；"+
                "2.在html     写入如下代码 <div id=’loading-bar-container‘></div>（可写可不写）"+
                "3.在js  注入模块  var myApp = angular.module('myApp', ['ngGrid','chieffancypants.loadingBar'（注入的加载插件）])"+
                "进行配置;"+ 
                "myApp.config(['cfpLoadingBarProvider',function(cfpLoadingBarProvider) {"+
                  "cfpLoadingBarProvider.includeSpinner = true;"+
                  "cfpLoadingBarProvider.spinnerTemplate = '<span class=”loading rhomb“></span>';（rhomb可以替换成css中的任何一个动画名字）"+
                  "}]);"+
                  "注入依赖，调用方法，将请求放在start下面"+
                  'myApp.controller("myCtrl",["$scope","$http","cfpLoadingBar",function($scope, $http, cfpLoadingBar) {'+
                      "$scope.start = function() {cfpLoadingBar.start();};"+
                      "$scope.complete = function() {cfpLoadingBar.complete();};"+
                      "cfpLoadingBar.start();（哪里请求将这句话放在哪里就行）"+
                      "$http.post('${ctx}/auditingTask/dmList.do').success(function(data) {}"+
                  "}]）",

      },
     {
        id: '23',
        num:12,
        name: 'dddddd',
        question: 'angular的loading效果（在study-2017.2-loading加载效果下）',
        answer: "1.引入loading-bar.css、loading-bar.js和  angular-animate.js（可引可不引，把自己需要的animates复制一个放在css中也行）；",

      }
    ]
    }
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
       if (columnIndex === 1 ) {
        if (rowIndex % row.num=== 0) {
          return {
            rowspan:  row.num,
            colspan:1
          };
        } else {
          return {
            rowspan:0,
            colspan: 1
          };
        }
       }
    },
    previewFn(imgurl){
      var this_ = this;
      this_.prewflag = true;
      this_.previewimg = imgurl;
    }
  }
};
</script>

<style scoped lang="scss" type="text/css">
.echartStudy_container {
  width: 100%;
  height: 100%;
  .prew_container{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0,0,0,0.5);
    overflow: hidden;
    span{
      position: absolute;
      right: 22%;
      top: 10%;
      font-size: 20px;
      color: white; 
    }
    img{
      position: absolute;
      width: 300px;
      height: 300px;
      top: 50%;
      left:50%;
      margin-left: -150px;
      margin-top: -150px;
      border: 1px solid black;
    }
  }
}
</style>