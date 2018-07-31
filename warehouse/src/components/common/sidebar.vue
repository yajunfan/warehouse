<template>
  <div class="index_container">
    <el-container style="border: 1px solid #eee;text-align:left">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="onRoutes" default-active="EchartStudy" router unique-opened style="height: 100%;">
          <el-submenu index="EchartStudy">
            <template slot="title"><i class="el-icon-message"></i>工具插件</template>
              <el-menu-item index="EchartStudy">echarts属性大全</el-menu-item>
              <el-menu-item index="D3Study">D3.js属性大全</el-menu-item>
              <el-menu-item index="G6Study">G6属性大全</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>问题总结</template>
              <el-menu-item index="EchartQuestion">echarts问题</el-menu-item>
              <el-menu-item index="CSSQuestion">css的问题</el-menu-item>
              <el-menu-item index="HtmlQuestion">js和angular的问题</el-menu-item>
              <el-menu-item index="VueQuestion">vue出现的问题</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>学习新知识</template>
              <el-menu-item index="ArborKnowledge">ARBOR</el-menu-item>
              <el-menu-item index="BaiMapKnowledge">百度地图</el-menu-item>
              <el-menu-item index="RequireKnowledge">require</el-menu-item>
              <el-menu-item index="CanvasKnowledge">canvas</el-menu-item>
              <el-menu-item index="Css3Knowledge">css3</el-menu-item>
              <el-menu-item index="NgGridKnowledge">ng-grid</el-menu-item>
              <el-menu-item index="WebpackKnowledge">webpack学习</el-menu-item>
          </el-submenu>
           <el-submenu index="4">
            <template slot="title"><i class="el-icon-setting"></i>案例</template>
              <el-menu-item index="RelationEm">人物动态关系图</el-menu-item>
              <el-menu-item index="FlowChartEm">流程图</el-menu-item>
              <el-menu-item index="StarEm">星空图</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-setting"></i>基础知识回顾</template>
              <el-menu-item index="MobileInterview">移动端知识</el-menu-item>
              <el-menu-item index="FEInterview">前端基础</el-menu-item>
              <el-menu-item index="FrameworkInterview">框架问题</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    onRoutes(){
      return this.$route.path.replace('/EchartStudy','');
    }
  }
}
</script>

<style>

</style>
