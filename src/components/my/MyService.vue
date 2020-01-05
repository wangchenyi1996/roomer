<template>
  <ul class="my-list u-f u-f-asc">
    <li class="u-f-c u-f-ajc" @click="goGZ(0)">
      <img src="../../assets/imgs/login/icon/gz.png" />
      <span>关注</span>
    </li>
    <li class="u-f-c u-f-ajc" @click="goGZ(1)">
      <img src="../../assets/imgs/login/icon/zj.png" />
      <span>足迹</span>
    </li>
    <li class="u-f-c u-f-ajc" @click="goMoney">
      <img src="../../assets/imgs/login/icon/qb.png" />
      <span>钱包</span>
    </li>
    <li class="u-f-c u-f-ajc" @click="coupons">
      <img src="../../assets/imgs/login/icon/yhj.png" />
      <span>优惠卷</span>
    </li>
    <li class="u-f-c u-f-ajc" @click="goYD">
      <img src="../../assets/imgs/login/icon/ydjl.png" />
      <span>预定记录</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MyService",
  data() {
    return {};
  },
  methods: {
    //关注和足迹
    goGZ(index){
      this.$router.push({
        name:'gz',
        params:{
          id:index
        }
      })
    },
    //钱包
    goMoney(){
      this.$router.push('/money')
    },
    //优惠卷
    coupons(){
      this.$router.push('/coupon')
    },
    //预定
    goYD(){
      this.$router.push('/predestine')
    }
  }
};
</script>

<style lang="scss" scoped>
.my-list {
  margin-top: 30px;
  margin-bottom: 30px;
  > li {
    > img {
      width: 32px;
      margin-bottom: 10px;
    }
    > span {
      font-size: $base-fz;
      color: $littlesc;
    }
  }
}
</style>
