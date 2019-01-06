<template>
    <div>
        <home-header></home-header>
        <swiper :swiperList="swiperList"></swiper>
        <icons :iconList="iconList"></icons>
        <hot-recommend :recommendList="recommendList"></hot-recommend>
        <weekend-recommend :weekendList="weekendList"></weekend-recommend>
    </div>
</template>
<script>
import HomeHeader from '../components/header'
import Swiper from '../components/swiper'
import Icons from '../components/icons'
import HotRecommend from '../components/hotRecommend'
import WeekendRecommend from '../components/weekendRecommend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: mapState(['city']),
  components: {
    HomeHeader,
    Swiper,
    Icons,
    HotRecommend,
    WeekendRecommend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getDataSuc)
    },
    getDataSuc (res) {
      const resInfo = res.data
      if (resInfo.ret && resInfo.data) {
        this.swiperList = resInfo.data.swiperList
        this.iconList = resInfo.data.iconList
        this.recommendList = resInfo.data.recommendList
        this.weekendList = resInfo.data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
<style>

</style>
