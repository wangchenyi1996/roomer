<template>
  <div class="have-item">
    <div class="timing u-f u-f-ac">
      <img :src="typeImg" />
      <span>{{item.timeStr}}</span>
    </div>
    <div class="main u-f u-f-ajc" @click="goDetail(item.id)">
      <div class="left">
        <img :src="item.img" />
      </div>
      <div class="right">
        <p class="wheres">{{item.roomWhere}}</p>
        <p class="price">{{item.price}}元/月</p>
        <ul class="labels u-f">
          <li v-for="l in item.label" :key="l.id">{{l.msg}}</li>
        </ul>
      </div>
    </div>
    <template v-if="item.type==1">
      <div class="gps u-f u-f-sbc">
        <div class="u-f u-f-ac">
          <img src="../../assets/imgs/login/dw.png" />
          <span @click="getGPS(item.id)">导航</span>
        </div>
        <button @click="connects">联系管家</button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "RoomItem",
  props: {
    item: {
      type: Object,
      defalut: () => {}
    }
  },
  computed: {
    typeImg() {
      if (this.item.type == 1) {
        return this.imgUrl = require('../../assets/imgs/login/dd.png')
      }
      if (this.item.type == 2) {
        return this.imgUrl = require('../../assets/imgs/login/ykg.png')
      }
      if (this.item.type == 3) {
        return this.imgUrl = require('../../assets/imgs/login/yyd.png')
      }
    }
  },
  data() {
    return {
        imgUrl:''
    };
  },
  methods: {
    connects() {
      this.$toast({
        message: "联系管家",
        duration: 1500
      });
    },
    goDetail(id) {
      this.$toast({
        message: `点击了第${id}个`,
        duration: 1500
      });
      this.$router.push({
        name:'Detail',
        params:{
          id:id
        }
      })
    },
    // 导航
    getGPS(id){
      this.$emit('goGPS',id)
    }
  }
};
</script>

<style lang="scss" scoped>
.have-item {
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  .timing {
    > img {
      width: 22px;
      margin-right: 10px;
    }
    > span {
      font-size: $base-fz-s;
      color: $littlesc;
    }
  }
  .main {
    .left {
      margin-right: 10px;
      // flex: 1;
      width: 33.333%;
      > img {
        margin-top: 10px;
        width: 100%;
        border-radius: 4px;
      }
    }
    .right {
      // flex: 2;
      width: 66.66%;
      .wheres {
        font-size: $base-fz-s;
        color: $text-color;
        font-weight: bold;
        @extend %ellipsis;
        margin-bottom: 7px;
      }
      .price {
        font-size: $base-fz-s;
        color: $littlesc;
        font-weight: bold;
        margin-bottom: 7px;
      }
      .labels {
        > li {
          height: 22px;
          line-height: 22px;
          margin-right: 10px;
          padding: 1px 7px;
          border-radius: 4px;
          font-size: $base-fz;
        }
        :nth-child(2n + 1) {
          color: $color3;
          background-color: #fff1ee;
        }
        :nth-child(2n) {
          color: $littlesc;
          background-color: #f9f9f9;
        }
      }
    }
  }
  .gps {
    margin-top: 10px;
    img {
      width: 24px;
      margin-right: 7px;
    }
    span {
      font-size: $base-fz;
      color: $black;
      font-weight: bold;
      position: relative;
      top: -2px;
    }
    button {
      height: 30px;
      width: 80px;
      border-radius: 15px;
      border: none;
      background-color: #fff;
      color: $main-color;
      font-weight: bold;
      @include borderAll($r: $main-color);
    }
  }
}
</style>
