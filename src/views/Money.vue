<template>
  <div class="moneys">
    <!-- 头部 可使用插槽-->
    <CommHeader :title="title">
      <div slot="right">
        <span style="position:absolute;right:10px;top:0px;font-size:14px;" @click="moneyDetail">账户明细</span>
      </div>
    </CommHeader>
    <div class="userinfos u-f-c u-f-ajc">
		<p>账户总余额（元）</p>
		<count-to  :start-val="0" :end-val="1345.10" :duration="2000" :separator="''" :decimals='2'/>  
	</div>
	<ul class="m-list">
		<li class="u-f u-f-sbc">
			<div class="left u-f">
				<img src="../assets/imgs/login/icm-1.png">
				<div class="intro u-f-c u-f-jc">
					<span>待扣缴服务</span>
					<span>委托蛋壳代扣，省时省心</span>
				</div>
			</div>
			<img src="../assets/imgs/login/r.png" class="right">
		</li>
		<li class="u-f u-f-sbc">
			<div class="left u-f">
				<img src="../assets/imgs/login/icm-2.png">
				<div class="intro u-f-c u-f-jc">
					<span>费用报销</span>
					<span>向蛋壳申请垫付、报销账单</span>
				</div>
			</div>
			<img src="../assets/imgs/login/r.png" class="right">
		</li>
		<li class="u-f u-f-sbc">
			<div class="left u-f">
				<img src="../assets/imgs/login/icm-3.png">
				<div class="intro u-f-c u-f-jc">
					<span>银行卡管理</span>
					<span>只能绑定本人相关银行卡</span>
				</div>
			</div>
			<img src="../assets/imgs/login/r.png" class="right">
		</li>
	</ul>
  </div>
</template>

<script>
import CommHeader from "@/components/CommHeader.vue"
import countTo from 'vue-count-to'		//数字滚动
export default {
  name: "Money",
  components: {
	CommHeader,
	countTo
  },
  data() {
    return {
      title: "我的钱包"
    };
  },
  methods: {
    moneyDetail() {
      this.$toast({
        message: "点击了账户明细",
        duration: 1500
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.moneys {
  .userinfos {
    background: url("../assets/imgs/login/m-bg.jpg");
	height: 200px;
	margin-top: 45px;
	:first-child{
		font-size: $base-fz-m;
        color: #fff;
        margin-bottom: 25px;
        font-weight: bold;
	}
	:last-child{
		font-size: 40px;
        color: #fff;
        margin-bottom: 25px;
        font-weight: bold;
	}
  }
  .m-list{
	margin: 30px 15px;
	li{
		@include borderBottom($r:#efefef);
		padding-bottom: 10px;
		margin-top: 30px;
	  .left{
		  >img{
			  margin-right: 15px;
		  }
		  .intro{
			line-height: 22px;
			:first-child{
				font-size: $base-fz-m;
				color: $text-color;
				font-weight: bold;
			}
			:last-child{
				font-size: $base-fz-s;
        		color: $littlesc;
			}
		  }
	  }
	}
  }
}
</style>
