<template>
    <div class="container">
        <div class="img-container">
            <img class="item-img" :src="recommend.imgSrc" alt="recommend.title">
        </div>
        <div class="item-info">
            <p class="item-title">{{recommend.title}}</p>
            <p class="item-desc">{{recommend.desc}}</p>
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
        .img-container
            height 0
            padding-bottom 37.4375%
            overflow hidden
            .item-img
                width 100%
        .item-info
            padding .14rem .2rem .2rem .2rem
            .item-title
                line-height .48rem
                font-size .28rem
                ellipsis()
            .item-desc
                line-height .42rem
                font-size .24rem
                ellipsis()
</style>
