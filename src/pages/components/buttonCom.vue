<template>
    <div class="container">
        <div class="btn">{{buttonText}}</div>
    </div>
</template>
<script>
export default {
  props: {
    buttonText: String
  },
  name: 'buttonCom'
}
</script>
<style lang="stylus" scoped>
  .container
    width 33.33%
    .btn
       margin .1rem
       padding .1rem 0
       font-size .26rem
       border .02rem solid #ccc
       border-radius .06rem
       text-align center
       backgrounc-color #ffffff
</style>
