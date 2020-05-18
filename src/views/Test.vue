<!--
 * @Description: 测试 使用 ::v-deep  /deep/  >>>  修改第三方组件样式
 * @Version: 1.0
 * @Autor: 王强
 * @Date: 2020-05-15 13:49:17
 * @LastEditors: 王强
 * @LastEditTime: 2020-05-15 14:06:11
--> 
<template>
  <div>
    <p class="p1">测试 使用 ::v-deep /deep/ >>> 修改第三方组件样式</p>

    <van-stepper v-model="value" min="5" max="8" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1
    };
  }
};
</script>

<style lang="scss" scoped>
.p1 {
  font-size: 20px;
  text-align: center;
  margin: 30px;
}
.van-stepper {
  display: flex;
  justify-content: center;
  ::v-deep .van-stepper__minus {
    color: red;
  }
  ::v-deep .van-stepper__plus {
    color: blueviolet;
  }
}
</style>