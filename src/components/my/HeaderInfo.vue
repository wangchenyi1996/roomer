<template>
  <div>
    <div style=" height: 40px;line-height: 40px;">
      <div class="header" v-show="showAbs">
        <img src="../../assets/imgs/login/set.png" @click="goSet" />
        <i class="iconfont icon-xiaoxi iconmsg" @click="goMsg"></i>
        <span class="msg-dot" v-show="userInfo.isLogin"></span>
      </div>
    </div>
    <div class="fix-header u-f u-f-sbc" v-show="!showAbs">
      <div class="users u-f u-f-ac">
        <img
          :src="userInfo.isLogin ? userInfo.faceImg : img2"
          width="30"
          style="margin-right:7px;border-radius:50%"
        />
        <span v-if="userInfo.isLogin">{{rightPhone}}</span>
        <span @click="goLogin" v-else>{{'点击登录'}}</span>
      </div>
      <div class="msg2">
        <i class="iconfont icon-xiaoxi iconmsg" @click="goMsg"></i>
        <span class="msg-dot" v-show="userInfo.isLogin"></span>
      </div>
    </div>
    <div class="userInfo u-f u-f-sbc">
      <div class="u-f u-f-ajc">
        <img
          :src="userInfo.isLogin ? userInfo.faceImg : img2"
          width="48"
          style="margin-right:7px;border-radius:50%"
        />
        <div class="tel-vip u-f-c u-f-ajc">
          <span v-if="userInfo.isLogin">{{rightPhone}}</span>
          <span @click="goLogin" v-else>{{'点击登录'}}</span>
          <div class="vip">
            <img src="../../assets/imgs/login/vip.png" width="25" />
            <span>{{userInfo.isLogin ? userInfo.label : '我的会员'}}</span>
          </div>
        </div>
      </div>
      <img src="../../assets/imgs/login/vip2.jpg" width="80" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "xxxx",
  data() {
    return {
      showAbs: true,
      img1: require("../../assets/imgs/login/yes.png"),
      img2: require("../../assets/imgs/login/no.png")
    };
  },
  computed: {
    ...mapState("ziroom", ["userInfo"]),
    rightPhone() {
      //1、使用正则
      // return this.tel.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3')
      //2、字符串截取
      // return this.tel.substr(0, 3) + "****" + this.tel.substr(7);
      if (this.userInfo.telphone) {
        return (
          this.userInfo.telphone.substr(0, 3) +
          "****" +
          this.userInfo.telphone.substr(7)
        );
      }
    }
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 80) {
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    },
    //登录
    goLogin() {
      this.$router.replace("/login");
    },
    //信息
    goMsg() {
      this.$router.push("/msg");
    },
    // 设置
    goSet() {
      this.$router.push("/set");
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  right: 0px;
  > img {
    width: 26px;
    vertical-align: middle;
    position: relative;
    top: -6px;
    right: 15px;
  }
  .iconmsg {
    font-size: 24px;
    color: $littlesc;
  }
  .msg-dot {
    display: block;
    content: " ";
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #e53935;
    position: absolute;
    top: 6px;
    left: 40px;
  }
}
.fix-header {
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #515151;
  font-size: 16px;
  background-color: #f9f9f9;
  @include borderBottom(1px, #cfcfcf);
  box-sizing: border-box;
  .msg2 {
    position: absolute;
    right: 10px;
    .iconmsg {
      font-size: 24px;
      color: $littlesc;
    }
    .msg-dot {
      display: block;
      content: " ";
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: #e53935;
      position: absolute;
      top: 8px;
      left: 15px;
    }
  }
}
.userInfo {
  .tel-vip {
    > span {
      font-size: $base-fz-s;
      color: $littlesc;
    }
    .vip {
      margin-top: 7px;
      height: 20px;
      background-color: #f9dea9;
      padding: 2px 10px;
      border-radius: 10px;
      > img {
        vertical-align: middle;
        position: relative;
        top: -7px;
        left: -14px;
      }
      > span {
        font-size: $base-fz;
        color: $color1;
      }
    }
  }
}
</style>
