<template>
  <div class="room-intro">
    <div class="intro1">
      <div class="pz-title u-f u-f-sbc">
        <span>珠江路 翠屏花园</span>
        <div class="u-f u-f-sbc">
          <span style="font-size:14px;color:#969a9d">三人正在浏览该小区</span>
          <img src="../../../assets/imgs/detail/r.png" width="20" />
        </div>
      </div>
      <p class="room">鼓楼区-珠江路138号翠屏国际花园</p>
      <p class="room1">2012年建成 | 板楼 | 商/民水电</p>
      <div class="room2">
        租房最低价:
        <span style="color:#FA735F;font-weight:bold">￥2100/月</span>
      </div>
      <div class="room3">
        <span>均价</span>
        <span>#合租 ￥1200</span>
      </div>
    </div>
    <div class="intro2">查看同小区3间在租房源</div>
    <div class="intro3">
      <div class="pz-title">
        <span>上班通勤</span>
      </div>
      <div class="intro3-item u-f u-f-sbc">
        <span>公司位置</span>
        <input type="text" placeholder="添加公司地址" class="intro-input" />
        <img src="../../../assets/imgs/detail/r.png" width="20" />
      </div>
	    <div class="intro3-item u-f u-f-sbc">
        <span>公司位置</span>
        <input type="text" placeholder="设置公司地址，找房更容易" class="intro-input2" />
        <img src="../../../assets/imgs/detail/r.png" width="20" />
      </div>
	  <img src="../../../assets/imgs/detail/c.jpg" width="100%" style="margin-top:10px">
    </div>
  </div>
</template>

<script>
export default {
  name: "Item3",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.room-intro {
  .intro1 {
    margin: 20px 10px;
    .pz-title {
      margin-bottom: 15px;
      > span {
        font-size: $base-fz-m;
        font-weight: bold;
        color: $big-color;
      }
    }
    .room {
      margin-top: 20px;
      font-size: $base-fz-s;
      font-weight: bold;
      color: $text-color;
    }
    .room1 {
      margin-top: 20px;
      font-size: $base-fz-s;
      color: $text-color;
    }
    .room2 {
      margin-top: 20px;
      font-size: $base-fz-s;
      color: $text-color;
    }
    .room3 {
      margin-top: 20px;
      :first-child {
        color: $main-color;
        @include borderAll($r: $main-color);
        padding: 2px 10px;
        border-radius: 11px;
        margin-right: 5px;
      }
      :last-child {
        color: $text-color;
      }
    }
  }
  .intro2 {
    width: 70%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #f7f8fa;
    font-size: $base-fz-m;
    color: #333;
    margin: 30px auto 10px;
    border-radius: 20px;
  }
  .intro3 {
    margin: 30px 10px 20px;
    .pz-title {
      margin-bottom: 15px;
      > span {
        font-size: $base-fz-m;
        font-weight: bold;
        color: $big-color;
      }
	}
	.intro3-item{
		margin-bottom: 10px;
		span{
			font-size: $base-fz-s;
			color: $littlesc;
		}
		.intro-input{
			border: none;
			width: 70%;
			font-size: $base-fz-s;
			font-weight: bold;
		}
		.intro-input2{
			border: none;
			width: 70%;
			font-size: $base-fz-s;
			color: $littlesc;
		}
		.intro-input::placeholder{
			color: $main-color;
		}
	}
  }
}
</style>
