<template>
  <div class="major">
    <div class="major-left u-f u-f-sbc">
      <div class="major-title">
        <div>诚信服务</div>
        <div>专业陪伴 一心守护</div>
      </div>
      <img src="../../assets/imgs/home/arrow-right.png" alt="更多" width="20" height="20" />
    </div>
    <div class="major-right u-f u-f-sbc">
      <img src="../../assets/imgs/home/service/baojie.png" width="32%" />
      <img src="../../assets/imgs/home/service/banjia.png" width="32%" />
      <img src="../../assets/imgs/home/service/weixiu.png" width="32%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceMajor",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.major {
  margin-top: 20px;
  .major-left {
    height: 50px;
    .major-title {
      > :first-child {
        font-size: $big-fz;
        color: $big-color;
        font-weight: bold;
        margin-bottom: 10px;
      }
      :last-child {
        font-size: $base-fz;
        color: $littlesc;
      }
    }
  }
  .major-right {
    margin-top: 15px;
    > img {
      border-radius: 4px;
    }
  }
}
</style>
