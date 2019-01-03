<template>
    <div class="btn-list">
        <button-com v-for="item in buttonList"
                    :buttonText="item.name"
                    :key="item.id">
        </button-com>
   </div>
</template>
<script>
import ButtonCom from '../components/buttonCom'
export default {
  props: {
    buttonList: Array
  },
  name: 'buttonList',
  components: {
    ButtonCom
  }
}
</script>
<style lang="stylus" scoped>
    .btn-list
        display flex
        flex-wrap wrap
        padding-right .6rem
</style>
