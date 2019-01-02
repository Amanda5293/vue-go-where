<template>
    <div class="contianer">
        <big-title :title='title'></big-title>
        <big-img-text v-for="item in weekendList"
                          :key="item.id"
                          :recommend="item">
        </big-img-text>
    </div>
</template>
<script>
import BigTitle from './bigTitle'
import BigImgText from './bigImgText'
export default {
  props: {
    weekendList: Array
  },
  data () {
    return {
      title: '周末去哪儿'
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
