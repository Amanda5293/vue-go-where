<template>
    <div class="header">
       <div class="header-left">
           <div class="iconfont back-icon">&#xe624;</div>
       </div>
       <div class="header-input">
           <span class="iconfont">&#xe632;</span>
           输入城市/景点/游玩主题</div>
       <router-link to="/city">
            <div class="header-right">
                {{city}}<span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
       </router-link>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: mapState(['city'])
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display flex
        line-height $headerHeight
        background $bgColor
        color #ffffff
        .header-left
            float left
            width .64rem
           .back-icon
              text-align center
              font-size .4rem
        .header-right
            float right
            min-width 1.04rem
            padding 0 .1rem
            text-align center
            vertical-align middle
            color #ffffff
            .arrow-icon
                font-size .24rem
        .header-input
            flex 1
            height .64rem
            margin-top .12rem
            margin-left .2rem
            padding-left .2rem
            border-radius .1rem
            line-height .64rem
            background-color #ffffff
            color #ccc
</style>
