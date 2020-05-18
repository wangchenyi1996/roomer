<template>
  <div class="delegate">
    <!-- <WScroll class="content-scroll" ref="scroll" :probe-type="3"> -->
      <!-- 头部 -->
      <Header />
      <!-- 介绍-简介1 -->
      <Intro :info="info1"/>
      <!-- 业主权益 -->
      <Owners />
      <!-- 介绍-简介2 -->
      <Intro :info="info2"/>
      <!-- 介绍轮播 -->
      <IntroSwiper />
      <!-- 介绍-简介3 -->
      <Intro :info="info3"/>
      <!-- 视频 -->
      <MyVideo />
      <!-- 下载APP、委托 -->
      <Footer />
      <!-- 尾部 -->
      <van-divider :style="{ color: '#515151', borderColor: '#efefef', padding: '0 16px' }">我是有底线的</van-divider>
    <!-- </WScroll> -->
    <!-- TabBar -->
    <TabBar v-show="$route.meta.showTabBar" />
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
import Header from "@/components/delegate/Header.vue";
import Intro from "@/components/delegate/Intro.vue";
import Owners from "@/components/delegate/Owners.vue";
import IntroSwiper from "@/components/delegate/IntroSwiper.vue";
import MyVideo from "@/components/delegate/MyVideo.vue";
import Footer from "@/components/delegate/Footer.vue";

//引入自定义封装的better-scroll插件
// import WScroll from "@/components/WScroll/WScroll.vue";

export default {
  name: "Delegate",
  components: {
    TabBar,
    Header,
    Intro,
    Owners,
    IntroSwiper,
    MyVideo,
    Footer
  },
  data() {
    return {
      info1:{
        title:'简单4步 做省心房东',
        entitle:'NEEDS FOUR SIMPLE STEPS'
      },
      info2:{
        title:'业主收益指南',
        entitle:'REVENUE GUIDE'
      },
      info3:{
        title:'了解蛋壳',
        entitle:'LEARN ABOUT DANKE'
      }
    };
  },
  methods: {
     
  },
  mounted() {
    // this.$nextTick(()=>{
    //   this.$refs.scroll.refresh();
    // })
  }

};
</script>


<style lang="scss" scoped>
.delegate {
  // padding-bottom: 60px;
  height: 100vh;
  // .content-scroll {
  //   height: calc(100% - 50px);
  //   overflow: hidden;
  // }
}
</style>
