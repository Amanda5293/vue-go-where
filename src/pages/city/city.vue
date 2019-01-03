<template>
    <div>
      <city-header></city-header>
      <city-search :placeholder="'输入城市名或拼音'"></city-search>
      <city-list v-if="canShow" :allCityData="allCityData" :curLetterr="curLetterr"></city-list>
      <alphabet-list v-if="canShow"
                    :cities="allCityData.cities"
                    @change="changeAlphabet">
      </alphabet-list>
    </div>
</template>
<script>
import CityHeader from '../components/cityHeader'
import CitySearch from '../components/search'
import AlphabetList from '../components/alphabetList'
import CityList from '../components/cityList'
import axios from 'axios'
export default {
  name: 'city',
  data () {
    return {
      allCityData: {},
      curLetterr: ''
    }
  },
  computed: {
    canShow () {
      return this.allCityData.cities
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    AlphabetList
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getDataSuc)
    },
    getDataSuc (res) {
      const resInfo = res.data
      if (resInfo.ret && resInfo.data) {
        this.allCityData = resInfo.data
      }
    },
    changeAlphabet (letter) {
      this.curLetterr = letter
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
