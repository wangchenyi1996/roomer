<template>
  <div class="item1-detail">
    <div class="peizhi1">
      <div class="pz-title u-f u-f-sbc">
        <span>租约信息</span>
        <span>*房屋面积为建筑面积</span>
      </div>
      <ul class="pz-lease-info u-f-c">
        <li class="pz-lease-item">
          <span>签约时长</span>
          <span>可签约一年/可签约两年</span>
        </li>
        <li class="pz-lease-item">
          <span>入住状态</span>
          <span>可立即入住</span>
        </li>
        <li class="pz-lease-item">
          <span>房源编号</span>
          <span>30092-D</span>
        </li>
      </ul>
    </div>

    <div class="peizhi2">
      <div class="pz-title">
        <span>房源简介</span>
      </div>
      <ul class="pz-lease-info2 u-f u-f-asc">
        <li class="pz-lease-item2 u-f-c u-f-ajc">
          <img src="../../../assets/imgs/detail/room-device/chuang.png" />
          <span>床</span>
        </li>
        <li class="pz-lease-item2 u-f-c u-f-ajc">
          <img src="../../../assets/imgs/detail/room-device/sg.png" />
          <span>衣柜</span>
        </li>
        <li class="pz-lease-item2 u-f-c u-f-ajc">
          <img src="../../../assets/imgs/detail/room-device/sz.png" />
          <span>书桌</span>
        </li>
        <li class="pz-lease-item2 u-f-c u-f-ajc">
          <img src="../../../assets/imgs/detail/room-device/kt.png" />
          <span>空调</span>
        </li>
        <li class="pz-lease-item2 u-f-c u-f-ajc">
          <img src="../../../assets/imgs/detail/room-device/gengduo.png" />
          <span>更多</span>
        </li>
      </ul>
    </div>

    <div class="peizhi3">
      <div class="pz-title">
        <span>房源信息</span>
      </div>
      <ul class="pz-lease-info3 u-f-c">
        <li class="pz-lease-item3 u-f u-f-sbc">
          <div class="left u-f-c">
            <span>A室</span>
            <span>10.5m² / 北</span>
          </div>
          <div class="right">(女) 入住两个月</div>
        </li>
        <li class="pz-lease-item3 u-f u-f-sbc">
          <div class="left u-f-c">
            <span>B室</span>
            <span>20m² / 南</span>
          </div>
          <div class="right">(女) 入住五个月</div>
        </li>
        <li class="pz-lease-item3 u-f u-f-sbc">
          <div class="left u-f-c">
            <span>C室</span>
            <span>8.8m² / 南</span>
          </div>
          <div class="right">(男) 入住一年以上</div>
        </li>
        <li class="pz-lease-item3 u-f u-f-sbc">
          <div class="left u-f-c">
            <span>D室</span>
            <span>12m² / 南</span>
          </div>
          <div class="current">
            <span>1300/月 </span>
            <span>  当前房源</span>
          </div>
        </li>
      </ul>
    </div>

	<div class="peizhi4">
      <div class="pz-title">
        <span>周边配套</span>
      </div>
	  <a href="https://map.baidu.com/">
		  <img src="../../../assets/imgs/detail/map.jpg" width="100%">
	  </a>
      <ul class="pz-lease-info4 u-f u-f-sbc">
		  <li class="map-item">
			 <div class="u-f u-f-ajc">
				<img src="../../../assets/imgs/detail/dt.png" width="20" style="margin-right:10px">
			  	<span style="font-weight:bold">2号线 3号线 景田路</span>
			 </div>
			 <div style="margin-top:7px;color:#919191">距离797米</div>
		  </li>
		  <li class="map-item">
			<div class="u-f u-f-ajc">
				<img src="../../../assets/imgs/detail/dt.png" width="20" style="margin-right:10px">
			  	<span style="font-weight:bold">1号线 4号线 仙林湖</span>
			 </div>
			 <div style="margin-top:7px;color:#919191">距离1250米</div>
		  </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item1",
  data() {
    return {};
  },
  methods: {
	
  }
};
</script>

<style lang="scss" scoped>
.item1-detail {
  .peizhi1 {
    margin: 25px 10px;
    .pz-title {
      margin-bottom: 15px;
      span:nth-child(1) {
        font-size: $base-fz-m;
        font-weight: bold;
        color: $big-color;
      }
      span:nth-child(2) {
        font-size: $base-fz;
        color: $littlesc;
      }
    }
    .pz-lease-info {
      background-color: #fafafa;
      padding-bottom: 15px;
      .pz-lease-item {
        font-size: 15px;
        margin-top: 15px;
        padding-left: 15px;

        span {
          display: inline-block;
        }
        span:nth-child(1) {
          color: $littlesc;
          margin-right: 15px;
        }
        span:nth-child(2) {
          font-weight: bold;
          color: #333;
        }
      }
    }
  }
  .peizhi2 {
    margin: 25px 10px 0;
    .pz-title {
      margin-bottom: 15px;
      span:nth-child(1) {
        font-size: $base-fz-m;
        font-weight: bold;
        color: $big-color;
      }
    }
    .pz-lease-info2 {
      .pz-lease-item2 {
        img {
          margin-bottom: 10px;
        }
      }
      li:last-child {
        img {
          transform: scale(1.5);
        }
      }
    }
  }
  .peizhi3 {
    margin: 25px 10px 10px;
    .pz-title {
      margin-bottom: 15px;
      span:nth-child(1) {
        font-size: $base-fz-m;
        font-weight: bold;
        color: $big-color;
      }
    }
    .pz-lease-info3 {
		.pz-lease-item3{
			margin-bottom: 20px;
			margin-left: 10px;
			margin-right: 10px;
			.left{
				span:nth-child(1) {
					font-size: $base-fz-s;
					font-weight: bold;
					color: $big-color;
					margin-bottom: 7px;
				}
				span:nth-child(2) {
					font-size: $base-fz;
					color: $littlesc;
				}
			}
			.right{
				font-size: $base-fz-s;
				color: $littlesc;
			}
			.current{
				font-size: $base-fz-s;
				span:nth-child(1) {
					color: $big-color;
				}
				span:nth-child(2) {
					color: $littlesc;
				}
			}
		}
    }
  }
  .peizhi4 {
    margin: 0px 10px;
    padding-bottom: 20px;
    .pz-title {
      margin-bottom: 15px;
      span:nth-child(1) {
        font-size: $base-fz-m;
        font-weight: bold;
        color: $big-color;
      }
    }
    .pz-lease-info4 {
		margin-top: 10px;
		.map-item{

		}
    }
  }
}
</style>
