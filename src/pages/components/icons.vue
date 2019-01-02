<template>
    <div class="container">
         <swiper  :options="iconSwiperOption" ref="iconSwiper">
            <swiper-slide  v-for = "(page,index) of pages" :key="index" >
                <div class="icon-wrapper" v-for="item in page" :key="item.id">
                    <div class="icon-img-wrapper">
                        <img class="icon-img" :src="item.imgSrc">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
         </swiper>
    </div>
</template>
<script>
export default {
  name: 'Icons',
  data () {
    return {
      iconSwiperOption: {
        autoplay: 0
      },
      iconList: [{
        id: '0001',
        imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '一日游'
      }, {
        id: '0003',
        imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '动植物园'
      }, {
        id: '0004',
        imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '游乐场'
      }, {
        id: '0005',
        imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '一日游'
      }, {
        id: '0006',
        imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '一日游'
      }, {
        id: '0007',
        imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '一日游'
      }, {
        id: '0008',
        imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '一日游'
      }, {
        id: '0009',
        imgSrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '一日游'
      }]
    }
  },
  computed: {
    pages () {
      let pages = []
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .container >>> .swiper-container
        height 0
        padding-bottom 50%
    .container
        padding-bottom .1rem
       .icon-wrapper
        position relative
        float left
        width 25%
        height 0
        padding-bottom 25%
        overflow hidden
        .icon-img-wrapper
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            .icon-img
                display block
                margin 0 auto
                box-sizing border-box
                padding-top .1rem
                height  100%
        .icon-desc
            position absolute
            bottom 0
            left 0
            right 0
            height .44rem
            line-height .44rem
            text-align center
            ellipsis()
</style>
