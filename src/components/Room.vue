<template>
  <div class="room-item u-f" @click="goDetail(index)">
    <img :src="item.roomImg" class="room-left" @load="imgLoad"/>
    <div class="room-right">
      <p class="p1">{{item.roomWhere}}</p>
      <p class="p2">{{item.type==1?'合租':'整租'}} | {{item.roomIntro}} {{item.roomArea}} {{item.roomLive}}</p>
      <p class="p3">{{item.whereInfo}}</p>
      <ul class="u-f p4">
        <li v-for="(l,index) in item.label" :key="index">{{l}}</li>
      </ul>
      <div class="p5">
        <span>￥</span>
        <span>{{item.price}}</span>
        <span>/首月</span>
        <span>{{item.oldPrice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Room",
  props:{
    item:{
        type:Object,
        defalut:()=>{}
    },
    index:{
      type:Number
    }
  },
  methods:{
    goDetail(id){
      console.log(this.$router)
      this.$router.push({
        name:'Detail',
        params:{
          id:id
        }
      })
    },
    imgLoad() {
      this.$bus.$emit("imgMoreLoad");
    },
  }
};
</script>

<style lang="scss" scoped>
.room-item {
  margin-bottom: 20px;
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
    }
  }
}
</style>
