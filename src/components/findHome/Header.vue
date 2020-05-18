<template>
  <div class="header u-f u-f-sbc">
    <input type="text" class="search" placeholder="首月5折 白住两个月" v-model="search" @blur="blurs" />
    <img src="../../assets/imgs/findHome/x.png" class="xxx" v-show="inputRight" />
    <i class="iconfont icon-soushuo iconSearch"></i>
    <i class="iconfont icon-dingweiweizhi gps"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //输入框后面删除图标显示和隐藏
      search: ""
    };
  },
  computed: {
    inputRight() {
      if (this.search != "") {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    blurs() {
      this.search = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  flex: 1;
  position: relative;
  height: 35px;
  margin: 0 4px;
  margin-top: 5px;
  box-sizing: border-box;
  .search {
    border: none;
    height: 35px;
    line-height: 35px;
    padding-left: 32px;
    width: 90%;
    box-sizing: border-box;
    font-size: $base-fz-s;
    border-radius: 20px;
    color: $text-color;
    background-color: #f9f9f9;
    &::placeholder {
      color: #cfcfcf;
    }
  }
  .xxx {
    position: absolute;
    right: 50px;
  }
  .iconSearch {
    position: absolute;
    left: 10px;
    top: 10px;
    color: $text-color;
  }
  .gps {
    font-size: 24px;
    color: #666666;
  }
}
</style>
