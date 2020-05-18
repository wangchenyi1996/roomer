<template>
  <div style="height:100%;" class="animated slideInRight fast">
    <van-swipe
      @change="onChange"
      :show-indicators="true"
      :loop="false"
      :indicator-color="colors"
      class="swipers"
    >
      <van-swipe-item>
        <div class="jump-over" @click="goHome">跳过</div>
        <img src="../assets/imgs/welcome/1.png" width="100%" />
      </van-swipe-item>
      <van-swipe-item>
        <div class="jump-over" @click="goHome">跳过</div>
        <img src="../assets/imgs/welcome/2.png" width="100%" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/imgs/welcome/3.png" width="100%" />
        <div class="find-sth" @click="goHome">发现新事物</div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
//引入工具函数
import { setStore, getStore } from "utils/mUtils.js";
export default {
  name: "Welcome",
  data() {
    return {
      current: 0,
      colors: "#654f3a"
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    goHome() {
      setStore("launchFlag", true);
      this.$router.replace("/home");
    }
  },
  beforeRouteEnter(to, from, next) {
    // console.log(to.path,from.path)
    let flag = getStore("launchFlag");
    if (flag) {
      next("/home");
    } else {
      if (to.path == "/welcome") {
        next();
      }
    }
  }
};
</script>

<style lang="scss">
.swipers {
  height: 100%;
  width: 100%;
  .jump-over {
    position: absolute;
    top: 25px;
    right: 15px;
    width: 55px;
    height: 30px;
    background-color: #f5f5f5;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    border-radius: 20px;
    color: #aba29a;
  }
  .find-sth {
    position: fixed;
    bottom: 55px;
    left: 20%;
    background-color: #f5f5f5;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    border-radius: 20px;
    width: 60%;
    color: #aba29a;
    font-weight: bold;
  }
}
// 指示点颜色
.van-swipe__indicator {
  width: 8px;
  height: 8px;
  background-color: #94948e !important;
  border-radius: 100%;
}
.van-swipe__indicator--active {
  background-color: #654f3a !important;
  opacity: 1;
}
</style>
