<template>
    <div class="alphabet-container">
       <div class="alphabet"
            v-for="item in letters"
            :key="item"
            :ref="item"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleClick">
            {{item}}
      </div>
    </div>
</template>
<script>
export default {
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      let letters = []
      for (let key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  name: 'alphabetList',
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        } else {
          setTimeout(() => {
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .alphabet-container
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .44rem
        .alphabet
            line-height .4rem
            text-align center
            color $bgColor
</style>
