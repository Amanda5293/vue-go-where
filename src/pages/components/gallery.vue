<template>
    <div class="gallery-container" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <swiper-slide v-for="item in swiperList" :key="item">
                    <img class="gallery-img" :src="item">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  name: 'gallery',
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
    .gallery-container
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position fixed
        top 0
        left  0
        bottom  0
        right 0
        background-color #000000
        touch-action none
        .wrapper
            width 100%
            height 0
            padding-bottom 100%
            .swiper-container
                overflow inherit
                .gallery-img
                    width 100%
                .swiper-pagination
                    bottom -1rem
                    color #ffffff
</style>
