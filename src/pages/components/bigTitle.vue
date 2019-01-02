<template>
    <div class="container">{{title}}</div>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
    .container
        height .8rem
        padding-left .26rem
        line-height .8rem
        background-color #eeeeee
        color  #212121

</style>
