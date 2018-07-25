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
  </div>
</template>

<script>
 export default {
   data(){
     return{
       activeNames: ['1'],
       lists:[
         {
           title:"由于版本的不同",
           content1:'1.2之前的引用<br>'+
           '(script) src=‘http://api.map.baidu.com/api?key=46ce9d0614bf7aefe0ba562f8cf87194&v=1.0&services=false’ (/script)<br>',
           content2:'2.0的版本引用 <br>'+ 
           '(script) src=‘http://api.map.baidu.com/api?v=2.0&ak=zmAWIlHnn8qQ4qMKkBGtypeoZio5q86s’ type=‘text/javascript’(/script)<br>',
           content3:'关键点：一个是key---ak，services'
         },
         {
           title:"在使用自定义标注，得到bounds的最大最小的XY值，1.2--2.0",
           content1:' maxX -- Ee， maxY -- De，minX -- Je，minY -- Ie'
         },
         {
           title:"在使用控件的时候",
           content1:'1.2版本:   的没有MapTypeControl()这个方法；不可以更高地图的样式',
           content2:'2.0版本:  的可以使用这个方法。增加这个控件；'
         },
         {
           title:"根据自己申请的key值，根据版本进行引用，引用之后初始化地图",
           content1:'var map = new BMap.Map("allmap");',
           content2:'map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);'
         },
         {
           title:"从后台获取坐标之后，自定义路线以及测距",
           content1:'1.获取两点之间的距离：map.getDistance(myP1,myP2)).toFixed(2)',
           content2:'2.给某一点添加标注：创建并插入标注  var marker = new BMap.Marker(point1);map.addOverlay(marker);',
           content3:'3.给某个标注增加文字信息：var label = new BMap.Label("起点",{offset:new BMap.Size(-5,-20)}) marker.setLabel(label);<br>'+
                    '4.绘制自定义路线：获取到每个点，然后每条线段的终点坐标都是新线段的起点坐标；定义折线段，然后进行连接，不同的阶段有不同的起点，终点'+
                    'polyline = new BMap.Polyline([myP1,myP2], {strokeColor:"black", strokeWeight:3, strokeOpacity:0.8}); map.addOverlay(polyline);<br>'+
                    '5.添加移动的小图片<br>'+
                    '&nbsp;&nbsp;var driving = new BMap.DrivingRoute(map)；   driving.search(myP1, myP2);<br>'+
                    '6.在从后台请求数据之后，需要画出轨迹，怎么做？<br>'+
                    '&nbsp;&nbsp;使用在一个循环中， p1 = pointArr[j].lng; p2 = pointArr[j].lat;  points.push(new BMap.Point(p1,p2));<br>'+
                    '&nbsp;&nbsp;var line = new BMap.Polyline(points,{strokeWeight:3,strokeColor:"black",strokeOpacity:0.5});<br>'+
                    '&nbsp;&nbsp;map.addOverlay(line);（添加折现）<br>'+
                    '7.增加自定义的标注（自定义覆盖物）<br>'+
                    '&nbsp;&nbsp;var myIcon = new BMap.Icon("./img/car.png", new BMap.Size(70, 32), {<br>'+
                        '&nbsp;&nbsp;&nbsp;&nbsp;imageOffset: new BMap.Size(0, 0),    //图片的偏移量。为了是图片底部中心对准坐标点。<br>'+
                        '&nbsp;&nbsp;&nbsp;&nbsp;enableRotation:true,<br>'+
                    '&nbsp;&nbsp;});<br>'+
                    '&nbsp;&nbsp;var carStartMk = new BMap.Marker(pts[0],{icon:myIcon}); carStartMk是一个marker；<br>' + 
                    '&nbsp;&nbsp;map.addOverlay(carStartMk);',   
          
         },
         {
           title:"使用地图的时候，不及时的 进行清除，很容使页面卡顿，运行缓慢等",
           content1:'解决方法：<br>对运行时的定时器或者路线，或者maker及时的进行清除<br>',
           content2:'清除定时器：clearTimeout(timer);<br>'+
           '清除指定覆盖物：map.removeOverlay(carMk);<br>'+
           '清除全部覆盖物：map.clearOverlays();<br>'+
           '清除百度logo：.anchorBL{display:none;}',
         },
         {
           title:"使用百度地图api中的按路画线，出现每次画出的线都有绿色虚线的底线，发现原因是因为自己每次定义的walking都做了rederoption重新渲染，所以出现了底色",
           content1:'var walking2 = new BMap.WalkingRoute(this_.gpsMap, {',
           content2:'// renderOptions:{map: this_.gpsMap, autoViewport: false},导致出现绿色虚线和订单label消失的原因，因为这句表示重新渲染，把这句注释掉，因为蓝色部分已经定位到当前的地图实例;<br>'+
           '&nbsp;&nbsp;onSearchComplete: function(res) {<br>'+
           '&nbsp;&nbsp;&nbsp;&nbsp;var plan = res.getPlan(0);var arrPois =[];<br>'+
           '&nbsp;&nbsp;&nbsp;&nbsp;for(var j=0;j<plan.getNumRoutes();j++){ var route = plan.getRoute(j);arrPois= arrPois.concat(route.getPath()); }<br>'+
           '&nbsp;&nbsp;&nbsp;&nbsp;var p2=new BMap.Polyline(arrPois, { strokeColor: "red", strokeWeight: 3, strokeOpacity: 1 });<br>'+
           '&nbsp;&nbsp;&nbsp;&nbsp;p2["id"]="tr2";this_.gpsMap.addOverlay(p2);}<br>'+
           '//移除起点和终点的marker;<br>'+
           '&nbsp;&nbsp;onMarkersSet:function(pois){this_.gpsMap.removeOverlay(pois[0].marker);this_.gpsMap.removeOverlay(pois[1].marker);}<br>'+
           '});',
         },
         {
           title:"使用地图的时候，会出现BMapLib未定义",
           content1:'引入js(script) type="text/javascript" src="http://api.map.baidu.com/library/CurveLine/1.5/src/CurveLine.min.js">(/script)，就ok了'
         },
         {
           title:"画路线轨迹的时候，进行删除路线时发现并没有删除掉，这是什么原因？",
           content1:'原因是我在画折线的时候是每一次循环画一条，那么循环下来看起来是一条，其实是无数个线段组成的，当我进行删除的时候，删除掉的只是最后一小线段，整体看起来就和没有删除一样！！！！',
           content2:'解决方法：不是每一次都画一条，而是将所有的点先放在一个数组中，然后循环完毕后将数组整体画线'
         },
          {
           title:"使用vue时候，对百度地图进行一个处理，写一个Map.js,如果我们在地图中使用了BMapLib，那么还要引入bmaplib.js（例如热力图就需要这）",
           content1:'Map.js',
           content2:'export function MP(ak,a) {'+
           '&nbsp;&nbsp;return new Promise(function (resolve, reject) {window.init = function () {resolve(BMap) }<br>'+
           '&nbsp;&nbsp;var script = document.createElement("script");script.type = "text/javascript";script.src = "http://api.map.baidu.com/api?v=2.0&ak="+ak+"&callback=init";<br>'+
           '&nbsp;&nbsp;script.flag="true";script.onerror = reject;document.head.appendChild(script);})}<br>'+
           '在我们需要引入的页面写入<br>'+
           '&nbsp;&nbsp;MP("zmAWIlHnn8qQ4qMKkBGtypeoZio5q86s").then(BMap => {this_.gpsMap = new BMap.Map("allMap", { enableMapClick: true });});<br>'+
           '//bmaplib.js<br>'+
           'export function HMP() {<br>'+
           '&nbsp;&nbsp;return new Promise(function (resolve, reject) {window.initheat = function () {resolve(BMapLib)}<br>'+
           '&nbsp;&nbsp;var script = document.createElement("script");script.type = "text/javascript";script.src = "../../static/js/Heatmap_min.js?callback=initheat";<br>'+
           '&nbsp;&nbsp;script.onerror = reject;document.head.appendChild(script);})}<br>'+
           '在需要页面就要写<br>'+
           'MP("zmAWIlHnn8qQ4qMKkBGtypeoZio5q86s").then(BMap => {<br>'+
           '&nbsp;&nbsp;that_.map = new BMap.Map("allMap", { enableMapClick: true });that_.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);<br>'+
           '&nbsp;&nbsp;HMP().then(BMapLib => { })<br>'+
           '});',
         },
          {
           title:"怎么消除地图上的底图的图标的点击事件怎么关闭？",
           content1:'var map = new BMap.Map("allmap", {enableMapClick:false});//构造底图时，关闭底图可点功能'
         },
         {
           title:"想要给label中设置自定义的样式和内容（如图一）",
           content1:'var redLabelContent="(div style=height:20px;position: relative;)"+itemCommon.emp_name<br>',
           content2:'&nbsp;&nbsp;(p style="width:0;height:0;border-left: 6px solid transparent;border-right: 6px solid transparent;border-top: 10px solid #8c57e3;position:absolute;z-index:999; left:-4px;top: 18px;")(/p)<br>'+
                    '&nbsp;&nbsp;(p style="width:0;height:0;border-left: 6px solid transparent;border-right: 6px solid transparent;border-top: 10px solid #692bcd;position:absolute;left:-4px;top: 20px;")(/p)/<br>'+
                    '(/div)<br>'+
                    'var labelInfo = new BMap.Label(redLabelContent, {position : pointEnter,offset   : new BMap.Size(-13, -37)});',
            imgurl:require("../../images/label1.png")
         },
         {
           title:"想要给label中设置自定义的样式和内容（如图二）",
           content1:'var arriveLabelContent="(div style=background:#fff;border-radius:10px;)"<br>',
           content2:'&nbsp;&nbsp;(p style="display:inline-block;background:#c19f00;border-radius:10px;padding:2px 5px;margin-right:5px;color:#fff;)"<br>'+
                    '&nbsp;&nbsp;上门(/p)距离:"+arriveOrderDistance+"(/div)<br>'+
                    'var arrivelabel = new BMap.Label(arriveLabelContent,{ offset: new BMap.Size(0, -20) });<br>'+
                    'arrivelabel.setStyle({color:"black", background:"#fff",border: "1px solid #c19f00",borderRadius:"12px", padding:"0"});',
                    
           imgurl:require("../../images/label2.png")
         },
         {
           title:"根据后台获取的数据，画出轨迹路线，并且要按照道路走",
           content1:'traceLine1:function(pointArr){<br>',
           content2:'&nbsp;&nbsp;pointArr是后台获取的数据，点的集合，已经经过处理，"<br>'+
                    '&nbsp;&nbsp;$.each(result, function(index, value) {  result原始获取数据<br>'+
                    '&nbsp;&nbsp;var x = value["longitude"];var y = value["latitude"];var ggPoint = new BMap.Point(x, y);pointArr.push(ggPoint);<br>'+
                    '&nbsp;&nbsp;});<br>'+
                    '&nbsp;&nbsp;var this_=this, polyline; var str = "";<br>'+
                    '&nbsp;&nbsp; if(pointArr.length){var point1 = new BMap.Point(pointArr[0].lng, pointArr[0].lat);<br>'+
                    '&nbsp;&nbsp;&nbsp;&nbsp;var startMarker = new BMap.Icon("../../../../static/images/since.png", new BMap.Size(22, 27), {<br>'+
                    '&nbsp;&nbsp;&nbsp;&nbsp;offset: new BMap.Size(10, 25)});<br>'+
                    '&nbsp;&nbsp;var marker = new BMap.Marker(point1, { icon: startMarker });<br>'+
                    '&nbsp;&nbsp;// 创建标注<br>'+
                    '&nbsp;&nbsp;marker["id"]="mkstart";//this_.gpsMap.addOverlay(marker);<br>'+
                    '&nbsp;&nbsp;var point2 = new BMap.Point(pointArr[pointArr.length - 1].lng, pointArr[pointArr.length - 1].lat);<br>'+
                    '&nbsp;&nbsp;var endMarker = new BMap.Icon("../../../../static/images/TheFinal.png", new BMap.Size(22, 27), {offset: new BMap.Size(10, 25)});<br>'+
                    '&nbsp;&nbsp;var marker2 = new BMap.Marker(point2, { icon: endMarker });marker2["id"]="mkend";<br>'+
                    '&nbsp;&nbsp;//var label2 = new BMap.Label("终点 | 总路程是：" + this_.routeLine + "公里", { offset: new BMap.Size(-5, -20) });//this_.gpsMap.addOverlay(marker2);<br>'+
                    '&nbsp;&nbsp;//步行<br>'+
                    '&nbsp;&nbsp;if(pointArr){ var walking = new BMap.WalkingRoute(this_.gpsMap, {<br>'+
                    '&nbsp;&nbsp;&nbsp;&nbsp;onSearchComplete: function(res) {var plan = res.getPlan(0);var arrPois =[];<br>'+
                    '&nbsp;&nbsp;&nbsp;&nbsp;if(plan){for(var j=0;j<plan.getNumRoutes();j++){var route = plan.getRoute(j);arrPois= arrPois.concat(route.getPath());}<br>'+
                    '&nbsp;&nbsp;&nbsp;&nbsp;var p1=new BMap.Polyline(arrPois, { strokeColor: "black", strokeWeight: 2, strokeOpacity: 1});<br>'+
                    '&nbsp;&nbsp;&nbsp;&nbsp;p1["id"]="tr1";this_.gpsMap.addOverlay(p1);}}<br>'+
                    '&nbsp;&nbsp;//移除起点和终点的marker<br>'+
                    '&nbsp;&nbsp;onMarkersSet:function(pois){this_.gpsMap.removeOverlay(pois[0].marker);this_.gpsMap.removeOverlay(pois[1].marker);}});<br>'+
                    '&nbsp;&nbsp; for(var l=0;l<pointArr.length; l+=3){var m=l+3;var n=l+1;if(m>pointArr.length-1){m=pointArr.length-1;}<br>'+
                    '&nbsp;&nbsp;&nbsp;&nbsp;if(n>pointArr.length-1){n=pointArr.length-1;}<br>'+
                    '&nbsp;&nbsp;&nbsp;&nbsp;str+=(this_.gpsMap.getDistance(new BMap.Point(pointArr[l].lng, pointArr[l].lat), new BMap.Point(pointArr[n].lng, pointArr[n].lat))).toFixed(2) + ","<br>'+
                    '&nbsp;&nbsp;&nbsp;&nbsp;walking.search(new BMap.Point(pointArr[l].lng, pointArr[l].lat), new BMap.Point(pointArr[m].lng, pointArr[m].lat)); }<br>'+
                    '&nbsp;&nbsp;if (!str) {this_.routeLine = 0;} else {<br>'+
                    '&nbsp;&nbsp;&nbsp;&nbsp;this_.routeLine = (eval(str.split(",").join("+").substr(0, str.length - 1)) / 1000).toFixed(2);<br>'+
                    '&nbsp;&nbsp;&nbsp;&nbsp;if (this_.orderTotal) {this_.arverage = (this_.routeLine / this_.orderTotal).toFixed(2);} else {<br>'+
                    '&nbsp;&nbsp;&nbsp;&nbsp;this_.arverage = this_.routeLine;}}}}'
           
         },
       ]
     }
   }     
 }
</script>

<style scoped>
.Map_container{

}
</style>