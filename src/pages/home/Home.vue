<template>
    <div>
        <home-header></home-header>
        <swiper></swiper>
        <icons></icons>
        <hot-recommend></hot-recommend>
        <weekend-recommend></weekend-recommend>
    </div>
</template>
<script>
import HomeHeader from '../components/header'
import Swiper from '../components/swiper'
import Icons from '../components/icons'
import HotRecommend from '../components/hotRecommend'
import WeekendRecommend from '../components/weekendRecommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Swiper,
    Icons,
    HotRecommend,
    WeekendRecommend
  }
}
</script>
<style>

</style>
