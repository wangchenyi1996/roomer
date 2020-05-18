<template>
  <div class="banners-bg u-f u-f-ajc">
    <div class="banners">
      <van-swipe indicator-color="#3dbdc7" style="height:240px;">
        <van-swipe-item>
          <div style="width:280px;margin:0 auto;">
            <p class="p1">甩手掌柜</p>
            <p class="p2">蛋壳保证与业主签署合同后及时打款。</p>
            <p class="p3">在房屋整个租期内，有蛋壳专业管家打理，省心省力，坐享收益。</p>
            <p class="p4">房屋升级改造，配置全套家具、家电，实现高额增值服务。</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div style="width:280px;margin:0 auto;">
            <p class="p1">省时省心</p>
            <p class="p2">蛋壳保证与业主签署合同后及时打款。</p>
            <p class="p3">在房屋整个租期内，有蛋壳专业管家打理，省心省力，坐享收益。</p>
            <p class="p4">房屋升级改造，配置全套家具、家电，实现高额增值服务。</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div style="width:280px;margin:0 auto;">
            <p class="p1">安全无忧</p>
            <p class="p2">出租人群严格筛选，高素质租户。</p>
            <p class="p3">租约结束后，蛋壳会为您的房子做深度保洁。</p>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroSwiper",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.van-swipe__indicator {
  background-color: #5a7296;
}
.van-swipe__indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.van-swipe__indicator--active {
  width: 14px;
  border-radius: 10px;
}
</style>
<style lang="scss" scoped>
.banners-bg {
  background: url("../../assets/imgs/delegate/bg-2.png") no-repeat center center;
  height: 300px;
  background-size: 100%;
  margin-bottom: 30px;
  .banners {
    height: 240px;
    width: 88%;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 4px;
    .p1 {
      text-align: center;
      margin-top: 30px;
      margin-bottom: 20px;
      font-size: 15px;
      letter-spacing: 3px;
      color: #7e7d7e;
    }
    .p2,
    .p3,
    .p4 {
      text-align: center;
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 13px;
      letter-spacing: 3px;
      color: #7e7d7e;
      line-height: 20px;
    }
  }
}
</style>
