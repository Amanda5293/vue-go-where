<template>
  <div class="header-container">
    <router-link to="/" class="header-return">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <transition name="fade">
        <div class="header-title" v-show="showTitle">
        <router-link to="/">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>城市选择
        </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      showTitle: false
    }
  },
  methods: {
    scrollChange () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        this.showTitle = true
      } else {
        this.showTitle = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.scrollChange, false)
  },
  deactivated () {
    window.removeEventListener('scroll', this.scrollChange, false)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .fade-enter,
    .fade-leave-to
        opacity 0
    .fade-enter-active,
    .fade-leave-active
        transition: opacity .8s ease
    .back-icon
         text-align center
         font-size .4rem
         color #ffffff
    .header-return
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        border-radius 50%
        background-color rgba(0,0,0,.5)
    .header-title
        position fixed
        top 0
        left 0
        right 0
        height $headerHeight
        line-height $headerHeight
        font-size .32rem
        text-align center
        color #ffffff
        background-color $bgColor
        .back-icon
            position absolute
            top 0
            left 0

</style>
