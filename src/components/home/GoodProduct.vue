<template>
  <div class="slide-scroll">
    <div class="u-f u-f-sbc">
      <div>
        <div class="th-title">自如优品</div>
        <div style="font-size:12px;color:#969a9d;margin-top:10px;">甄选家居好物 点亮美好生活</div>
      </div>
      <img src="../../assets/imgs/home/arrow-right.png" width="20" />
    </div>
    <div class="slide-list u-f">
      <div class="slide-item" v-for="(item,index) in goodProduct" :key="index">
        <div>
          <img
            :src="item.img"
            alt="房屋图片"
            style="width:100%;border-radius: 4px;"
          />
        </div>
        <div class="room-where">{{item.roomWhere}}</div>
        <div class="discount u-f u-f-sbc">
          <span style="color:#ff7966;font-size:12px;font-weight:bolder">￥{{item.price}}</span>
          <img src="../../assets/imgs/home/cart.png" width="20" height="20" style="margin-right:10px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodProduct",
  props:{
    goodProduct:{
        type:Array,
        defalut:()=>[]
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-scroll {
  margin-top: 20px;
  margin-bottom: 15px;
  div:first-of-type {
    margin-bottom: 7px;
    .th-title {
      color: $big-color;
      font-size: $big-fz;
      font-weight: bolder;
    }
  }
  .slide-list {
    width: 100%;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .slide-item {
      width: 125px;
      margin-right: 10px;
      .room-where {
        @include twoEllipsis(2);
        font-size: $base-fz;
        color: $littlesc;
        width: 125px;
        line-height: 16px;
      }
      .discount {
        font-size: $base-fz;
        padding: 5px 0;
      }
    }
  }
}
</style>
