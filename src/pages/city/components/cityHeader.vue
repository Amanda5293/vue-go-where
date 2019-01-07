<template>
    <div class="container">
        城市选择
        <router-link to="/">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
    </div>
</template>
<script>
export default {
  name: 'cityHeader'
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .container
        position relative
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        font-size .32rem
        text-align center
        color #ffffff
        background-color $bgColor
        .back-icon
            position absolute
            top 0
            left 0
            text-align center
            font-size .4rem
            color #ffffff
</style>
