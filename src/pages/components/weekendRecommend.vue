<template>
    <div class="contianer">
        <big-title :title='title'></big-title>
        <big-img-text v-for="item in recommendList"
                          :key="item.id"
                          :recommend="item">
        </big-img-text>
    </div>
</template>
<script>
import BigTitle from './bigTitle'
import BigImgText from './bigImgText'
export default {
  data () {
    return {
      title: '周末去哪儿',
      recommendList: [{
        id: '0001',
        imgSrc: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '京城周末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！'
      }, {
        id: '0002',
        imgSrc: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '京城周末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！'
      }]
    }
  },
  components: {
    BigTitle,
    BigImgText
  }
}
</script>
<style lang="stylus" scoped>
    .contianer
        margin-bottom .2rem
</style>
