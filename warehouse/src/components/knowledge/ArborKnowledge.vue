<template>
  <div class="arbor_container">
      <!-- :span-method="objectSpanMethod" -->
    <el-table :data="tableData1" slot="empty"   border style="width: 100%; margin-bottom: 20px;text-align:left;font-size:14px;">
      <el-table-column type="index" label="序号" width="50" header-align="left" > </el-table-column>
      <el-table-column prop="name" label="名称"  width="80" header-align="left"></el-table-column>
      <el-table-column prop="effect" label="介绍" header-align="left"></el-table-column>
    </el-table>
    <el-table :data="tableData2" slot="empty"   border style="width: 100%; margin-bottom: 20px;text-align:left;font-size:14px;">
      <el-table-column type="index" label="序号" width="50" header-align="left" > </el-table-column>
      <el-table-column prop="name" label="属性和方法" width="150" header-align="left"></el-table-column>
      <el-table-column prop="effect" label="用法及作用" header-align="left">
        <template slot-scope="scope">
         <p v-html="scope.row.effect"></p>
        </template>
      </el-table-column>
      <el-table-column prop="parameter" label="参数" header-align="left"> 
        <template slot-scope="scope">
          <p v-html="scope.row.parameter"></p>
        </template>
      </el-table-column>
      <el-table-column prop="meaning" label="意义" header-align="left"> 
        <template slot-scope="scope">
          <p v-html="scope.row.meaning"></p>
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
          name: '介绍',
          effect: 'Arbor 是一个利用 Web Works 和 jQuery 创建的可视化图形库，它为图形组织和屏幕刷新处理提供了一个高效的、力导向的布局算法。是一个画动态连接图的js库。'+
                    '对于你来说，这个arbor离开实际screen-drawing。,这意味着您可以使用SVG或者canvas,甚至定位HTML元素,无论显示方法是适合您的项目,您的性能需求。'+
                    '结果就是你编写的代码可以关注的事情,让您的项目独特的图形数据和视觉风格,而不是花时间在物理数学的布局。'+
                    '安装<br>'+
                    '使用粒子系统,让jQuery和添加文件lib /arbor.js到您的路径,并将它们包括在你的HTML:'+
                    '< script src = "路径/ / jquery.min.js " > < /script>'+
                    '< script src = "路径/ / arbor.js " > < /script>'+
                    '如果你想让arbor处理实时颜色和tween的值类,包括arbor-tween.js文件。这将添加一条新的渐变ParticleSystem对象的方法'+
                    '< script src = "路径/ / jquery.min.js " > < /script>'+
                    '< script src = "路径/ / arbor.js " > < /script>'+
                    '< script src = "路径/ / arbor-tween.js " > < /script>'+
                    '开始<br>'+
                    '源分布包含一个示例项目,展示了一些基本的习语与图书馆合作建立一个可视化。更详细的文档可以在参考资料小节中找到。'+
                    '此外,演示源分布的文件夹包含独立版本的演示。但由于他们使用XHR取回他们的数据,你仍然需要把它们从一个http服务器。如果你没有一份apache方便,使用演示服务器。sh脚本创建一个本地服务器。'+
                    '贡献<br>'+
                    '代码提交大大赞赏和高度鼓励。请将把请求与修复、增强等在github samizdatco。版的也管gro.sjrobra@ofni diff - u输出。'+
                    '许可证<br>'+
                    'arbor在MIT许可下发布的。'+
                    '版本记录<br>'+
                    '强力的物理代码最初是改编自丹尼斯Hotson springy.js。'+
                    'Barnes-Hut n体的实现是基于汤姆Ventimiglia和凯文·韦恩的生动的描述算法。感谢所有的优雅简单且易于理解的代码。',
        },
        {
          name: '缺点',
          effect: '实际使用中，发现有个bug，就是如果只构造一个节点，就会陷入死循环，所以要避免。下面是当时使用的代码。'
        }
      ],
      tableData2: [
        {
            num:6,
            name: 'ParticleSystem',
            effect: '粒子系统存储节点和边和处理更新他们的坐标作为模拟的进展，一旦创建了粒子系统,参数可以通过传递一个对象调整。参数的方法:'+
                    'var sys = arbor.ParticleSystem();<br>sys.parameters({gravity:true, dt:0.005})',
            parameter: "arbor.ParticleSystem(repulsion, stiffness, friction, gravity, fps, dt, precision)",
            meaning:"斥力（repulsion）：排斥1000互相排斥的力节点<br>刚度（stiffness）：硬度600边的僵化<br>摩擦（friction）：0.5摩擦阻尼系统的数量<br>"+
                    "重力（gravity）：重力假额外的力量吸引节点到原点<br>fps ： 55帧每秒<br>dt  ：0.02步伐用于仿真<br>精度：0.6精密计算精度与速度力量<br>"+
                    "将用于任何省略参数默认值。参数也可以通过在一个文字对象。"
        },
        {
            num:6,
            name: 'renerding',
            effect: "粒子系统自己不做任何处理来画。你需要在一个单独的对象提供这些例程,在引发的屏幕重绘的系统时候，设置,创建一个对象(有两个方法。init和.redraw)"+
                    ",然后将粒子系统的渲染器属性设置为你的新对象:",
            parameter: "var myRenderer = {init函数(系统){ console.log(“开始”,系统)},重绘:函数(){ console.log(“画”)}};var 系统(sys)= arbor.ParticleSystem()"+
                       "sys.渲染器（renderer）= myRenderer（aa）。init方法将会在第一次通过循环调用以前定义。然后，每次屏幕重绘方法将需要调用re-plotted。",
            meaning:"aa:表示对应的canvas的id名或者是class或者元素标签等"
        },
        {
            num:6,
            name: 'NODES（节点）---  addNode',
            effect: '粒子系统中创建一个新节点,并返回结果节点对象。',
            parameter: "addNode(name, data)",
            meaning:"name：是用于一个标注粒子系统上有关的这个节点<br>"+
                    "data：是一个用户自己创建的对象，使用这个来存储关于节点上的附加信息 "
        },
        {
            num:6,
            name: 'NODES（节点）--- getNode',
            effect: '返回对应的节点的对象，如果没有发现，那就是undefined，如果将一个节点作为参数，那么将返回相同的节点',
            parameter: "getNode(name)",
            meaning:"name：是一个已经在粒子系统中存在的节点标识符"
        },
        {
            num:6,
            name: 'NODES（节点）--- pruneNode',
            effect: '从粒子系统中删除相应的节点(以及任何一个参与者)的边缘。',
            parameter: "pruneNode(node)",
            meaning:"node:是一个标识符的字符串或者是一个节点对象"
        },
       {
            num:6,
            name: 'EDGES(边缘) --- addEdge',
            effect: '创建一个新的边缘连接源和目标节点然后返回边缘对象的结果',
            parameter: "addEdge(source, target, data)",
            meaning:"source和target:都是指一个标识符的字符串或者是一个节点对象<br>data：是一个有额外的边缘信息的用户数据对象"
        },
        {
            num:6,
            name: 'EDGES(边缘) --- getEdges',
            effect: '返回一个数组,其中包含所有边缘对象连接指定的节点。如果不存在连接,返回[]。',
            parameter: "getEdges(source, target)",
            meaning:"source和target:都是指一个标识符的字符串或者是一个节点对象"
        },
        {
            num:6,
            name: 'EDGES(边缘) --- getEdgesFrom',
            effect: '返回一个数组,其中包含所有边缘节点的源对象。如果不存在连接,返回[]。',
            parameter: "getEdgesFrom(node)",
            meaning:"node:是一个标识符的字符串或者是一个节点对象"
        },
        {
            num:6,
            name: 'EDGES(边缘) --- getEdgesTo',
            effect: '返回一个数组,其中包含所有边缘节点的目标对象。如果不存在连接,返回[]。',
            parameter: "getEdgesTo(node)",
            meaning:"node:是一个标识符的字符串或者是一个节点对象"
        },
        {
            num:6,
            name: 'EDGES(边缘) --- pruneEdge',
            effect: '从粒子系统中删除相应的边缘。',
            parameter: "pruneEdge(edge)",
            meaning:"edge:是一个边缘对象。"
        },
        {
            num:6,
            name: 'ITERATION（迭代） --- eachNode',
            effect: '迭代每一个节点，然后做出相应的操作',
            parameter: "eachNode(callback)",
            meaning:"callback:是一个函数ƒ(node,pt)<br>node：是一个节点对象 pt：是当前位置是一个点对象<br>回调函数将被调用系统中每个节点一次。"+
                    "<br>注意,当node.p.attribute总是在粒子系统的坐标系,pt参数转换成像素坐标(只要你有。拉指定屏幕边界框)。"
        },
        {
            num:6,
            name: 'ITERATION（迭代） --- eachEdge',
            effect: '迭代每一个边缘，然后做出相应的操作',
            parameter: "eachEdge(callback)",
            meaning:"callback:是一个函数ƒ(edge, pt1, pt2) <br>edge是一个边缘对象<br>pt1 pt2：当前端点位置点对象。<br>回调函数将被调用系统中每条边一次。"+
                    "<br>和eachNode相似， the edge.source.p and edge.target.p attributes 在粒子系统的坐标系中，pt1和pt2将转换成像素坐标"
        },
        {
            num:6,
            name: 'MODIFICATION （修改） --- graft',
            effect: '添加节点和边到当前粒子系统中设置，叶子对象值的分支参数将通过.data生成的节点和边的属性获取。',
            parameter: "graft(branch)",
            meaning:"branch：是一个对象的形式{{nodes:{}, edges:{}}<br>nodes：包含的是要映射到数据对象上的节点名称<br>"+
            "如：{ nodes:{foo:{color:'red', mass:2},<br>bar:{color:'green'}} };<br>edges:包含的是映射到目标的的嵌套对象的标识符"+
            "{ edges:{bar:{foo:{similarity:0},baz:{similarity:.666}} }"     
        },
        {
            num:6,
            name: 'MODIFICATION （修改） --- merge',
            effect: '添加节点和边到当前设置的粒子系统并且删除任何一个不存在的的新分支。保存的节点将保持他们的位置和状态。',
            parameter: "merge(branch)",
            meaning:"brance: 是一个对象的形式{nodes:{}, edges:{}}"
        },
        {
            num:6,
            name: 'MODIFICATION （修改） --- prune',
            effect: '回调函数将被调用系统中的每个节点一次,返回true,如果节点应该修剪或什么也不做,如果节点应该保持不变的。注意修剪一个节点也将删除所有边缘的参与',
            parameter: "prune(callback)",
            meaning:"callback:是一个函数ƒ(node, from, to)<br>node：节点对象；from和to是边缘数组的中node的源和目标"
        },
        {
            num:6,
            name: 'SYSTEM SETTINGS （系统设置） --- parameters',
            effect: '创建一个新的粒子系统,如果存在,参数是一个对象包含新的粒子系统的设置值。有效的键和ParticleSystem构造函数中的参数一样:斥力,刚度、摩擦,重力,'+
            'fps,dt。如果不带参数,调用返回一个对象与当前系统参数的键和值。如果提供一个参数,指定任何值将被用作新参数(省略值将保持不变)。',
            parameter: "parameters( ) or (params)",
            meaning:"有参数：就和ParticleSystem中一样，没有参数，就是使用默认的，单反有一个参数，那就使用新参数，其他省略的就保持默认"
        },
        {
            num:6,
            name: 'SYSTEM SETTINGS （系统设置） --- fps',
            effect: '如果存在,fps参数是一个正整数。',
            parameter: "fps( ) or (fps)",
            meaning:"如果不带参数,调用返回帧率达到了过去几秒钟的绘画。否则点将设置新的目标帧率。这会影响粒子系统迭代仿真的频率以及ParticleSystem调用的频率。重新绘制的对象指向的方法。渲染器属性"
        },
        {
            num:6,
            name: 'SYSTEM SETTINGS （系统设置） --- bounds',
            effect: '返回的是一个使用系统坐标的包含所有节点的边界框，返回的形式是{ topleft:{x:,y:},bottomright:{x:, y:}}',
            parameter: "bounds( )",
            meaning:"无参数"
        },
        {
            num:6,
            name: 'SYSTEM SETTINGS （系统设置） --- energy',
            effect: '在活动状态的系统返回一些基本的统计数据，值就是在系统的坐标系中的速度。当布局已经稳定，这可能是一个有用的措施。的返回值是形式:'+
                    '{sum:, max:, mean:, n:}',
            parameter: "energy( )",
            meaning:"无参数"
        },
        {
            num:6,
            name: 'SYSTEM SETTINGS （系统设置） --- start',
            effect: '手动启动系统运行',
            parameter: "start()",
            meaning:"手动启动系统运行。默认情况下,系统将运行和暂停基于能量的粒子。你只需要在.stop方法之后开始手动启动"
        },
        {
            num:6,
            name: 'SYSTEM SETTINGS （系统设置） --- stop',
            effect: '暂停粒子运动',
            parameter: "stop()",
            meaning:"暂停粒子模拟只带.Start开启，系统开始运行后尽快提供您可能希望调用的节点和边,。创建系统对象如果停止后事件太短不会显示在页面的生命周期(如。,直到用户操作发生)。"
        },
        {
            num:6,
            name: 'COORDINATE （协调） --- screenSize（屏幕大小）',
            effect: '调用该方法可以自动从粒子坐标转换系统显示的坐标系统。这可以提供的点.eachNode和.eachEdge迭代器/ fromScreen和最近的方法以及在这一节中。'+
                    '你将几乎总是想叫这一次当设置ParticleSystem和渲染器以及每当显示区域的尺寸变化。',
            parameter: "screenSize(width, height)",
            meaning:"width和height是正整数，定义您将绘图的尺寸的屏幕区域。"
        },
        {
            num:6,
            name: 'COORDINATE （协调） --- screenPadding（屏幕填充）',
            effect: '所有参数都是整数,定义像素的数量应沿着每条边的显示区域留空1、2或4预计参数,解释类似CSS的padding：property。',
            parameter: "screenPadding(top, right, bottom, left)",
            meaning:"当系统坐标系统之间的变换点将因素填充到它所提供的位置.eachNode和公司。"
        },
        {
            num:6,
            name: 'COORDINATE （协调） --- screenStep（屏幕缩放）',
            effect: '随着节点移动和边界框的变化,,系统变量的平滑量适用于摄像机的运动.当步长逼近1时，平滑量随着边界更新变得更加瞬时而减小。',
            parameter: "screenStep(stepsize)",
            meaning:"stepsize:0和1之间的数字,定义边界框应从一帧移动到下一帧的量,"
        },
        {
            num:6,
            name: 'COORDINATE （协调） --- screen',
            effect: '这是一个简化的方法，结合了前三个的功能。 如果在没有参数的情况下调用，则返回当前屏幕大小/填充/缩放。 如果提供了参数，请相应地更新设置',
            parameter: "screen() or (opts)",
            meaning:"opts如果存在，是一个对象的形式{ size:{width:400, height:300},padding:[1,2,3,4],step:.1 }"
        },
        {
            num:6,
            name: 'COORDINATE （协调） --- toScreen',
            effect: '基于当前屏幕大小和填充将x和y转换为屏幕坐标，将结果作为新的Point对象返回。 如果尚未设置大小或系统尚未启动，则将返回未定义。',
            parameter: "toScreen(systemPoint)",
            meaning:"systemPoint：一个Point对象，其x和y值使用的是系统的内部设置坐标方案。"
        },
        {
            num:6,
            name: 'COORDINATE （协调） --- fromScreen',
            effect: '基于当前屏幕大小和填充，将x和y转换为系统坐标，将结果作为新的Point对象返回。 如果尚未设置大小或系统尚未启动，则将返回未定义。',
            parameter: "fromScreen（screenPoint）",
            meaning:"screenPoint是一个Point对象，其x和y值使用屏幕的像素坐标。"
        },
        {
            num:6,
            name: 'COORDINATE （协调） --- nearest',
            effect: '返回一个对象形式保存的的最近的节点参数的屏幕位置的对象{node :, point :, distance：}节点和点将是同名对象或null，这取决于是否存在任何此类节点。 距离以像素为单位。',
            parameter: "nearest（screenPoint）",
            meaning:"screenPoint是一个Point对象，其x和y值使用屏幕的像素坐标。"
        },
        {
            num:6,
            name: 'nearest中包含的参数 --- node',
            effect: '节点对象封装了粒子系统中一个点的当前物理状态，以及给你一个附加相关非物理元数据的地方node下有distance、node、point、node下有（fixed、mass、_id、p(下面有x,y)、data），point下面有（x，y）',
            parameter: '新节点通过粒子系统的.addNode方法创建。<br>sys = arbor.ParticleSystem(); <br>node = sys.addNode("mynode", {mass:2, myColor:"goldenrod"})<br>'+
                       '这将创建一个新的Node对象，其中.data字段包含{myColor：“goldenrod”}。 <br>注意，质量值被从数据对象中剥离并用于模拟中的节点质量。',
            meaning:"magic：用这种方式使用的'magic'变量（和它们的默认值）<br>mass：1.0  节点对运动和排斥力的阻力<br>fixed：false； 当时true的时候，表示节点不受其他粒子的影响"+
                    "<br>x自动起始x位置（在系统坐标中）<br>y自动起始y位置（在系统坐标中）<br>p：point使用NODES,对于模拟的每个刻度，.p的值将基于系统中的排斥力和弹簧力来更新。 要更"+
                    "改节点的属性（响应，例如鼠标点击），只需重置其值，系统将在其下一个tick中使用新值：SYSTEM VALUES:nameString (read only)massNumber,fixedBoolean,pPoint"
        },
        {
            num:6,
            name: 'nearest中包含的参数 --- edge',
            effect: '线对象保持对它们连接的源节点和目标节点的引用，并具有优选的“安全”长度。 他们将在其端点节点上施加力以试图获得这个最佳距离。',
            parameter: '通过粒子系统的.addEdge方法创建新边。 例如：sys = arbor.ParticleSystem（）<br>node1 = sys.addNode（“one node”）'+
            'node2 = sys.addNode（“another”）<br>edge = sys.addEdge（node1，node2，{length：.75，pointSize：3}）<br>'+
            '这将创建一对Node对象，然后从第一个创建一个Edge。 长度键是用于设置边缘静止长度的特殊变量。 传递给.addEdge的对象中的任何其他键都将放置在生成的Edge的.data属性中。',
            meaning:"SYSTEM VALUES:sourceNode,targetNode,lengthNumber"
        },
        {
            num:6,
            name: 'nearest中包含的参数 --- point',
            effect: '点对象是用于将x / y坐标与用于进行向量计算的方便方法捆绑在一起的简单容器。 通过调用arbor.Point（x，y）创建点。',
            parameter: '矢量数学<br>add（pt）→Point :使用两点的总和返回新的点。<br>减去（pt）→点:返回一个新的点与两点的差异。<br>返回原点的线性缩放副本。<br>返回原点的线性缩放副本。'+
                    'magnitude（）→Number:返回点距离原点的距离。<br>正常（）→点:返回点的矢量法线。<br>normalize（）→点 :返回大小为1的点的缩放副本。'+
                    'SANITY检查:explosion（）→Boolean<br>如果x或y是NaN，则返回true。',
            meaning:"COORDINATE DATA,xNumber,yNumber"
        },
      ]
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
.arbor_container {
  width: 100%;
  height: 100%;
 
}
</style>