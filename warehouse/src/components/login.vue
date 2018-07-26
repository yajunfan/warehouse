<template>
    <div>
      <el-button type="primary" @click="jump">登录</el-button>
    </div>
</template>

<script>
    export default {
      methods:{
        jump(){
          this.$router.push({  
            path: '/Home',
            name: 'Home' 
          })
        }
      }  
    }
</script>

<style scoped>

</style>