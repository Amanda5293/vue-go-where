<template>
    <div class="container">
        <input  class="search-ipt" type="search"
                name="search-value"
               :placeholder="placeholder">
    </div>
</template>
<script>
export default {
  props: {
    placeholder: String
  },
  name: 'search'
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .container
        height .72rem
        padding 0 .1rem
        background-color $bgColor
        .search-ipt
            box-sizing border-box
            padding 0 .1rem
            height .62rem
            line-height .62rem
            width 100%
            text-align center
            border-radius .06rem
            color #666666
</style>
