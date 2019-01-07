<template>
    <div class="container">
        <big-title :title="title"></big-title>
        <div>
            <img-text v-for="item in recommendList" :key="item.id" :recommend="item"></img-text>
        </div>
    </div>
</template>
<script>
import BigTitle from '../../components/bigTitle'
import ImgText from '../../components/imgText'
export default {
  props: {
    recommendList: Array
  },
  data () {
    return {
      title: '热销榜单'
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
