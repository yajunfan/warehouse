<template>
    <div class="login_container">
      <el-button type="primary" @click="jump" class="mubutton">进入主页面</el-button>
    </div>
</template>

<script>
    export default {
      methods:{
        jump(){
          this.$router.push({  
            path: '/EchartStudy',
            name: 'EchartStudy' 
          })
        }
      }
    }
</script>

<style scoped lang="scss" type="text/css">
.login_container{
  height: 100%;
  width: 100%;
  background: url(../../static/images/2.jpg) no-repeat;
  background-size: 100% 100%;
  button{
    margin-top:40%;
  }
}
</style>