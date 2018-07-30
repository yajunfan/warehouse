<template>
  <div class="index_container">
    <myhead></myhead>
    <v-sidebar></v-sidebar>
    <div class="content">
        <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
  </div>
</template>

<script>
import vHead from './header.vue';
import vSidebar from './sidebar.vue';
export default {
  components:{
    myhead:vHead, 
    vSidebar:vSidebar
  }
}
</script>

<style lang="scss" type="text/css">
body,html{
  height: 100%;
  width: 100%;
}
.index_container{
  height: 100%;
  overflow-y: hidden;
}
.el-container{
  height: 100%!important;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
  
.el-aside {
  color: #333;
}
.content{
  background: none repeat scroll 0 0 #f0f3f4;
  position: absolute;
  left: 200px;
  right: 0;
  top: 66px;
  bottom:0;
  width: auto;
  padding:20px;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>
