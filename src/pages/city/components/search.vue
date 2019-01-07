<template>
    <div>
        <div class="search-container">
            <input  class="search-ipt" type="search"
                    v-model="keyWord"
                    placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" ref="searchref" v-show="keyWord">
            <div>
                <row-text-list :rowTextList="resultArr">
                </row-text-list>
                <row-text v-show="showNoDataTip" :text="'没有找到匹配的数据'"></row-text>
            </div>
        </div>
    </div>
</template>
<script>
import RowTextList from '../../components/rowTextList'
import RowText from '../../components/rowText'
import BScroll from 'better-scroll'
export default {
  props: {
    cities: Object
  },
  name: 'search',
  data () {
    return {
      keyWord: '',
      resultArr: [],
      timer: null
    }
  },
  computed: {
    showNoDataTip () {
      return !this.resultArr.length
    }
  },
  components: {
    RowTextList,
    RowText
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.resultArr = []
        return
      }
      this.timer = setTimeout(() => {
        let result = []
        for (let key in this.cities) {
          this.cities[key].forEach(item => {
            if (item.spell.indexOf(this.keyWord) >= 0 || item.name.indexOf(this.keyWord) >= 0) {
              result.push(item)
            }
          })
        }
        this.resultArr = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.searchref)
  },
  deactivated () {
    this.keyWord = ''
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search-container
        height .72rem
        padding 0 .1rem
        background-color $bgColor
        .search-ipt
            box-sizing border-box
            padding 0 .1rem
            height .62rem
            line-height .62rem
            width 100%
            text-align center
            border-radius .06rem
            color #666666
            touch-action: none
    .search-content
        position absolute
        top 1.58rem
        bottom 0
        left 0
        right 0
        z-index 10
        overflow hidden
        background-color #ffffff
</style>
