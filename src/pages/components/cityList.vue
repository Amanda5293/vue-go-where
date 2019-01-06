<template>
    <div class="city-container" ref="wrapper">
        <div>
           <div class="item border-topbottom">
                <big-title class="title" :title="'当前城市'"></big-title>
                <button-com :buttonText="currentCity"></button-com>
            </div>
            <div class="item border-topbottom">
                <big-title class="title" :title="'热门城市'"></big-title>
                <button-list :buttonList="hotCityList"></button-list>
            </div>
            <div class="item border-topbottom" v-for="(cities,key) of allCities" :key="key" :ref="key">
                <big-title class="key" :title="key"></big-title>
                <row-text-list :rowTextList="cities"></row-text-list>
            </div>
        </div>
    </div>
</template>
<script>
import BigTitle from '../components/bigTitle'
import ButtonList from '../components/buttonList'
import ButtonCom from '../components/buttonCom'
import RowTextList from '../components/rowTextList'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'cityList',
  props: {
    allCityData: Object,
    curLetterr: String
  },
  data () {
    return {
      hotCityList: this.allCityData.hotCities,
      allCities: this.allCityData.cities
    }
  },
  computed: mapState({currentCity: 'city'}),
  components: {
    BigTitle,
    ButtonCom,
    ButtonList,
    RowTextList
  },
  watch: {
    curLetterr (newValue) {
      const ele = this.$refs[newValue][0]
      this.scroll.scrollToElement(ele)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang='stylus' scoped>
    .border-topbottom
      &:before
        border-color $borderColor
      &:after
        border-color $borderColor
    .city-container
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        overflow hidden
        .item
            .title
                line-height .54rem
                height .54rem
                color #666
</style>
