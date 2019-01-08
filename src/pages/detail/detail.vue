<template>
    <div>
        <banner></banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>
<script>
import Banner from './components/banner'
import DetailHeader from './components/header'
export default {
  name: 'detail',
  components: {
    Banner,
    DetailHeader
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height  50rem
</style>
