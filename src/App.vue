<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.showTabBar" />
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.showTabBar" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "@common/reset.scss";
@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(400px);
  }

  100% {
    transform: translateX(0);
  }
}
// .router-fade-enter-active{
//   animation: slideInLeft .8s;
// }

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-to {
  opacity: 0.6;
}
.active {
  color: #54cbcc !important;
  animation: jump 1.5s;
}
@keyframes jump {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
