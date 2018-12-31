<template>
    <div>
        <home-header></home-header>
        <swiper></swiper>
        <icons></icons>
    </div>
</template>
<script>
import HomeHeader from '../components/header'
import Swiper from '../components/swiper'
import Icons from '../components/icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Swiper,
    Icons
  }
}
</script>
<style>

</style>
