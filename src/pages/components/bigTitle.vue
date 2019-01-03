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
    @import '~styles/varibles.styl'
    .container
        height .8rem
        padding-left $paddingLeft
        line-height .8rem
        background-color #eeeeee
        color  #212121

</style>
