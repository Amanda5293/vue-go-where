<template>
    <div class="imgs-text-container">
        <p :class="textClass" ref="text">{{text}}</p>
        <div v-if="hasMore">
          <div class="iconfont more-icon" v-show="!showAll" @click="handleShow">&#xe62d;</div>
          <div class="iconfont up-icon" v-show="showAll" @click="handleShow">&#xe62e;</div>
        </div>
        <div class="imgs" v-if="curShowImgs.length">
            <div class="img-container"
                 v-for="(item, index) in curShowImgs"
                 :key="item"
                 @click="handleGallery">
                <img :src="item" class="img">
                <div class="total-count" v-if="5 == index">共{{totalLength}}张</div>
            </div>
        </div>
        <gallery :swiperList="imgs" class="gallery"
                 v-show="showGallery"
                 @close="handleGallery">
        </gallery>
    </div>
</template>
<script>
import Gallery from './gallery'
export default {
  props: {
    text: String,
    imgs: Array
  },
  name: 'MutiImgText',
  components: {
    Gallery
  },
  data () {
    return {
      showGallery: false,
      showAll: false,
      hasMore: false
    }
  },
  computed: {
    curShowImgs () {
      return this.imgs.length < 7 ? this.imgs : this.imgs.slice(0, 6)
    },
    totalLength () {
      return this.imgs.length
    },
    textClass () {
      if (this.hasMore && !this.showAll) {
        return ['text-container', 'ellipsis']
      }
      return ['text-container']
    }
  },
  mounted () {
    let height = parseInt(window.getComputedStyle(this.$refs.text).height)
    this.hasMore = this.$refs.text.innerHTML.length > 250 || height > 60
  },
  methods: {
    handleGallery () {
      this.showGallery = !this.showGallery
    },
    handleShow () {
      this.showAll = !this.showAll
    }
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .gallery>>>.swiper-pagination
         bottom .3rem !important
    .text-container
        font-size .28rem
        line-height .4rem
        color #616161
    .ellipsis
       mutiEllipsis()
    .more-icon,
    .up-icon
        height .36rem
        line-height .36rem
        text-align center
        color #9e9e9e
    .imgs
        display flex
        justify-content space-around
        flex-wrap wrap
        margin .2rem 0 .1rem 0
        .img-container
            position relative
            width 31.33%
            height 1.8rem
            margin-bottom .1rem
            .img
                width 100%
                height 100%
            .total-count
                position absolute
                bottom .2rem
                right 0
                height .4rem
                padding-right .1rem
                padding-left .15rem
                border-top-left-radius .1rem
                border-bottom-left-radius .1rem
                line-height .4rem
                font-size .24rem
                text-align right
                color #ffffff
                background-color rgba(0,0,0,0.5)
</style>
