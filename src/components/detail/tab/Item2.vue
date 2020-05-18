<template>
  <div class="fangyuan">
    <div class="fy1">
      <div class="pz-title">
        <span>房源特色</span>
      </div>
	  <ul class="tese u-f u-f-wrap" :class="isShow ? 'test2' : 'test1'">
		<li v-for="(item,index) in optList" :key="index">{{item}}</li>
	  </ul>
	  <div class="u-f u-f-ajc"><img src="../../../assets/imgs/detail/up.png" width="20" @click="showMore"></div>
	  <img src="../../../assets/imgs/detail/connect.jpg" width="100%">
    </div>
  </div>
</template>

<script>
export default {
  name: "Item2",
  data() {
    return {
		optList:[
			"独立阳台","房间明亮","风景好","带电梯","品质公寓","地铁周边","交通便捷","绿化率高","物业管理",
			"分期付款","首月减免","美女多","美食聚集地","靠近学校"
		],
		isShow:false
	};
  },
  methods: {
	  showMore(){
		this.isShow = !this.isShow
	  }
  }
};
</script>

<style lang="scss" scoped>
.test1{
	height: 63px;
	overflow-y: hidden;
}
.test2{
	height:auto;
}

.fangyuan {
  .fy1 {
    margin: 20px 10px;
    .pz-title {
      margin-bottom: 15px;
      span:nth-child(1) {
        font-size: $base-fz-m;
        font-weight: bold;
		color: $big-color;
		
      }
	}
	.tese{
	  margin-bottom: 7px;
	  >li{
		height: 30px;
		line-height: 30px;
		padding: 0 10px;
		background-color: $bg-color2;
		color: $color2;
		margin-bottom: 7px;
		margin-left: 7px;
	  }
	}
  }


}
</style>
