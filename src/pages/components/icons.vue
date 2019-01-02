<template>
    <div class="container">
         <swiper  :options="iconSwiperOption" ref="iconSwiper">
            <swiper-slide  v-for = "(page,index) of pages" :key="index" >
                <div class="icon-wrapper" v-for="item in page" :key="item.id">
                    <div class="icon-img-wrapper">
                        <img class="icon-img" :src="item.imgUrl">
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
  props: {
    iconList: Array
  },
  data () {
    return {
      iconSwiperOption: {
        autoplay: 0
      }
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
      console.log(pages)
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
