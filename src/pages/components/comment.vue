<template>
    <div class="comment-container border-top">
        <div class="header">
            <img :src="comment.avatorUrl" class="avator-img">
            <div class="info">
                <div class="user-info">
                    <span class="user">{{comment.userName}}</span>
                    <span class="score"></span>
                </div>
                <div class="date">{{comment.date}}</div>
            </div>
        </div>
        <muti-img-text :text="comment.comment" :imgs="comment.imgs"></muti-img-text>
    </div>
</template>
<script>
import MutiImgText from './mutImgText'
export default {
  props: {
    comment: Object
  },
  name: 'Comment',
  components: {
    MutiImgText
  }
}
</script>
<style lang="stylus" scoped>
    .comment-container
        padding .2rem .2rem
        .header
            position relative
            margin-bottom .2rem
           .avator-img
                width .8rem
                height .8rem
                border-radius.4rem
           .info
                position absolute
                top .1rem
                left 0
                padding-left 1rem
                line-height .28rem
                color #9e9e9e
                font-size .24rem
</style>
