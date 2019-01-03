<template>
    <div class="container">
        <row-text v-for="item in rowTextList" :text="item.name" :key="item.id"></row-text>
    </div>
</template>
<script>
import RowText from '../components/rowText'
export default {
  props: {
    rowTextList: Array
  },
  name: 'rowTextList',
  components: {
    RowText
  }
}
</script>
<style lang="stylus" scoped>
</style>
