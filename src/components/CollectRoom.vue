<template>
  <div class="lists" @click="goDetail(index)">
    <p class="p1">{{item.title}}</p>
    <div class="room-item u-f">
      <img src="http://lc-00shgioj.cn-n1.lcfile.com/b21aa716b308d307b501/1.jpg" class="room-left" />
      <div class="room-right">
        <p class="p2">合租 | 三室一厅 12m² 10/30层</p>
        <p class="p3">距离1号线1000米</p>
        <ul class="u-f p4">
          <li v-for="(l,index) in item.label" :key="index">{{l}}</li>
        </ul>
        <div class="p5 u-f u-f-sbc">
          <div>
            <span>￥</span>
            <span>680</span>
            <span>/首月</span>
            <span>990</span>
          </div>
          <div class="yk" @click.stop="looks">约看</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollectRoom",
  props:{
    item:{
        type:Object,
        defalut:()=>{}
    },
    index:{
        type:Number
    }
  },
  methods: {
    //点击约看
    looks() {
      this.$toast({
        message: "点击了约看...",
        duration: 1500
      });
    },
    //点击详情
    goDetail(id) {
      this.$router.push({
        name: "Detail",
        params: {
          id: id
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.lists {
  width: 95%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #f9f9f9;
  .p1 {
    font-size: $base-fz-s;
    color: $text-color;
    font-weight: bold;
    margin-bottom: 8px;
    padding: 3px 0;
    @extend %ellipsis;
  }
  .room-item {
    .room-left {
      width: 37%;
      height: 35%;
      margin-right: 10px;
      border-radius: 4px;
    }
    .room-right {
      width: 60%;
      .p1 {
        font-size: $base-fz-m;
        font-weight: bold;
        color: $big-color;
        margin-bottom: 7px;
        @extend %ellipsis;
      }
      .p2,
      .p3 {
        font-size: $base-fz;
        color: #999;
        margin-bottom: 7px;
        padding-bottom: 1px;
        @extend %ellipsis;
      }
      .p4 {
        margin-bottom: 10px;
        li {
          padding: 3px 5px;
          border-radius: 4px;
        }
        :nth-child(2n + 1) {
          color: $color3;
          background-color: #fff1ee;
          margin-right: 7px;
        }
        :nth-child(2n) {
          color: $littlesc;
          background-color: #ffffff;
          @include borderAll($r: $tabColor);
          margin-right: 7px;
        }
      }
      .p5 {
        span:nth-child(1) {
          font-size: $base-fz;
          color: $color3;
        }
        span:nth-child(2) {
          font-size: $base-fz-m;
          font-weight: bold;
          color: $color3;
        }
        span:nth-child(3) {
          font-size: $base-fz;
          color: $littlesc;
        }
        span:nth-child(4) {
          font-size: $base-fz;
          color: $littlesc;
          text-decoration: line-through;
        }
        .yk {
          font-size: $base-fz-s;
          color: #fff;
          background-color: $main-color;
          padding: 5px 10px;
          border-radius: 20px;
        }
      }
    }
  }
}
</style>
