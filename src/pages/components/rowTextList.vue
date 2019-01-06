<template>
    <div class="container">
        <row-text v-for="item in rowTextList"
              :text="item.name"
              :key="item.id"
              @click.native="select(item.name)"></row-text>
    </div>
</template>
<script>
import RowText from '../components/rowText'
import { mapMutations } from 'vuex'
export default {
  props: {
    rowTextList: Array
  },
  name: 'rowTextList',
  components: {
    RowText
  },
  methods: {
    select (value) {
      console.log(111)
      this.changeCity(value)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>
<style lang="stylus" scoped>
</style>
