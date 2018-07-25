<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    onRoutes(){
      return this.$route.path.replace('/','');
    }
  }
}
</script>

<style>
body,html{
  height: 100%;
  width: 100%;
}
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
canvas{
  position: absolute;
  left: 160px;
}

</style>
