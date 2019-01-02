<template>
    <div>
        <home-header :city="city"></home-header>
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
export default {
  name: 'Home',
  data () {
    return {
      city: '',
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    Swiper,
    Icons,
    HotRecommend,
    WeekendRecommend
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getDataSuc)
    },
    getDataSuc (res) {
      const resInfo = res.data
      console.log(resInfo)
      if (resInfo.ret && resInfo.data) {
        this.city = resInfo.data.city
        this.swiperList = resInfo.data.swiperList
        this.iconList = resInfo.data.iconList
        this.recommendList = resInfo.data.recommendList
        this.weekendList = resInfo.data.weekendList
      }
    }
  }
}
</script>
<style>

</style>
