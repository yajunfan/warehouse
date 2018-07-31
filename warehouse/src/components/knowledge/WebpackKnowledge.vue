<template>
  <div class="vue_container">
      <!-- :span-method="objectSpanMethod" -->
    <el-table :data="tableData1" slot="empty"   border style="width: 100%; margin-bottom: 20px;text-align:left;font-size:14px;">
      <el-table-column type="index" label="序号" width="50" header-align="left" > </el-table-column>
      <el-table-column prop="name" label="名称"   header-align="left"></el-table-column>
      <el-table-column prop="question" label="需求" header-align="left"></el-table-column>
      <el-table-column prop="answer" label="解决" header-align="left">
        <template slot-scope="scope">
          <p v-html="scope.row.answer"></p>
        </template> 
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      previewimg:"",
      prewflag:false,
      tableData1:[
        {
          name: '关于package.json的安装', 
          question: '不一定全部安装',
          answer:'当执行npm install的时候，会发现有的包并没有下载安装，是因为有的已经存在我们全局（计算机中）了，他会直接拷贝计算机的镜像过来，'+
          '不会再去下载其他版本，所以使用webpack 的时候，不建议全局安装webpack，webpack会镜像，就必须依赖与这个版本，如果版本进行了更新'+
          '没办法进行更新的，除非全局的进行更新，这样不适用于项目的开发，在项目中，同时维护很多项目是很累的'
        },
        {
          name: 'webpack', 
          question: 'webpack安装',
          answer:'webpack安装的时候不建议进行全局安装，因为项目构建的时候可能需要的webpack的版本比较高，然后我们会在当前目录下安装高版本的webpack，'+
          '但是我们全局安装的版本较低，这时候项目会默认的寻找全局安装下的webpack，那么项目构建就会出现问题，一般就在自己的目录下进行安装webpack就好'
        },
        {
          name: '--save-dev', 
          question: 'webpack安装',
          answer:'一般安装依赖包的时候，我们会输入--save-dev，那么 --save的意思就是相当于这个项目中安装，然后-dev呢，表示在开发环境中出现，在以后'+
          '的生产环境中不需要用户下载，需要用户在打开页面的时候使用的就不写这个-dev<br>,'
        },
        {
          name: 'webpack安装的报错', 
          question: 'webpack安装的报错的原因',
          answer:'如果在安装webpack的时候，出现了错误，爆红，那么要从几个方面查找原因<br>1）查看node的版本是否太低'+
          '<br>2）如果node版本已经够高，那么久可能是网络问题，那么建议使用cnpm来进行安装https://npm.taobao.org '+ 
          '<br>3）可能是权限的问题，比如linux和mac等'
        },
        {
          name: '在新项目和旧项目中如何给webpack升级', 
          question: '在新项目和旧项目中如何给webpack升级',
          answer:'如果在新项目中，直接将node_module删除，然后重新安装就可以了，如果在旧项目中的话，需要手动在'+
          'package.json中更改webpack或者其他的依赖包的版本号，然后将node_module删除，再次重新安装就可以。'
        },
        {
          name: '在入口文件中引入其他的文件时，需要使用相对路径，不能使用绝对路径', 
          question: '在入口文件中引入其他的文件时，需要使用相对路径，不能使用绝对路径',
          answer:'在入口文件中引入其他的文件时，需要使用相对路径，不能使用绝对路径'
        },
        {
          name: '使用webpack，npm install', 
          question: '使用webpack，npm install 的一些注意点',
          answer:'比如，我们要安装jquery，如果直接输入npm install jquery的话，那么是不会出现在package.json中的，这只是将这个一拉装在本地'+
          '<br>,如果使用npm install jquery --save的话，那么会出现在package.json中的dependencies，这里放的就是我们生产环境中需要使用的'+
          '<br>如果使用npm install jquery --save-dev，就会出现在package.json中的devDependencies，表示在开发环境中也会需要这个包'+
          '<br>如果只想安装生成环境下的包，dependencies中的。使用npm install --production'
        },
        {
          name: '在webpack.base.config.js中，打印', 
          question: '在哪里可以看到打印结果',
          answer:'直接打印，打印是在终端看的，但是需要进行一下转码，比如encodeURIComponent(process.env.type)'
        },
        {
          name: '局部安装webpack', 
          question: '在项目中安装了webpack的时候，不是全局安装的话，直接使用webpack，报错，webpack命令找不到',
          answer:'这是因为，局部安装webpack的话，会安装在node_module下，那么直接照这个命令就找不大，这时候我们需要在package.json中'+
          '增加一个命令，在script中增加一个属性，比如build：“webpack”，在重点输入npm run build 的话，可以了，因为package.json会自己去'+
          'node_module中找webpack，就可以了'
        },
        {
          name: '在项目页面中使用img引入图片', 
          question: '在项目页面shi index.html后缀中使用img引入图片，直接打包的时候，其实这个src引入的图片是不会被打包进去的',
          answer:'这是因为，webpack不建议直接使用img来引入图片，那么我就需要进行配置，在webpack.base.config中配置'+
          "rules:[{test: /\.(htm|html)$/i,use:['html-withimg-loader']}]"
        },
        {
          name: '在项目页面中使用less', 
          question: '安装什么',
          answer:'首先要安装cnpm install --save-dev less，还需要再安装cnpm install --save-dev less-loader，单安装一个是不可以的，会报错<br>'+
          '在webpack。base.config中进行配置，rules:[{test: /\.less$/i,use:[{loader:"style-loader"},{loader:"css-loader"},{loader:"less-loader"}]}]'+
          'fallback:"style-loader"'
        },
        {
          name: '在项目页面中使用sass', 
          question: '安装什么',
          answer:'首先要安装npm install --save-dev node-scss，还需要再安装npm install --save-dev scss-loader，单安装一个是不可以的，会报错<br>'+
          '在webpack。base.config中进行配置，rules:[{test: /\.scss$/i,use:[{loader:"style-loader"},{loader:"css-loader"},{loader:"scss-loader"}]}],'+
          'scss-loader是依赖node-scss的，一定要先装node-scss，一般安装失败了，多是网络的原因，需要删除了整个'+
          'node_module，再去安装，要不是会安装失败的'
        },
        {
          name: 'css3在打包的时候，需要加前缀', 
          question: '怎么自动加前缀',
          answer:'安装npm install --save-dev postcss-loader autoprefixer，安装这两个，然后在和webpack.dev.config.js'+
           '同级，新建一个postcss.config.js，在这个js中写<br>module.exports={<br>plugins:[require("autoprefixer")]},然后在webpack.base/.config.js'+
           '中的css的test中，loader中增加一个"postcss-loader",这样在打包的时候，需要加前缀的就会自动加上'
        },
        {
          name: '删除无用的css', 
          question: '在项目中，随着项目的增大，会有一些无用的css产生，比如，没有的dom元素，怎么删除无用的css',
          answer:'安装npm install --save-dev purifycss-webpack purify-css，安装这两个，然后在webpack.dev.config.js中引入'+
           'const glob = require("glob");const PurifyCSSPlugin = require("purifycss-webpack");,然后在plugins:['+
           'new PurifyCSSPlugin({//进行一个同时搜索<br>paths:glob.sync(path.join(__dirname, "src/*.html"))})]'
        },
        {
          name: 'bablerc', 
          question: '这个文件是什么作用',
          answer:'这里是对babel-loader的配置'
        },
        {
          name: '打包后的代码调试', 
          question: '怎么在打包后进行调试',
          answer:'在生产环境是不会写devtool这个属性的，在开发环境写。source-map:在一个单独文件中产生一个完整且功能完全的文件。这个文件具有最好的source map,但是它会减慢打包速度；<br>'+
          'cheap-module-source-map:在一个单独的文件中产生一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只'+
          '能对应到具体的行，不能对应到具体的列（符号）,会对调试造成不便。<br>eval-source-map:使用eval打包源文件模块，在同一个文件中'+
          '生产干净的完整版的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段'+
          '则一定要不开启这个选项。<br>cheap-module-eval-source-map:这是在打包文件时最快的生产source map的方法，生产的 Source map '+
          '会的JavaScript文件同行显示，没有影射列，和eval-source-map选项具有相似的缺点。'
        },
      ],
    }
  },
  methods: {
    previewFn(imgurl){
      var this_ = this;
      this_.prewflag = true;
      this_.previewimg = imgurl;
    }
  }
};
</script>

<style scoped lang="scss" type="text/css">
.vue_container {
  width: 100%;
  height: 100%;
  h4{
    line-height: 36px;
    font-size: 18px;
    background: blue;
    color: white;
    font-weight: bolder;
  }
}
</style>