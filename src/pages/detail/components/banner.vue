<template>
    <div class="banner">
        <div class="banner-container" @click="handleGallery">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-detail">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>{{imgsCount}}
                </div>
            </div>
        </div>
        <gallery :swiperList="gallaryImgs"
                 v-show="showGallery"
                 @close="handleGallery">
        </gallery>
    </div>
</template>
<script>
import Gallery from '../../components/gallery'
export default {
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  name: 'banner',
  data () {
    return {
      showGallery: false
    }
  },
  computed: {
    imgsCount () {
      return this.gallaryImgs.length
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
