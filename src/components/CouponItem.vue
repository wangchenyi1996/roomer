<template>
  <div class="data-item">
    <div class="d1 u-f u-f-sbc">
      <ul class="d1-left">
        <li>{{item.title}}</li>
        <li>{{item.intro}}</li>
      </ul>
      <span :style="typeColor">{{item.price}}</span>
    </div>
    <van-divider dashed :style="{borderColor: '#cfcfcf'}"></van-divider>
    <p>{{item.timeStr}}</p>
    <button @click="uses" v-if="item.type==1">{{typeTitle}}</button>
    <button v-else>{{typeTitle}}</button>
  </div>
</template>

<script>
export default {
  name: "CouponItem",
  props: {
    item: {
      type: Object,
      defalut: () => {}
    }
  },
  data() {
    return {
      colors: "",
      titles: ""
    };
  },
  computed: {
    typeColor() {
      if (this.item.type == 1) {
        //未使用
        this.colors = "color:#54cbcc";
      } else if (this.item.type == 2) {
        //过期
        this.colors = "color:#ddd";
      } else if (this.item.type == 3) {
        //已使用
        this.colors = "color:#F37662";
      }
      return this.colors;
    },
    typeTitle() {
      if (this.item.type == 1) {
        //未使用
        this.titles = "兑换使用";
      } else if (this.item.type == 2) {
        //过期
        this.titles = "已过期";
      } else if (this.item.type == 3) {
        //已使用
        this.titles = "已使用";
      }
      return this.titles;
    }
  },
  methods: {
    uses() {
      this.$emit("useChange", {
        data: 1
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.data-item {
  position: relative;
  border-radius: 8px;
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 15px;
  .d1 {
    margin-top: 15px;
    margin-bottom: 20px;
    .d1-left {
      width: 70%;
      :first-child {
        font-size: $base-fz-m;
        color: $big-color;
        margin-bottom: 15px;
        font-weight: bold;
        @extend %ellipsis;
      }
      :last-child {
        font-size: $base-fz-s;
        color: $littlesc;
        font-weight: bold;
        @extend %ellipsis;
      }
    }
    > span {
      font-size: 40px;
      color: $color3;
    }
  }
  > p {
    font-size: $base-fz-s;
    color: $littlesc;
    margin-bottom: 15px;
  }
  > button {
    position: absolute;
    right: 15px;
    bottom: 10px;
    border: none;
    font-size: $base-fz-s;
    background-color: #fff;
    color: $littlesc;
    padding: 7px 10px;
    border-radius: 4px;
  }
}
</style>
