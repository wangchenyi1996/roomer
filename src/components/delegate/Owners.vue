<template>
  <ul class="labels u-f u-f-asc">
    <li class="label-item u-f-c u-f-ajc">
      <img src="../../assets/imgs/delegate/ic1.png" />
      <div class="ic1 intro-item u-f-c">
        <span>01</span>
        <span>意向沟通</span>
      </div>
    </li>
    <li class="label-item u-f-c u-f-ajc">
      <img src="../../assets/imgs/delegate/ic2.png" />
      <div class="ic2 intro-item u-f-c">
        <span>02</span>
        <span>实勘测量</span>
      </div>
    </li>
    <li class="label-item u-f-c u-f-ajc">
      <img src="../../assets/imgs/delegate/ic3.png" />
      <div class="ic3 intro-item u-f-c">
        <span>03</span>
        <span>合作签约</span>
      </div>
    </li>
    <li class="label-item u-f-c u-f-ajc">
      <img src="../../assets/imgs/delegate/ic4.png" />
      <div class="intro-item u-f-c">
        <span>04</span>
        <span>坐享收益</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Owners",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.labels {
  margin-top: 40px;
  margin-bottom: 40px;
  .label-item {
    position: relative;
    > img {
      width: 36px;
      height: 36px;
      margin-bottom: 7px;
    }
    .intro-item {
      :first-child {
        text-align: center;
        margin-bottom: 10px;
        font-size: $base-fz;
        color: #7e7d7e;
      }
      :last-child {
        font-size: $base-fz;
        color: #7e7d7e;
      }
    }
    .ic1:after,
    .ic2:after,
    .ic3:after {
      content: " ";
      position: absolute;
      width: 60px;
      left: 37px;
      bottom: 28px;
      @include borderAll($r: #efefef);
      opacity: 0.35;
    }
  }
}
</style>
