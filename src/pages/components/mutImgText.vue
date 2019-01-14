<template>
    <div class="imgs-text-container">
        <p class="text-container">{{text}}</p>
        <div class="imgs">
            <div class="img-container" v-for="item in imgs" :key="item" >
                <img :src="item" class="img">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    text: String,
    imgs: Array
  },
  name: 'MutiImgText'
}
</script>
<style lang="stylus" scoped>
    .text-container
        font-size .28rem
        line-height .4rem
        color #616161
    .imgs
        display flex
        justify-content space-around
        flex-wrap wrap
        margin .2rem 0 .1rem 0
        .img-container
            width 31.33%
            height 1.8rem
            margin-bottom .1rem
            .img
                width 100%
                height 100%
</style>
