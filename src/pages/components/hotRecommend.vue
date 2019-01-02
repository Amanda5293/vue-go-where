<template>
    <div class="container">
        <big-title :title="title"></big-title>
        <div>
            <img-text v-for="item in recommendList" :key="item.id" :recommend="item"></img-text>
        </div>
    </div>
</template>
<script>
import BigTitle from './bigTitle'
import ImgText from './imgText'
export default {
  data () {
    return {
      title: '热销榜单',
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
        title: '京城周末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
        title: '京城周末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！'
      }]
    }
  },
  components: {
    BigTitle,
    ImgText
  }
}
</script>
<style lang="stylus" scoped>

</style>
