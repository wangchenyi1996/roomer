<template>
  <div class="headers u-f-sbc">
    <!-- <div class="city"> -->
    <div class="city" :style="flag ? '' :styles">
      <span>{{city}}</span>
      <i class="iconfont icon-sort-desc icon"></i>
    </div>
    <div class="search">
      <input
        type="text"
        placeholder="首月5折 白住2个月"
        v-model="search"
        @input="getSearch"
        @keyup.enter="goSearch"
      />
      <i class="iconfont icon-soushuo iconSearch" @click="goSearch"></i>
    </div>
    <div class="msg" :style="flag ? '' :styles" @click="handlelogin">
      <i class="iconfont icon-xiaoxi iconmsg"></i>
      <span class="msg-dot" v-show="islogin"></span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { debounce } from "utils/mUtils.js";
export default {
  name: "HeaderNav",
  props: {
    flag: {
      type: Boolean,
      defalut: true
    }
  },
  data() {
    return {
      styles: {
        width: 0,
        height: 0,
        overflow: "hidden",
        transition: "all 2.5s"
      },
      islogin: false,
      search: ""
    };
  },
  computed: {
    ...mapState("ziroom", ["city", "userInfo"])
  },
  mounted() {
    this.islogin = this.userInfo.isLogin;
  },
  methods: {
    handlelogin() {
      if (this.userInfo.isLogin) {
        this.$router.push("/msg");
      } else {
        this.$router.push("/login");
      }
    },
    //搜索
    goSearch() {
      this.$toast({
        message: '搜索数据：'+this.search,
        duration: 1500
      });
    },
    //防抖获取输入内容
    getSearch: debounce(function() {
      let that = this;
      console.log(that.search);
    }, 1000)
  }
};
</script>

<style lang="scss" scoped>
.headers {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 10px;
  height: 40px;
  width: 100%;
  overflow-x: hidden;
  padding: 0 7px;
  box-sizing: border-box;
  margin-bottom: 7px;
  background-color: $bgcolor;
  .city {
    color: $black;
    font-size: 15px;
    font-weight: bold;
    // margin-right: 7px;
    .icon {
      color: #999999;
      font-size: 13px;
      position: relative;
      top: -3px;
    }
  }
  .search {
    flex: 1;
    position: relative;
    height: 35px;
    margin: 0 4px;
    margin-top: 5px;
    box-sizing: border-box;
    > input {
      height: 35px;
      line-height: 35px;
      padding-left: 32px;
      width: 100%;
      box-sizing: border-box;
      font-size: 14px;
      border-radius: 10px;
      border: 1px solid $borderColor-m;
      color: $littlesc;
      &::placeholder {
        color: #cfcfcf;
      }
    }

    .iconSearch {
      position: absolute;
      left: 10px;
      top: 10px;
      color: $littlesc;
    }
  }
  .msg {
    position: relative;
    // left: 5px;
    .iconmsg {
      font-size: 22px;
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
      top: -2px;
      left: 12px;
    }
  }
}
</style>
