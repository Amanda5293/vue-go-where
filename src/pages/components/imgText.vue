<template>
    <div class="container border-bottom">
        <img class="item-img" :src="recommend.imgUrl" alt="recommend.title">
        <div class="item-info">
            <p class="item-title">{{recommend.title}}</p>
            <p class="item-desc">{{recommend.desc}}</p>
            <button class="detail-btn">查看详情</button>
        </div>
    </div>
</template>
<script>
export default {
  props: ['recommend'],
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    @import '~styles/varibles.styl'
    .container
        display flex
        height 1.8rem
        padding .1rem
        .item-img
            width  1.8rem
            height 1.8rem
        .item-info
            display flex
            flex-direction column
            justify-content space-around
            flex 1
            margin-left .2rem
            min-width 0
            .item-title
                line-height .48rem
                font-size .28rem
                ellipsis()
            .item-desc
                line-height .42rem
                font-size .26rem
                color #cccccc
                ellipsis()
            .detail-btn
                margin-top .2rem
                padding .1rem
                width 1.4rem
                font-size .24rem
                backgrounc-color $bgColor
                color #ffffff
</style>
