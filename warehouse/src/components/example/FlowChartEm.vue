<template>
  <div id="flow_container">
      <h1>{{ msg }}</h1>
      <ul>
          <li draggable="true" @dragend.stop="drag1($event,'开始导入',0)">开始导入</li>
          <li draggable="true" @dragend.stop="drag1($event,'第一项',1)">第一项</li>
          <li draggable="true" @dragend.stop="drag1($event,'第二项',2)">第二项</li>
          <li draggable="true" @dragend.stop="drag1($event,'第三项',3)">第三项</li>
          <li draggable="true" @dragend.stop="drag1($event,'第四项',4)">第四项</li>
          <li draggable="true" @dragend.stop="drag1($event,'第五项',5)">第五项</li>
          <li draggable="true" @dragend.stop="drag1($event,'导入完毕',6)">导入完毕</li>
      </ul>
      <div id="mountNode"></div>
      <div id="deletedom"  @click="deletenodeFn">删除</div>
  </div>
</template>

<script>
import G6 from '@antv/g6';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '流程导向图',
      datas:{
        nodes:[
          {
            id: '开始导入',
            shape: "customNode",
            color: 'rgba(0,0,0,.2)', 
            x:0,
            y:150
          }
        ],
        edges:[],
      },
      num:0,
      graph:null,
      evaa:null,
      deleteflag:false
    }
  },
  methods:{
    drag1(e,value,index){
      var this_ = this;
      var objnode,objedges;
      var flag=false;
      if(this_.datas.nodes.length){
        this_.datas.nodes.forEach(item=>{
          if(item.id == value){
              flag=true;
            alert('此步骤已经存在，不可重复添加');
            return;
          }  
        });
        if(!flag){
          this_.datas.edges=[];
          //判断，如果node的节点数少于两个，那就直接在后面添加
          if(this_.datas.nodes.length < 2){
            objnode={
              id: value,
              shape: "customNode",
              color: 'rgba(0,0,0,.2)', 
              x:80,
              y:150
            };
             this_.datas.nodes.push(objnode);
          }else{//当节点数大于2的时候
           //获取放下的点的pagex
            var obje = {x:e.pageX-420,y:150};
            var lenx = (this_.datas.nodes[this_.datas.nodes.length-1].x)*2;
          //判断是否最后一个是结束button，如果是，判断我当前的位置是不是超出了最大的位置，超出，那就直接放在他前面,否则是在做其他计算
            if(this_.datas.nodes[this_.datas.nodes.length-1].id == "导入完毕"){
              if(obje.x > lenx){
                objnode={
                  id: value,
                  shape: "customNode",
                  color: 'rgba(0,0,0,.2)', 
                  x:this_.datas.nodes[this_.datas.nodes.length-2].x,
                  y:150
                };
                this_.datas.nodes.splice(this_.datas.nodes.length-1,0,objnode);
              }else{
                 //获取节点的最大的x位置
                objnode={
                  id: value,
                  shape: "customNode",
                  color: 'rgba(0,0,0,.2)', 
                  x:lenx/2+80,
                  y:150
                };
                this_.commondrag(obje,lenx,value,objnode);
               
              }
            }else{
              //获取节点的最大的x位置
              objnode={
                id: value,
                shape: "customNode",
                color: 'rgba(0,0,0,.2)', 
                x:lenx/2+80,
                y:150
              };
              this_.commondrag(obje,lenx,value,objnode);
             
            };
           
          };
          this_.commonline(this_.datas.nodes);
        } 
      }else{
        objnode={
          id: value,
          shape: "customNode",
          color: 'rgba(0,0,0,.2)', 
          x:0,
          y:150
        }; 
        objedges={};
        this_.datas.nodes.push(objnode);
        this_.datas.edges.push(objedges);
      };
      this_.graph.read(this_.datas);
    },
    //插入的核心部分
    commondrag(paramsobj,paramlen,paramvalue,paramobjnode){
      var this_ = this;
      //判断，当放下的点的x大于最后一个节点的x的时候，直接插在最后或者是导入完毕的时候，往最后放
      if(paramsobj.x > paramlen || paramvalue == "导入完毕"){
        this_.datas.nodes.push(paramobjnode);
      }else{ //反之。将两个节点之间的x范围进行集合，获取对应的index
        var len = this_.datas.nodes.length;
        var lenAry=[];
        for(var i=0;i<len;i++){
          var n = i+1;
          if(n<len){
            var frontobj = this_.datas.nodes[i];
            var behindobj = this_.datas.nodes[n];
            var lenobj={frontnum:frontobj.x*2,behindnum:behindobj.x*2};
            lenAry.push(lenobj);
          };
        };
        //循环获取到的x范围的集合，判断当前和落下的x在八个范围下，就将这个节点插入对应的位置
        lenAry.forEach((itemlen,indexlen)=>{
          if(paramsobj.x > itemlen.frontnum && paramsobj.x < itemlen.behindnum){
            paramobjnode={
              id: paramvalue,
              shape: "customNode",
              color: 'rgba(0,0,0,.2)', 
              x:itemlen.frontnum/2+80,
              y:150
            };
            this_.datas.nodes.splice(indexlen+1,0,paramobjnode);
          }
        });
      };
    },
    //重新连线规划
    commonline(ary){
      var this_ = this;
      console.log(ary)
       //将所有的节点按先后顺序进行排序
      ary.forEach((itemD,indexD)=>{
        if(itemD){
          itemD.x = 80*indexD;
          this_.$set(ary,indexD,ary[indexD]);
        };
      });
      //最后，连线
      for(var i=0;i<ary.length-1;i++){
        var obj={
          source:ary[i].id,
          target:ary[i+1].id,  
        };
        this_.datas.edges.push(obj);  
      };
      
    },
    //公共事件
    commonevent(){
      var this_ = this;
      G6.registerBehaviour('mouseEnterFillRed', function(graph) {
        graph.behaviourOn('node:mouseenter', function(ev) {
          graph.update(ev.item, {
            color: 'rgba(255,100,43,0.3)'
          });
        });
      });

      // 注册鼠标进入节点变绿的行为
      G6.registerBehaviour('mouseEnterFillGreen', function(graph) {
        graph.behaviourOn('node:mouseenter', function(ev) {
          graph.update(ev.item, {
            color: 'green'
          });
        });
      });

      // 注册鼠标移出节点变原色的行为
      G6.registerBehaviour('mouseLeaveResetFill', function(graph) {
        graph.behaviourOn('node:mouseleave', function(ev) {
          graph.update(ev.item, {
            color: 'rgba(0,0,0,0.2)'
          });
        });

      });
      //注册鼠标点击节点的行为
      G6.registerBehaviour('clickevent', function(graph) {
        graph.behaviourOn('node:click', function(ev) {
          var e = event||window.event;
          graph.update(ev.item, {
            color: 'rgba(255,100,43,0.3)'
          });
          this_.evaa = ev;
          var  oDiv = document.getElementById("deletedom");
          oDiv.style.display='block';
          oDiv.style.top=e.pageY-50+'px';
          oDiv.style.left = e.pageX-180+'px';
          return false;
        });
      });
      var mode = 'red';
      //注册一个新的形状
      G6.registerNode('customNode', {
        draw: function draw(item) {
          var group = item.getGraphicGroup();
          group.addShape('text', {
              zIndex: 20,
            attrs: {
              x: item.model.x+8,
              y: item.model.y+36,
              fill: 'black',
              text: item.model.id,
              
            }
          });
          return group.addShape('rect', {
            zIndex: 2,
            attrs: {
              x: item.model.x,
              y:item.model.y,
              width: 60,
              height: 60,
              stroke: 'rgba(0,0,0,0.2)',
              fill:item.model.color,
            }
          });
            
        }
      });
      this_.graph = new G6.Graph({
        container: 'mountNode',
        fitView: 'tl',
        animate:true,
        height: window.innerHeight,
        modes: {
          //red: ['mouseEnterFillRed', 'mouseLeaveResetFill','clickevent'],
          red: ['clickevent'],
          green: ['mouseEnterFillGreen', 'mouseLeaveResetFill']
        },
        mode: mode
      });
      //流程上的文字描述
      this_.graph.node({
        label: function label(model) {
          model.index=20;  
          return model.id;
        }
      });
      //是否显示箭头
      this_.graph.edge({
        style: function style() {
          return {
            endArrow: true
          };
        }
      });
      //点击空白处将删除按钮隐藏
      this_.graph.on('click', (ev)=>{
        if(ev.item == null){
          var  oDiv = document.getElementById("deletedom");
          oDiv.style.display='none';
        }
      }); 
      this_.graph.changeSize(1300, 300);
      this_.graph.setFitView('tc');
      this_.graph.read(this_.datas);
    },
    //删除步骤节点
    deletenodeFn(){
      var this_ = this;
      var  oDiv = document.getElementById("deletedom");
      oDiv.style.display='none';
      if(this_.evaa.item.model.label == "开始导入" || this_.evaa.item.model.label == "导入完毕"){
         alert('此步骤为必须的，不可删除')
      }else{
        this_.datas.edges=[];
        this_.datas.nodes.forEach((itemD,indexD)=>{
          if(itemD.id == this_.evaa.item.id){
            var ary = this_.datas.nodes.splice(indexD,1);
          };
          //this_.$set(this_.datas.nodes,indexD,this_.datas.nodes[indexD]);
       });
       this_.commonline(this_.datas.nodes);
       this_.graph.read(this_.datas);
      }
    }
  },
  mounted(){
    var this_ = this;
    this_.commonevent();
  }
}
</script>

<style lang="scss" type="text/css">
#flow_container{
 height:100%;
 width: 100%;
  #mountNode{
    margin-top: 100px;
    width: 100%;
    height: 300px;
    border: 1px solid black;
  }
  #mountNode .graph-container{
    height: 300px;
  }
  ul li{
    list-style: none;
    display: inline-block;
    padding: 20px;
    background:lightblue;
  }
  #deletedom{
    padding:10px;
    background:#ccc;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
  .graph-container{
    height: 300px !important;
  }
}
</style>
