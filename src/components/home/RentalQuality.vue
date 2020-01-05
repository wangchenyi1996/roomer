<template>
  <div class="swiper-container">
    <div class="lives">
      <div class="lives-title">租住品质</div>
      <div class="custom-indicator" slot="indicator">
        <span>{{ current2 + 1 }}</span>
        <span>/ {{rentalQuality.length}}</span>
      </div>
    </div>
    <van-swipe @change="onChange" :show-indicators="false" :loop="true">
      <van-swipe-item v-for="item in rentalQuality" :key="item.id">
        <img :src="item.img" width="100%" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "RentalQuality",
  props:{
    rentalQuality:{
        type:Array,
        defalut:()=>[]
    },
    current2:{
        type:Number,
        defalut:0
    }
  },
  data() {
    return {};
  },
  methods: {
    onChange(index) {
    //   this.current2 = index;
      this.$emit('handleRent',index)
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  background-color: $bgcolor;
  height: 220px;
  margin-top: 20px;
  .lives {
    height: 45px;
    line-height: 45px;
    position: relative;
    &-title {
      font-size: $big-fz;
      font-weight: bolder;
      color: $big-color;
      margin-left: 10px;
    }
    .custom-indicator {
      font-size: $base-fz;
      position: absolute;
      right: 10px;
      top: 0px;
      z-index: 999;
      span:first-child {
        font-size: 18px;
        color: $big-color;
        font-weight: bold;
      }
      span:last-child {
        font-size: $base-fz;
        color: $littlesc;
      }
    }
  }
}
</style>
