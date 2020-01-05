<template>
  <div class="delegate-intros">
    <div class="delegate-btn">立即委托</div>
    <p class="tel">委托热线: 400-062-8688</p>
    <img src="../../assets/imgs/delegate/app.png" @click="downApp" />
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {
    downApp() {
      this.$toast({
        message: "正在下载中...",
        duration: 1500
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.delegate-intros {
  .delegate-btn {
    margin-top: 40px;
    height: 40px;
    line-height: 40px;
    width: 50%;
    font-size: $base-fz-s;
    color: #fff;
    background-color: $main-color2;
    border-radius: 4px;
    text-align: center;
    position: relative;
    left: 25%;
  }
  .tel {
    font-size: $base-fz-s;
    color: #7d7d7e;
    text-align: center;
    margin-top: 20px;
  }
  img {
    width: 90%;
    position: relative;
    left: 5%;
    margin-top: 20px;
  }
}
</style>
