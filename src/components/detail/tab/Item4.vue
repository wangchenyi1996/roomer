<template>
  <div class="room-around">
    <div class="title">看过此房间的人还看了</div>
    <div class="room-list">
      <div class="room-item u-f">
        <img src="../../../assets/imgs/home/room/1.jpg" class="room-left" />
        <div class="room-right">
          <p class="p1">下马坊 万达江南明珠 主卧 朝南</p>
          <p class="p2">合租 | 三室一厅 15m² 6/8层</p>
          <p class="p3">据地铁站478米</p>
          <ul class="u-f p4">
            <li>白住1个月</li>
            <li>近地铁</li>
            <li>品质公寓</li>
          </ul>
          <div class="p5">
            <span>￥</span>
            <span>1188</span>
            <span>/首月</span>
            <span>1580</span>
          </div>
        </div>
      </div>

      <div class="room-item u-f">
        <img src="../../../assets/imgs/home/room/2.jpg" class="room-left" />
        <div class="room-right">
          <p class="p1">下马坊 万达江南明珠 主卧 朝南</p>
          <p class="p2">合租 | 三室一厅 15m² 6/8层</p>
          <p class="p3">据地铁站478米</p>
          <ul class="u-f p4">
            <li>白住1个月</li>
            <li>近地铁</li>
            <li>品质公寓</li>
          </ul>
          <div class="p5">
            <span>￥</span>
            <span>1188</span>
            <span>/首月</span>
            <span>1580</span>
          </div>
        </div>
      </div>

	  
      <div class="room-item u-f">
        <img src="../../../assets/imgs/home/room/3.jpg" class="room-left" />
        <div class="room-right">
          <p class="p1">下马坊 万达江南明珠 主卧 朝南</p>
          <p class="p2">合租 | 三室一厅 15m² 6/8层</p>
          <p class="p3">据地铁站478米</p>
          <ul class="u-f p4">
            <li>白住1个月</li>
            <li>近地铁</li>
            <li>品质公寓</li>
          </ul>
          <div class="p5">
            <span>￥</span>
            <span>1188</span>
            <span>/首月</span>
            <span>1580</span>
          </div>
        </div>
      </div>

	  
      <div class="room-item u-f">
        <img src="../../../assets/imgs/home/room/4.jpg" class="room-left" />
        <div class="room-right">
          <p class="p1">下马坊 万达江南明珠 主卧 朝南</p>
          <p class="p2">合租 | 三室一厅 15m² 6/8层</p>
          <p class="p3">据地铁站478米</p>
          <ul class="u-f p4">
            <li>白住1个月</li>
            <li>近地铁</li>
            <li>品质公寓</li>
          </ul>
          <div class="p5">
            <span>￥</span>
            <span>1188</span>
            <span>/首月</span>
            <span>1580</span>
          </div>
        </div>
      </div>

	  <div class="room-item u-f">
        <img src="../../../assets/imgs/home/room/5.jpg" class="room-left" />
        <div class="room-right">
          <p class="p1">下马坊 万达江南明珠 主卧 朝南</p>
          <p class="p2">合租 | 三室一厅 15m² 6/8层</p>
          <p class="p3">据地铁站478米</p>
          <ul class="u-f p4">
            <li>白住1个月</li>
            <li>近地铁</li>
            <li>品质公寓</li>
          </ul>
          <div class="p5">
            <span>￥</span>
            <span>1188</span>
            <span>/首月</span>
            <span>1580</span>
          </div>
        </div>
      </div>

	  <div class="room-item u-f">
        <img src="../../../assets/imgs/home/room/6.jpg" class="room-left" />
        <div class="room-right">
          <p class="p1">下马坊 万达江南明珠 主卧 朝南</p>
          <p class="p2">合租 | 三室一厅 15m² 6/8层</p>
          <p class="p3">据地铁站478米</p>
          <ul class="u-f p4">
            <li>白住1个月</li>
            <li>近地铁</li>
            <li>品质公寓</li>
          </ul>
          <div class="p5">
            <span>￥</span>
            <span>1188</span>
            <span>/首月</span>
            <span>1580</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Item4",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.room-around {
  margin: 20px 10px;
  .title {
    font-size: $base-fz-m;
    font-weight: bold;
    color: $big-color;
    margin-bottom: 15px;
  }
  .room-list {
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
  }
}
</style>
