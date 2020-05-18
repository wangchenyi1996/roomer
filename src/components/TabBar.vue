<template>
  <div class="tabbar">
    <ul class="tab-list u-f u-f-asc">
      <router-link to="/home" tag="li" class="tab-item u-f-c" active-class="active" >
        <i class="iconfont icon-icon-home icon"></i>
        <span class="tab-desc">首页</span>
      </router-link>
      <router-link to="/findHome" tag="li" class="tab-item u-f-c" active-class="active">
        <i class="iconfont icon-ziyuan icon"></i>
        <span class="tab-desc">找房</span>
      </router-link>
      <router-link to="/delegate" tag="li" class="tab-item u-f-c" active-class="active">
        <i class="iconfont icon-tuoguan icon"></i>
        <span class="tab-desc">委托</span>
      </router-link>
      <router-link to="/my" tag="li" class="tab-item u-f-c" active-class="active">
        <i class="iconfont icon-ren icon"></i>
        <span class="tab-desc">我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  };
</script>

<style scoped lang="scss">
.tabbar {
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $bgcolor;
  height: $tabH;
  .tab-list {
    width: 100%;
    height: $tabH;
    .tab-item {
       color: $tabColor;
      .tab-desc {
        margin-top: 5px;
      }
      .icon::before {
        font-size: 22px;
      }
    }
  }
}

</style>
