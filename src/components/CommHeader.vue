<template>
  <div class="msg-header">
    <img src="../assets/imgs/login/back.png" @click="$router.back()" />
    {{title}}
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "CommHeader",
  props:{
    title:{
        type:String,
        defalut:''
    }
  }
};
</script>

<style lang="scss" scoped>
.msg-header {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  line-height: 45px;
  background-color: $bgcolor;
  text-align: center;
  color: $text-color;
  font-size: $base-fz-m;
  font-weight: bold;
  > img {
    width: 25px;
    position: absolute;
    top: 10px;
    left: 10px;
    text-align: center;
  }
}
</style>
