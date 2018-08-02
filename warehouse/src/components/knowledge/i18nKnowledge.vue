<template>
  <div class="relatine_container">
    <p class="top_btn" @click="changeLangEvent">中文</p>
      <span v-text="$t('lang .homeOverview')"></span>
      <span v-text="$t('lang .firmOverview')"></span>
      <span v-text="$t('lang .firmReports')"></span>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        
      }
    },
    methods:{
     changeLangEvent() {
        if ( this.$i18n.locale === 'zh-CN' ) {
          this.$i18n.locale = 'en-US';//关键语句
        }else {
          this.$i18n.locale = 'zh-CN';//关键语句
        }
     }
    },

  }
</script>

<style scoped lang="scss" type="text/css">

</style>