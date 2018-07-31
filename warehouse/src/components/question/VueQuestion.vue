<template>
  <div class="vue_container">
      <!-- :span-method="objectSpanMethod" -->
      <h4>API文档 -- 网格选项(https://angular-ui.github.io/ui-grid/)</h4>
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
          name: '使用百度地图api，怎么在vue中使用',
          question:"不想要全局引入，只想要在需要的页面进行引入，",
          answer: '解决方式：<br>'+
          '1.在index.html页面引入 《script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=zmAWIlHnn8qQ4qMKkBGtypeoZio5q86s"》《/script》'+
          '<br>2.新建一个map.js，export function MP(ak,a) {<br>return new Promise(function (resolve, reject) {<br>window.init = function () {<br>'+
          'resolve(BMap)};<br>var script = document.createElement("script");<br>script.type = "text/javascript";<br>'+
          'script.src = "http://api.map.baidu.com/api?v=2.0&ak="+ak+"&callback=init";<br>script.onerror = reject;document.head.appendChild(script);<br>'+
          '})}<br>3.在需要使用的vue页面引入map.js,<br>import {MP} from "map.js"<br> 在mounted或者其他钩子周期中使用<br>MP("ak码").then(BMap => {this.gpsMap = new BMap.Map("html中的id名",'+
          '{enableMapClick: true })<br>this.gpsMap.centerAndZoom(new BMap.point(116.404,39.915),13);})'
        },
        {
          name: '使用vue-resource，在下面使用不了resource中的http请求',
          question: '这个vue-resource是vue 的插件，插件一般是需要进行use，才能够在当前页面进行使用',
          answer:'1.使用npm i(小写) vue vue-respurce -save-dev，先装好<br>2.在需要的页面 import Vue from "vue";<br>'+
          'import VueResource from "vue-resource"<br>3.Vue.use(VueResource);<br>4.使用this.$http.get()'
        },
        {
          name: '有时候发现this指的不是vue实例',
          question: '在不同的位置有不同的情况',
          answer:'1.提前将this保存，例如 let that=this；<br>2.或者在函数后面fn（）.bind(this); 一般是在请求的时候，请求成功后的函数中的this可能会发生变化'
        },
       {
          name: '在vue中怎么使用sass？',
          question: 'http://blog.csdn.net/lily2016n/article/details/75309492 ',
          answer:"1.在build-》webpack.base.conf.js中module.export -> module ->rules ->增加这个对象{test: /\.sass$/,loaders: ['style', 'css', 'sass']}"+
         '2.在需要的vue的style标签中增加 lang="sass".3.可以使用了<br>'
        },
        {
          name: 'element-ui组件的下拉联动，获取不到对应的数据，无法联动；',
          question: '在select上加的是change事件，在这个事件中，获取到的值就是下拉选中的value的值，获取不到key或者label的值；',
          answer:'select的v-model储存的是：value中的值，我可以把我要传递给下一个下拉的值存储在这里；而我自己select下拉显示的值是在：label中存储，不会引起冲突；'+
         '想要进行联动，一般是使用watch来监听自己的v-model中的值，获取之后，比如v-model=“aa”,watch（）{aa（n,o）{'+
         '_this.optionCity(自己select的option中v-for循环的那个对象).forEach(item=>{'+
         'if(n==item.city_id){_this.optionStation（下一个下拉要循环的对象）=item.stations;}})}}<br>'
        },
       {
          name: '在联动的下拉中，想要默认的显示每个的第一条数据',
          question: '',
          answer:'在获取到的对象中，自己获取到第一个数据，给对应的model赋值；'
        },
        {
          name: 'vue在ie下报错，Error mount hook：promiss未定义什么的',
          question: '因为在ie下没有promiss，这个是es6的语法，所以报错',
          answer:'先在命令行 npm install es6-promise --save-dev<br>安装好后，在App.VUE页面全局引用，其他的页面都不需要在引用<br>'+
          "import promise from 'es6-promise';<br>promise.polyfill();"
        },
        {
          name: '使用element-ui常出现的一个问题',
          question: '[Vue warn]:Invalid prop:type check failed for prop "index" .Expected String,got Number',
          answer:'根据提示，将对应的这个属性改成需要的类型就好，比如现在这个报错，就是说，这个index属性必须是字符串，不能是数字类型'
        },
       {
          name: '优化使用echart导致打包文件太大的问题', 
          question: '使用echarts的时候，如果使用echarts的页面比较多，按需加载的话，最后打包的文件又很大，直接在index.html中引入又违背了vue的使用优势',
          answer:'那么我将echats直接放在外部或者自己的服务器上，每次在index.html中引入外部文件，不会增加打包文件的大小，减少浏览器响应时间，也可以'+
          '在vue的配置文件中，config下的index.js中productionGzip: true,打包成gzip文件，配合后台修改一些文件配置，在一般浏览器下就可以使用gzip文件'
        },
        {
          name: '使用moment的时候，', 
          question: '如果使用moment的页面比较多，按需加载的话，最后打包的文件又很大，应该怎么处理(https://segmentfault.com/a/1190000007020623)',
          answer:'首先要npm install moment，安装好之后，在main.js文件中引入， import moment from moment，Vue.prototype.$moment=moment;然后'+
          '直接将这个moment放在vue 的这个原型下，之后再所有的页面就可以进行this.$moment进行调用'
        },
        {
          name: 'vue中打包项目的时候，始终不出现vendor.js文件，', 
          question: '使用了jquery，我安装了jquery后，在build/webpack.base.conf.js进行增加了一个配置,<br>plugins: ['+
          'new webpack.ProvidePlugin({$: "jquery",jQuery: "jquery"})],',
          answer:'删除这个plagin块，在index.html中引入jquery就可以了'
        },
        {
          name: 'jquery还有moment这样的包，引入之后，会使vue打的包很大，如何解决', 
          question: '',
          answer:"对于jquery这个，不可以直接放在原型上，那么久放在assert下，使用import './assets/libs/jquery.min';"
        },
        {
          name: 'vue的@click事件中，如果想要使用event事件对象，要兼容火狐的时候，怎么处理？', 
          question: '',
          answer:"需要进行处理，@click($event),$event是vue下自己的事件对象，作为参数传入"
        },
        {
          name: 'vue的style的三元表达式怎么写', 
          question: '',
          answer:'<span v-bind:style="{’display‘:flag ? ’block‘:’none‘}" >搜索</span>'
        },
        {
          name: 'vue的class的表达式', 
          question: '',
          answer:':class="{ ’ImgIcon‘: staffimgAflag,’ImgGuan‘: staffflag ,’Imgopen‘:true}"；staffimgAflag，staffflag在data中定义为布尔值'
        },
        {
          name: 'vue路由的跳转', 
          question: '直接使用this_.$router.push({path:xxx,query:{xxx:xxx}})方法，出现不执行的问题',
          answer:'一般来说，使用这个是正常的路由跳转的方法，我的没有执行，是因为有路由守卫，也就是beforeRouterLeave这个方法给阻拦了，我没有写next（）；'+
          'beforeRouteLeave(to,from,next) {clearInterval(this.timer);clearInterval(this.timer60);next();  在当前页面写上这个就可以往下执行了。},'
        },
        {
          name: 'v-if和v-show是不占位的，都会直接dom节点消失掉', 
          question: '',
          answer:'如果想要改元素一直占位，在执行事件的时候显示或者隐藏，而不会影响其他结构的变动，使用：style来进行绑定，根据三元表达式的方式进行。使用'+
          '例如：<div class="prompt" :style="{‘opacity’:loginFlag ? ‘0’:‘1’}">请填写用户名或密码</div>loginflag在事件中进行true或者false的变换,'
        },
        {
          name: '根据路由进行不同的请求，进行不同的操作，怎么设置', 
          question: '刚开始想的是使用window.location.hash，觉得不是那么稳妥，然后想要使用$route.name来判断，结果发现{{$route.name}}在js页面是不可以使用的，'+
          '在.vue组件页面是可以使用的；在js页面必须使用this.$route.name。前提是找到这个this指的是vue这个对象。最后，选择了使用config.Url的方式',
          answer:'在axios页面的拦截器中写<br>axios.interceptors.request.use(<br>config => {'+    
          '比如url是11.1.11.2/login,要判断是否是login路由，判断是否>-1; <br>if(config.url.indexOf("login")>-1){<br>' +                                          
          'if(config.url.indexOf("login")>-1){console.log("这是登录页面");<br>}else{'+
          'let sessionNum = UTILS.SESSIONOPERATE.getStorage("csrftoken");这里写一部逻辑};<br>return config;<br> },function(error){'+
          'return Promise.reject(error)})'
        },
        {
          name: 'v-for循环出现报错，报重复键值对，可能会导致更新失败', 
          question: '要查找是哪块的列表中逻辑处理不正确，导致key值的重复，一定是代码出现了问题，耐心找',
          answer:'绑定的key值不是必须和value一样，可以绑定index的值，这样就不会出现上述的错误,保证key上绑定的值是绝对不会出现重复的值就可以'
        },
        {
          name: '直接在html中有点击跳转路由的操作', 
          question: '',
          answer:'<router-link :to="{path:‘/EditAddmodel’（跳转路由）,query: {name: item.name}}"><i class="iconfont icon-edit"  title="编辑cube"></i></router-link> '
        },
        {
          name: '$set的使用', 
          question: '当script的数据已经得到更新，但是页面中不发生变化的时候，',
          answer:'如果在实例创建之后添加新的属性到实例上，它不会触发视图更新,this_.$set(data,index,data[index]);'
        },
        {
          name: '阻止冒泡和阻止默认', 
          question: '阻止冒泡默认',
          answer:'阻止冒泡：@click.stop=fn();<br>阻止默认@click.prevent=fn()'
        },
        {
          name: '数据组件之间的传递', 
          question: '在A页面有一个公共部分header页面，操作这个header忠的数据，怎么可以影响到其他的页面，使其他页面数据也得到更新',
          answer:'进行路由的实时监控，前提是使用了vue-router；<br>methods:{indexListFn（）{}}<br>'+
          'watch:{"$route": "indexListFn"  想要更新的数据函数}'
        },
        {
          name: '整个框架之间的页面之间可以互相拿到数据，也可以对同一个页面进行修改', 
          question: '使用vuex',
          answer:'npm install vuex ；<br>新建一个store文件夹，在此文件夹下新建一个index.js；在该页面进行引入import Vuex from "vuex"'+
          'Vue.use(Vuex);  <br>接下来进行对数据的定义 const state ={num：1,name:"ddd"}；<br>const mutations={ changeNum(state, value){'+
          'state.num = value;},changeNum(state, value){state.name = value;}}<br>类似这样，吧需要的数据和需要怎么改变的函数放在各自的对象中'+
          '在需要这些数据的页面进行引入import { mapState, mapMutations } from "vuex";<br>,在当前页面 computed:{...mapState(["num","name" ])}'+
          '<br>在methods中...mapMutations(["changeNum","changeNum"])<br>然后，比如当num在某一个函数中发生变化了，就执行changeNum(num);其他页面就可以得到更新'
        },
        {
          name: '启动npm run dev的时候，报错', 
          question: '启动npm run dev的时候，报错，Failed to compile with 1 errors ，实际上在控制台是没有报错信息的，什么原因',
          answer:'一般这种错误是由丢失了文件，或者编译的时候找不到文件导致的，这时候，去查看为wbpack中的配置，看index.html的位置是否正确，'+
          '我出现的原因是我在webpack中进行了配置，后缀是html的文件需要使用loader导致的，删除了就可以了'
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