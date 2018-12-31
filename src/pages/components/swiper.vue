<template>
    <div class="container">
        <swiper :options="adSwiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item in adList" :key="item.id">
                <img class="swiper-img" :src="item.imgSrc">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'AwesomeSwiper',
  data () {
    return {
      adSwiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true
      },
      adList: [{
        id: '0001',
        imgSrc: 'https://img1.qunarzz.com/vc/a0/b2/8b/3e3a346ff497f75c338230b09a.jpg'
      },
      {
        id: '0002',
        imgSrc: 'https://img1.qunarzz.com/vc/f5/10/9c/b647d3ee724a720ce0fa6101f0.jpg'
      },
      {
        id: '0003',
        imgSrc: 'https://img1.qunarzz.com/vc/a4/29/dd/4a0734b77f675da2a8ca4a9879.jpg'
      },
      {
        id: '0004',
        imgSrc: 'https://img1.qunarzz.com/vc/d4/d0/62/a6b7c23c1b251dfc874ce66efa.jpg'
      }]
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
