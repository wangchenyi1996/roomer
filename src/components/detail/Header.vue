<template>
  <div>
    <div class="detail-header" @click="$router.back()" v-show="showAbs">
      <i class="iconfont icon-arrow-right icon"></i>
    </div>
    <div class="fix-header" v-show="!showAbs" :style="opacityStyle">
      <i class="iconfont icon-arrow-right icon2" @click="$router.back()"></i>
      房屋详情
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
  .detail-header {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 35px;
    height: 35px;
    line-height: 35px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    .icon {
      font-size: 30px;
      color: #c7c7c4 !important;
    }
  }
  .fix-header {
    height: 40px;
    line-height: 40px;
    background-color: $main-color;
    text-align: center;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
    .icon2 {
      font-size: 30px;
      position: absolute;
      top: 0;
      left: 0;
      width: 35px;
      text-align: center;
    }
  }
</style>
