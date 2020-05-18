<template>
  <div class="m-header u-f u-f-ajc">
    <input type="text" placeholder="请输入优惠券码" v-model="search" />
    <img src="../assets/imgs/findHome/x.png" v-show="inputRight" @click="clearC" />
    <button :style="inputRight?obj:''" @click="searchBtn">确认</button>
  </div>
</template>

<script>
export default {
  name: "CouponHeader",
  data() {
    return {
      search: "",
      obj: {
        background: "#3dbdc7"
      }
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
    //清除输入框文字
    clearC() {
      this.search = "";
    },
    //搜索
    searchBtn() {
      if (!this.search) {
        return this.$toast({
          message: "请先输入优惠卷码",
          duration: 1500
        });
      }
      this.$toast({
        message: "正在搜索中",
        duration: 1500,
        onClose: () => {
          this.search = "";
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.m-header {
  position: relative;
  margin-top: 10px;
  height: 35px;
  line-height: 35px;
  > input {
    @include borderAll($r: #cfcfcf);
    border-radius: 4px;
    margin-right: 15px;
    width: 65%;
    height: 31px;
    padding-left: 10px;
    &::placeholder {
      color: $littlesc;
    }
  }
  > button {
    border: none;
    height: 35px;
    width: 22%;
    color: #ffffff;
    font-size: $base-fz-s;
    border-radius: 4px;
  }
  > img {
    position: absolute;
    right: 30%;
  }
}
</style>
