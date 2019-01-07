<template>
    <div class="banner">
        <div class="banner-container" @click="handleGallery">
            <img class="banner-img" src="https://img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_600x330_0dcecae1.jpg">
            <div class="banner-detail">
                <div class="banner-title">北京海洋馆(AAAA级景区)</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>30
                </div>
            </div>
        </div>
        <gallery :swiperList="imgs"
                 v-show="showGallery"
                 @close="handleGallery">
        </gallery>
    </div>
</template>
<script>
import Gallery from '../../components/gallery'
export default {
  name: 'banner',
  data () {
    return {
      imgs: [{
        id: '0001',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_600x330_0dcecae1.jpg'
      },
      {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1509/7a/7a684c38571c3b08.img.png_350x240_737ceb2b.png'
      }],
      showGallery: false
    }
  },
  components: {
    Gallery
  },
  methods: {
    handleGallery () {
      this.showGallery = !this.showGallery
    }
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .banner-container
        position relative
        height 0
        padding-bottom 55%
        overflow hidden
        touch-action none
        .banner-img
            width 100%
        .banner-detail
            display flex
            position absolute
            bottom 0
            left 0
            right 0
            line-height .6rem
            color #ffffff
            background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
                ellipsis()
            .banner-number
                height .32rem
                margin-top .14rem
                padding  0 .4rem
                line-height .32rem
                border-radius .2rem
                font-size .24rem
                background-color rgba(0,0,0,.8)
            .banner-icon
                font-size .24rem
                margin-right .1rem

</style>
