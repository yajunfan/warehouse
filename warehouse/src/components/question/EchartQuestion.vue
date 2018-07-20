<template>
  <div class="echartStudy_container">
    <el-table :data="tableData" slot="empty" :span-method="objectSpanMethod"  border style="width: 100%; margin-bottom: 20px;text-align:center;font-size:14px;">
      <el-table-column prop="id" label="序号" width="80" header-align="center"> </el-table-column>
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
          <textarea v-else rows="2" v-model="scope.row.answer" style="width:100%;font-size:14px;color:#606266"></textarea>
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
        num:6,
        name: '增加y轴名字以及各种样式 yAxis: {},都在该对象中增加属性',
        question: '增加名字',
        answer: "添加属性: name:'增长速度'"
      }, {
        id: '1',
        num:6,
        name: '增加y轴名字以及各种样式 yAxis: {},都在该对象中增加属性',
        question: '增加名字样式',
        answer: "添加属性: nameTextStyle:{color: '#1e90ff',fontFamily: 'verdana',fontSize: 16, },"
      }, {
        id: '1',
        num:6,
        name: '增加y轴名字以及各种样式 yAxis: {},都在该对象中增加属性',
        question: '增加名字与y轴之间的距离',
        answer: "添加属性：nameGap:40,"
      }, {
        id: '1',
        num:6,
        name: '增加y轴名字以及各种样式 yAxis: {},都在该对象中增加属性',
        question: '增加y轴坐标之间的差值',
        answer: "添加属性: boundaryGap: [0, 0],上和下的"
      }, {
        id: '1',
        num:6,
        name: '增加y轴名字以及各种样式 yAxis: {},都在该对象中增加属性',
        question: '名字的位置',
        answer: "添加属性: position: 'left'"
      }, {
        id: '1',
        num:6,
        name: '增加y轴名字以及各种样式 yAxis: {},都在该对象中增加属性',
        question: '增加网格',
        answer: "添加属性: splitLine:{show: true}"
      }, {
        id: '2',
        num:2,
        name: '改变图标右上角的切换图标样式,在<br>toolbox{ <br>iconStyle：{<br>normal:{<br>emphasis:{}}}，<br>http://echarts.baidu.com/option.html#toolbox.iconStyle',
        question: '改变图标的颜色等',
        answer: "在normal中写borderWidth:1,borderColor:'white'"
      }, {
        id: '2',
        num:2,
        name: '改变图标右上角的切换图标样式,在<br>toolbox{ <br>iconStyle：{<br>normal:{<br>emphasis:{}}}，<br>http://echarts.baidu.com/option.html#toolbox.iconStyle',
        question: '改变鼠标经过图标的样式',
        answer: "在emphasis写"
      }, {
        id: '3',
        num:1,
        name: '改变折线图折点的样式',
        question: '将折点由空心变成实心',
        answer: '在series:[{}]数组的对象中增加   symbol:"circle"'
      }, {
        id: '4',
        num:1,
        name: '使用echarts做折线图的时候，想要任意切换折线图、柱状图，返回，下载、导出等，怎么做？',
        question: '任意切换',
        answer: "直接在option中设置 toolbox: {feature: {dataZoom: {yAxisIndex: 'none'},dataView: {readOnly: false},magicType: {type: ['line', 'bar']},restore: {},saveAsImage: {}}}"
      }, {
        id: '5',
        num:1,
        name: '使用echarts地图功能的时候，怎么将地图引入',
        question: '将地图引入',
        answer: "导入jquery（为了之后请求数据使用）、echarts.js、china.js（这是中国地图的js，还有对应的json文件一并获取，其他各省的或者世界地图的这个网址http://echarts.baidu.com/download-map.html获取）"
      }, {
        id: '6',
        num:1,
        name: '使用echarts进行节点操作的时候，怎么进行操作？',
        question: '节点操作',
        answer: "myChart.on('click', function (params) {console.log(params);});"
      }, {
        id: '7',
        num:1,
        name: '当进行dom操作的时候，阻止冒泡实现不了？',
        question: '阻止冒泡',
        answer: "在echarts中的event事件和我们平时js中的event不一样，所以要在别处进行原始event的保存，然后在echarts中进行使用"
      }, {
        id: '8',
        num:1,
        name: 'echarts力导图中节点进行更改形状或者大小，或者指定形状怎么做？',
        question: '力导图中节点进行更改形状',
        answer: "使用option -> series -> nodes -> symbolSize: 数值  --->更改节点的大小"+
        "<br>使用option -> series -> nodes -> symbol: 'circle'或者 'rect'或者 'roundRect'或者 'triangle'或者 'diamond'或者'pin'或者 'arrow'"+
        "'<br> 或者'image://url  --->更改节点的形状样式，最后一个是将节点更改成图片；"
      }, {
        id: '9',
        num:1,
        name: 'echarts图怎么能够获取他的某一帧的图片',
        question: '获取他的某一帧的图片',
        answer: "首先要有一个canvas的盒子，对canvas盒子进行宽高的设置，以及初始化之后进行放置；"+
                    "var offcanvas = myChart.getRenderedCanvas({pixelRatio: 1,});"+
                   "ctx.drawImage(offcanvas,0,10,1058,800);参数的意思分别是：（img，x，y，width，height）(x,y从这个坐标开始作图)"+
                  "截止到这一步，就将某一帧的动画保存到canvas上，之后可以设置定时器或者别的，让这个canvas随时变化"+
                   "2）将canvas画布保存成图片（http://www.webhek.com/convert-canvas-image/ ）"+
                   "function convertCanvasToImage(canvas,image) {"+
                     "srcCan=canvas.toDataURL('image/png');  //获取到图片信息，这里获取到的是图片的base64码"+
                      "image.src =srcCan;"+
                    "return image;}"+
                    "3）根据需要执行这个函数，设置判断逻辑"
      }, {
        id: '10',
        num:1,
        name: ' 使用require和angular的时候引用echarts，报错，说明echarts这个服务没有被注入',
        question: '使用require和angular',
        answer: "在app中进行配置服务app.factory('echarts',function(){return echarts;});"+
                "然后要注意的是，要引用3.0以上的echarts的版本，使用低版本的不可，不需要对echarts中进行改变，直接引用就可， 不需要写defined"
      }, {
        id: '11',
        num:1,
        name: ' 使用echarts的柱图的渐变，使用的是实例化lineargradi这个，但是自定义下载下的echarts报错，未定义这个函数',
        question: '使用新版的显示渐变的方式 如右图',
        answer: "",
        imgurl:require("../../images/jianbcolor.png")

      }, {
        id: '12',
        num:1,
        name: ' 使用echarts中，y轴的刻度文字太长，导致柱图的柱长太短',
        question: '使文字换行',
        answer: "使用方法，在需要的地方调用http://blog.csdn.net/qq_34531925/article/details/78258820;"+
        "function newline(option, number, axis){"
            +"  /* 此处注意你的json是数组还是对象 */"
            +"  option[axis][0]['axisLabel']={"
                 +" interval: 0,"
                 +" formatter: function(params){"
                     +" var newParamsName = '';"
                    +"  var paramsNameNumber = params.length;"
                    +"  var provideNumber = number;"
                    +"  var rowNumber = Math.ceil(paramsNameNumber / provideNumber);"
                    +"  if (paramsNameNumber > provideNumber) {"
                         +" for (var p = 0; p < rowNumber; p++) {"
                            +"  var tempStr = '';"
                            +"  var start = p * provideNumber;"
                             +" var end = start + provideNumber;"
                             +" if (p == rowNumber - 1) {"
                               +"   tempStr = params.substring(start, paramsNameNumber);"
                             +" } else {tempStr = params.substring(start, end) + '\n';}"
                             +" newParamsName += tempStr;"
                       +" }"
                    +"} else {newParamsName = params;}"
                +"return newParamsName;}}"
           +" return option;}"

      }, {
        id: '13',
        num:1,
        name: '将折线图的折现变成平滑线  ',
        question: '改变线条的展现形式 如右图',
        answer: "",
        imgurl:require("../../images/smooth.png")
      }, {
        id: '14',
        num:1,
        name: '将图表的线的起点位置设置为0点，而不是每个线段的中间点',
        question: '改变属性boundaryGap 如右图',
        answer: "",
        imgurl:require("../../images/boundGap.png")
      }, {
        id: '15',
        num:1,
        name: '修改折线图的点的样式，一个实心点外加一个暗色的光圈',
        answer: '',
        question: "series: [{ symbolSize: 8,symbol: 'circle',"
           +"itemStyle: { <br>"
             +"normal: { <br>"
              +" color:'#E1285B', <br>"
              +" borderColor: 'lightgrey', <br>"
              +" borderWidth: 3, <br>"
              +" shadowColor: 'rgba(0, 0, 0, 0.1)', <br>"
               +"shadowBlur: 5, <br>"
               +"shadowOffsetX: 2, <br>"
              +" shadowOffsetY: 5 <br>"
              +"}"
           +" }}]",
        imgurl:require("../../images/circle.png")
      },{
        id: '16',
        num:1,
        name: '如何给柱图上写上的label加上百分数，一般来说，直接在数据中写百分数是错误的，所以我们就需要在显示的时候进行梳理数据，进行数据格式化',
        question: "一般情况下，我们直接在：<br>series: [{<br>"
               +" label：{<br>"
                  +"normal:{formatter:'{c0}%'}}<br>"
         +" }]<br>"
        +"如果该方法为公用的，而其他地方又不需要写百分数，就需要在需要的地方进行修改<br>"
        +"例如：optionTop.series[1].label.normal['formatter']='{c0}%';"
        +"https://blog.csdn.net/u011019141/article/details/52804498",
        answer: "",
        imgurl:require("../../images/precent.png")
      },{
        id: '17',
        num:1,
        name: '如何给柱图上加上自己的背景色（如图）',
        question: "这里其实是两个bar，只不过和长的那个bar的数据设置一致，始终存在，并且bargap是-100%"
        +"series: [{type: 'bar',data: bgBarNum,itemStyle: {normal:{ color: '#295b8a',barBorderRadius: 8},},barWidth: '24',silent: true,barGap: '-100%',},"
        +"{name: lengthName,type: 'bar',data: xData,itemStyle: {normal:{ color:'#4bbaf3',barBorderRadius: 8},emphasis: {color:'#4bbaf3',barBorderRadius: 10}},barWidth: '24',"
        +"label: {normal: {show: true,position: valuePosition,fontSize:12,color:'#011f32',}}},"
        +"http://www.echartsjs.com/gallery/editor.html?c=doc-example/barGrid-barGap",
        answer: "",
        imgurl:require("../../images/barbg.png")
      },{
        id: '18',
        num:1,
        name: '如何自定义工具栏',
        question: "option中的 -- toolbox.feature.myTool1 ={show: true, title: '返回', -- 工具要提示的名称"
              +"icon: 'path://M511.213557 65.37494c-245.875761 0-445.212719 199.317535-445.212719 445.184245s199.336958 445.184245 445.212719 445.184245c245.898275 0 445.222953-199.316511 445.222953-445.184245S757.111832 65.37494 511.213557 65.37494zM511.236071 911.129326c-220.774055 0-400.391095-180.345438-400.391095-400.919089 0-220.570581 179.61704-400.004253 400.391095-400.004253 220.776102 0 400.391095 179.433672 400.391095 400.004253C911.627165 730.783889 732.012172 911.129326 511.236071 911.129326zM711.648568 488.437351 348.187037 488.437351l132.332216-141.90494c8.681062-8.691963 8.681062-22.772656 0-31.465642-8.703576-8.692986-22.786893-8.692986-31.467955 0L267.533901 511.168052l178.72468 197.47149c4.356393 4.347005 10.049279 6.541997 15.733977 6.541997 5.692886 0 11.387818-2.194992 15.733977-6.541997 8.694366-8.67252 8.694366-22.750143 0-31.469736l-130.961953-144.224776 364.885008 0c12.290411 0 22.254752-9.954723 22.254752-22.255887C733.90332 498.410494 723.937956 488.437351 711.648568 488.437351z',  图片路径，"
              +"可以在阿里矢量网上找到想要的路径"
              +" onclick: function (){this_.searchback(); } };"
              +"但是没有onmouseover 的方法，有click的方法",
        answer: "http://echarts.baidu.com/option.html#toolbox.feature",
      }]
    }
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1 || columnIndex === 0 ) {
        if (rowIndex % row.num === 0) {
          return {
            rowspan: row.num,
            colspan:1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
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