<template>
    <div class="container border-bottom">{{text}}</div>
</template>
<script>
export default {
  props: {
    text: String
  },
  name: 'rowText'
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-bottom
     &:before
        border-color $borderColor
    .container
        line-height .66rem
        padding-left $paddingLeft
        font-size .26rem
</style>
