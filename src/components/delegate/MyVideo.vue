<template>
  <div class="video-list">
    <div class="videos">
      <video
        src="https://zhuanti.danke.com.cn/danke-vedio/danke-vedio1.mp4"
        ref="video1"
        class="my-video"
        controls="controls"
        preload="auto"
        poster
        type="video/mp4"
      ></video>
      <div class="video-cover" :style="showVideo?'display:none;':''" @click="playVideo">
        <img src="https://public.danke.com.cn/public-20180606-Ft3xtMJwt6XsRpzXhQC5dWd4zZxq" />
      </div>
      <ul class="v-list u-f">
        <li class="u-f-c">
          <img src="../../assets/imgs/delegate/v1.png" class="i1" />
          <p class="p1">蛋壳公寓第一集</p>
        </li>
        <li class="u-f-c">
          <img src="../../assets/imgs/delegate/v2.png" class="i1" />
          <p class="p1">蛋壳公寓第二集</p>
        </li>
        <li class="u-f-c">
          <img src="../../assets/imgs/delegate/v3.png" />
          <p>蛋壳公寓第三集</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyVideo",
  data() {
    return {
      //点击视频显示覆盖层
      showVideo: false
    };
  },
  methods: {
    playVideo() {
      let v = this.$refs.video1;
      if (v.paused) {
        v.play();
      } else if (v.play()) {
        v.pause();
      }
      this.showVideo = true;
    },
    downApp() {
      this.$toast({
        message: "正在下载中...",
        duration: 1500
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.video-list {
  padding-bottom: 100px;
  .videos {
    position: relative;
    width: 90%;
    margin: 0 auto;
    background: url(https://public.danke.com.cn/public-20180606-Fu-8mEjulcv_rPp29Jd3MtLnQpQ3)
      no-repeat center center;
    height: 190px;
    .my-video {
      width: 100%;
      height: 190px;
      border: none;
    }
    .video-cover {
      position: absolute;
      z-index: 1;
      background: url(https://public.danke.com.cn/public-20180606-Fu-8mEjulcv_rPp29Jd3MtLnQpQ3)
        no-repeat center center;
      height: 190px;
      width: 100%;
      top: 0;
      left: 0;
      background-size: 100%;
      > img {
        width: 32px;
        position: relative;
        position: absolute;
        bottom: 30px;
        left: 30px;
      }
    }
    .v-list {
      margin-top: 15px;
      width: 100%;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        width: 0 !important;
        display: none;
      }
      li {
        p {
          padding: 10px 0 10px 0;
          text-align: center;
          font-size: 12px;
          background-color: #f9f9f9;
          color: $littlesc;
        }
        img {
          width: 120px;
        }
        .i1,
        .p1 {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
