<template>
  <div style=" margin-top:45px; ">
    <van-swipe
      @change="onChange"
      :show-indicators="false"
      :loop="true"
      :autoplay="2000"
      class="swipers"
    >
      <van-swipe-item v-for="item in swiperList" :key="item.id">
        <img v-lazy="item.url" width="100%" height="200px"/>
      </van-swipe-item>
      <div class="custom-indicator dots" slot="indicator">{{ current + 1 }} / {{swiperList.length}}</div>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props:{
      swiperList:{
          type:Array,
          defalut:()=>[]
      },
      current:{
          type:Number,
          defalut:0
      }
  },
  methods: {
    onChange(index) {
      this.$emit('changeCurrent',index)
    }
  }
};
</script>

<style lang="scss" scoped>
.dots{
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  height: 25px;
  line-height: 25px;
  width: 48px;
  border-radius: 14px;
  text-align: center;
  background-color: rgba(255, 97, 136, .7);
  padding: 0 5px;
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.swipers{
  border-radius: 10px;
  height: 200px;
}
</style>
