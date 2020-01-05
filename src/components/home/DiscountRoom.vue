<template>
  <div class="slide-scroll">
    <div class="u-f u-f-sbc">
      <div class="th-title">特惠房源</div>
      <img src="../../assets/imgs/home/arrow-right.png" width="20" />
    </div>
    <div class="slide-list u-f">
      <div class="slide-item" v-for="(item,index) in discountRoom" :key="index" @click="goDetail(item.id)">
        <div>
          <img
            :src="item.img"
            alt="房屋图片"
            style="width:100%;border-radius: 4px;"
          />
        </div>
        <div class="room-where">{{item.roomWhere}}</div>
        <div class="discount">
          <span style="color:#ff7966;transform:scale(.8);display: inline-block;">￥</span>
          <span style="color:#ff7966;font-size:14px">{{item.price}}</span>
          <span style="color:#666;transform:scale(.8);display: inline-block;">/首月</span>
          <span
            style="color:#666;transform:scale(.9);display: inline-block;text-decoration:line-through"
          >{{item.oldPrice}}</span>
        </div>
        <div>
          <span v-for="label in item.label" :key="label.id"
            :style="label.id==2
            ? 'background-color: #ffffff;color:#666;display:inline-block;padding:4px;transform:scale(.9);border:1px solid #ccc;border-radius:4px;'
            : 'background-color: #ff7966;color:#fff;display:inline-block;padding:4px;transform:scale(.9);border-radius:4px;'"
          >{{label.msg}}</span>
          <!-- <span
            style="background-color: #ffffff;color:#666;display:inline-block;padding:4px;transform:scale(.9);border:1px solid #ccc;border-radius:4px;"
          >品质公寓</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscountRoom",
  props:{
    discountRoom:{
        type:Array,
        defalut:()=>[]
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
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-scroll {
  height: 200px;
  margin-top: 20px;
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
      margin-right: 7px;
      .room-where {
        @extend %ellipsis;
        font-size: $base-fz;
        color: $big-color;
        font-weight: bold;
        padding: 3px 0;
      }
      .discount {
        font-size: $base-fz;
        padding: 5px 0;
      }
    }
  }
}
</style>
