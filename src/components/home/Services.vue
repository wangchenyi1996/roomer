<template>
  <div>
    <div class="quality u-f u-f-sbc">
      <div class="quality-item u-f-c u-f-ajc">
        <div class="icon-q u-f u-f-ajc">
          <img src="../../assets/imgs/home/wifi.png" alt="wifi" width="20" height="20" />
        </div>
        <div class="icon-msg">极速WIFI</div>
        <div class="labels">网络精彩不断线</div>
      </div>
      <div class="quality-item u-f-c u-f-ajc">
        <div class="icon-q u-f u-f-ajc">
          <img src="../../assets/imgs/home/baojie.png" alt="wifi" width="20" height="20" />
        </div>
        <div class="icon-msg">优质保洁</div>
        <div class="labels">持续保持卫生</div>
      </div>
      <div class="quality-item u-f-c u-f-ajc">
        <div class="icon-q u-f u-f-ajc">
          <img src="../../assets/imgs/home/weixiu.png" alt="wifi" width="20" height="20" />
        </div>
        <div class="icon-msg">专业维修</div>
        <div class="labels">维修极速上门</div>
      </div>
      <div class="quality-item u-f-c u-f-ajc">
        <div class="icon-q u-f u-f-ajc">
          <img src="../../assets/imgs/home/guanjia.png" alt="wifi" width="20" height="20" />
        </div>
        <div class="icon-msg">私人管家</div>
        <div class="labels">24小时贴心服务</div>
      </div>
    </div>
    <div class="more u-f u-f-ajc">
      <button class="more-btn">更多品质房源</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services"
};
</script>

<style lang="scss" scoped>
.quality {
    margin-top: 20px;
    margin-bottom: 25px;
    .quality-item {
      .icon-q {
        height: 36px;
        width: 36px;
        border-radius: 50%;
        @include borderAll(2px, #cfcfcf);
        margin-bottom: 7px;
      }
      .icon-msg {
        font-size: $base-fz;
        color: $color-info;
        margin-bottom: 7px;
        font-weight: 500;
      }
      .labels {
        transform: scale(0.8);
        display: inline-block;
        color: $littlesc;
      }
    }
  }
  .more{
    .more-btn{
      width: 60%;
      border: none;
      height: 40px;
      line-height: 40px;
      background-color: rgba(230, 230, 230, .26);
      border-radius: 30px;
      color: $color-info;
      font-size: 14px;
      font-weight: bold;
    }
  }
</style>
