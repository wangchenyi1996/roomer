<template>
  <div>
    <div class="danke-live">
      <div class="live-title u-f u-f-sbc">
        <p class="title">蛋壳生活</p>
        <div class="u-f u-f-ajc">
          <span style="font-size:15px;color:#919191">有料蛋壳不一样</span>
          <img src="../../assets/imgs/login/r.png" width="22" />
        </div>
      </div>
      <ul class="live-list u-f u-f-sbc">
        <li class="live-item">
          <img src="../../assets/imgs/login/sh1.jpg" width="100%" />
          <p>住蛋壳 GO出众-重庆站回顾</p>
        </li>
        <li class="live-item">
          <img src="../../assets/imgs/login/sh2.jpg" width="100%" />
          <p>丰修99元上门换电池</p>
        </li>
      </ul>
    </div>
    <div class="customer-service">
      <img src="../../assets/imgs/login/kefu.jpg" width="100%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DLive",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.danke-live {
  background-color: #f9f9f9;
  padding: 15px 10px;
  border-radius: 8px;
  margin-top: 20px;
  .live-title {
    .title {
      font-size: $base-fz-m;
      color: $big-color;
      font-weight: bold;
    }
  }
  .live-list {
    margin-top: 15px;
    .live-item {
      width: 48%;
      > img {
        border-radius: 4px;
        margin-bottom: 10px;
      }
      > p {
        font-size: $base-fz;
        color: $text-color;
        font-weight: bold;
      }
    }
  }
}
.customer-service {
  margin-top: 20px;
  > img {
    border-radius: 4px;
    border: 1px solid #f9f9f9;
  }
}
</style>
