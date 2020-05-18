<template>
  <div>
    <div class="header">
      <img src="../../assets/imgs/delegate/bg.jpg" alt />
    </div>
    <div class="delegate-opt u-f u-f-ajc">
      <button>委托热线</button>
      <button>立即委托</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 20px;
}
.delegate-opt {
  margin-bottom: 35px;
  button {
    width: 40%;
    height: 45px;
    line-height: 45px;
    font-size: $base-fz-m;
    border: none;
    border-radius: 4px;
  }
  :first-child {
    color: $main-color2;
    font-weight: bold;
    @include borderAll($r: $main-color2);
    background-color: #fff;
    margin-right: 10px;
  }
  :last-child {
    margin-left: 10px;
    color: #fff;
    font-weight: bold;
    @include borderAll($r: $main-color2);
    background-color: $main-color2;
  }
}
</style>
