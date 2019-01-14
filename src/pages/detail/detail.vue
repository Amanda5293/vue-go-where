<template>
    <div>
        <banner :gallaryImgs="gallaryImgs"
                :sightName="sightName"
                :bannerImg="bannerImg"></banner>
        <detail-header></detail-header>
        <category-list :categoryList="categoryList"></category-list>
        <div class="comments-container">
          <row-text :text="'用户评论'" class="title"></row-text>
          <comment v-for="item in comments" :key="item.userName" :comment="item"></comment>
        </div>
    </div>
</template>
<script>
import Banner from './components/banner'
import DetailHeader from './components/header'
import CategoryList from './components/categoryList'
import Comment from './../components/comment'
import RowText from './../components/rowText'
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
      comments: []
    }
  },
  components: {
    Banner,
    DetailHeader,
    CategoryList,
    Comment,
    RowText
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleDetailData)
    },
    handleDetailData (res) {
      const result = res.data
      if (result.ret) {
        const detailInfo = result.data
        this.sightName = detailInfo.sightName
        this.bannerImg = detailInfo.bannerImg
        this.gallaryImgs = detailInfo.gallaryImgs
        this.categoryList = detailInfo.categoryList
        this.comments = detailInfo.comments
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
  .comments-container
    padding-top .1rem
    .title
      position relative
      padding 0 .4rem
      font-size .3rem
      font-weight 600
      &:after
        content ''
        position absolute
        left .2rem
        top .2rem
        width .06rem
        height .25rem
        background-color #1ba9ba
</style>
