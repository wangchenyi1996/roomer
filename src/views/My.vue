<template>
  <div class="my">
    <!-- 头部信息 -->
      <HeaderInfo />
    <!-- 功能区 -->
      <MyService />
    <!-- 入职指南 -->
      <Guide />
    <!-- 蛋壳生活、客服 -->
      <DLive />
    <!-- 租客特权 -->
      <Tenant />
    <!-- tabbar -->
      <TabBar v-show="$route.meta.showTabBar" />
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue"
import HeaderInfo from "@/components/my/HeaderInfo.vue"
import MyService from "@/components/my/MyService.vue"
import Guide from "@/components/my/Guide.vue"
import DLive from "@/components/my/DLive.vue"
import Tenant from "@/components/my/Tenant.vue"
export default {
  name: "My",
  components: {
    TabBar,
    HeaderInfo,
    MyService,
    Guide,
    DLive,
    Tenant
  }
};
</script>

<style lang="scss" scoped>
.my {
  margin: 0 10px;
  padding-bottom: 70px;
  position: relative;
}
</style>
