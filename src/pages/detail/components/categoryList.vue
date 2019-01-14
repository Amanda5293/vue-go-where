<template>
    <div class="list-container">
        <div v-for="(item,index) of categoryList" :key="index">
          <div  class="item border-bottom" >
            <span class="ticket"></span>{{item.title}}
          </div>
          <div v-if="item.children" class="children">
            <category-list :categoryList="item.children"></category-list>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    categoryList: Array
  },
  name: 'CategoryList'
}
</script>
<style lang="stylus" scoped>
  .item
    line-height .8rem
    font-size .28rem
    vertical-align middle
    .ticket
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(https://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      margin-left .2rem
      background-size: .4rem 3rem
      vertical-align middle
  .children
    padding-left .3rem
    .item
      padding 0 .2rem
</style>
