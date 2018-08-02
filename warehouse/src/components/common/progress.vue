<template>
    <div>
        <div class="progress_con" @click="gotoFn('children')">
            <div class="progress_text" :style={width:newPercent}></div>
        </div>
        <span style="font-size:14px;vertical-align: top;">{{percentage}}分</span>
    </div>
</template>

<script>
export default {
    props: {
        percentage: {
            type: Number,
            default: 0,
        },
    },

    data() {
        return {

        }
    },
    methods: {
       gotoFn(){
         this.$emit('AAA',"我是子组件");
       }
    },
    computed: {
        newPercent() {
            return this.percentage + "%"
        }

    }



}
</script>
<style lang="scss" rel="stylesheet/scss" scoped="scoped">
.progress_con {
    height: 20px;
    width: 80%;
    background: white;
    position: relative;
    display: inline-block;
    margin-right: 1%;
    border-radius: 50px;
}

.progress_text {
    position: abosulte;
    height: 20px;
    background:#43a0f7;
    border-radius: 50px;
    
}
</style>