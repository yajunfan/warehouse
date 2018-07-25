<template>
  <div class="echartStudy_container">
    <h4>echarts属性大全</h4>
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
          title:"theme  -- echart全局主题，是一个对象 ",
          content1:'1）全图默认背景(backgroundColor) 2）默认色板(color) 3)图表标题(title)',
          content2:"1） backgroundColor: “rgba(0,0,0,0)” <br>2）color: ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed', '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0',"+
          "'#1e90ff','#ff6347','#7b68ee','#00fa9a','#ffd700', '#6699FF','#ff6666','#3cb371','#b8860b','#30e0e0']<br> 3）title: {<br>x: 'left', // 水平安放位置，默认为左对齐，可选为："+
          "'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）;<br>y: 'top', // 垂直安放位置，默认为全图顶端，可选为：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）"+
          "<br>textAlign: null // 水平对齐方式，默认根据x设置自动调整,;<br>borderColor: '#ccc',<br>borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）"+
          "padding: 5, // 标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距，同css<br>itemGap: 10, // 主副标题纵向间隔，单位px，默认为10，<br>text：'11111',标题名<br>"+
          "subtext：'215353',副标题名<br>textStyle: { fontSize: 18,fontWeight: 'bolder',color: '#333'} // 主标题文字颜色<br>subtextStyle: {color: '#aaa'} // 副标题文字颜色", 
        },
        {
          title:"theme下的属性 - 图例 && 值域 && 工具盒",
          content1:'1）图例（ legend） 2）值域（dataRange） 3)工具盒（toolbox）',
          content2:"1） legend:{<br>orient: 'horizontal', // 布局方式，默认为水平布局，可选为： 'horizontal' ¦ 'vertical',<br>x: 'center', // 水平安放位置，默认为全图居中，可选为：和之前的一样<br>"+
          "y: 'top', // 垂直安放位置，默认为全图顶端，可选为：同之前一样，<br>backgroundColor: 'rgba(0,0,0,0)',<br>borderColor: '#ccc', // 图例边框颜色, <br>borderWidth: 0, <br>padding: 5,"+
          "itemGap: 10, // 各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔,<br>itemWidth: 20, // 图例图形宽度, <br>itemHeight: 14, // 图例图形高度, textStyle: {}和title一样<br>"+
          "2）dataRange: { <br>orient: 'vertical',和图例一样，<br>x: 'left',<br>y: 'bottom',<br>color:['#1e90ff','#f0ffff'],//颜色，<br>borderColor: '#ccc', // 值域边框颜色， borderWidth: 0"+
          " 值域边框线宽splitNumber: 5, // 分割段数，默认为5，为0时为线性渐变,<br>其他的属性和图例一样<br>3）toolbox: {和图例一样，，不一样的是增加了itemGap: 10, // 各个item之间的间隔，"+
          " featureImageIcon : {},featureTitle : { mark : '辅助线开关',// 自定义图片icon，markUndo : '删除辅助线',markClear : '清空辅助线'，dataZoom : '区域缩放',dataZoomReset : '区域缩放后退',<br>"+
          "dataView : '数据视图',lineChart : '折线图切换',barChart : '柱形图切换',restore : '还原', saveAsImage : '保存为图片'", 
        },
        {
          title:"theme下的属性 - 提示框 && 值域 && 工具盒",
          content1:'1）图例（ legend） 2）值域（dataRange） 3)工具盒（toolbox）',
          content2:"1） legend:{<br>orient: 'horizontal', // 布局方式，默认为水平布局，可选为： 'horizontal' ¦ 'vertical',<br>x: 'center', // 水平安放位置，默认为全图居中，可选为：和之前的一样<br>"+
          "y: 'top', // 垂直安放位置，默认为全图顶端，可选为：同之前一样，<br>backgroundColor: 'rgba(0,0,0,0)',<br>borderColor: '#ccc', // 图例边框颜色, <br>borderWidth: 0, <br>padding: 5,"+
          "itemGap: 10, // 各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔,<br>itemWidth: 20, // 图例图形宽度, <br>itemHeight: 14, // 图例图形高度, textStyle: {}和title一样<br>"+
          "2）dataRange: { <br>orient: 'vertical',和图例一样，<br>x: 'left',<br>y: 'bottom',<br>color:['#1e90ff','#f0ffff'],//颜色，<br>borderColor: '#ccc', // 值域边框颜色， borderWidth: 0"+
          " 值域边框线宽splitNumber: 5, // 分割段数，默认为5，为0时为线性渐变,<br>其他的属性和图例一样<br>3）toolbox: {和图例一样，，不一样的是增加了itemGap: 10, // 各个item之间的间隔，"+
          " featureImageIcon : {},featureTitle : { mark : '辅助线开关',// 自定义图片icon，markUndo : '删除辅助线',markClear : '清空辅助线'，dataZoom : '区域缩放',dataZoomReset : '区域缩放后退',<br>"+
          "dataView : '数据视图',lineChart : '折线图切换',barChart : '柱形图切换',restore : '还原', saveAsImage : '保存为图片'", 
        }
      ]
    }
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  }
};
</script>

<style scoped lang="scss" type="text/css">
.echartStudy_container {
  width: 100%;
  height: 100%;
  h4{
    line-height: 32px;
    font-size: 16px;
  }
}
</style>