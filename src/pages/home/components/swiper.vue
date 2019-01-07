<template>
    <div class="container">
        <swiper :options="adSwiperOption" ref="mySwiper" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'AwesomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      adSwiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>
<style lang="stylus" scoped>
    .container >>> .swiper-pagination-bullet-active
        background-color #ffffff !important
    .container
        width 100%
        height 0
        padding-bottom 30.4%
        overflow hidden
        background-color #eeeeee
        .swiper-img
            width 100%
</style>
