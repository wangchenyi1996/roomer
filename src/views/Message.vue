<template>
  <div class="message">
    <div class="msg-header">
      <img src="../assets/imgs/login/back.png" @click="back" />
      消息通知
    </div>
    <!-- 通知 -->
    <div class="msg-inform">
      <div class="inform-item u-f u-f-ac" @click="billInform">
        <img src="../assets/imgs/login/zd.jpg" />
        <ul>
          <li class="inform-title">账单提醒</li>
          <li class="inform-info">本季度账单详情已发送到您的手机,请有时间注意查收</li>
        </ul>
      </div>

      <div class="inform-item u-f u-f-ac" @click="msgInform">
        <img src="../assets/imgs/login/tz.jpg" />
        <ul>
          <li class="inform-title">通知提醒</li>
          <li class="inform-info">暂时没有消息哦</li>
        </ul>
      </div>

      <div class="inform-item u-f u-f-ac" @click="sysInform">
        <img src="../assets/imgs/login/xt.jpg" />
        <ul>
          <li class="inform-title">系统消息</li>
          <li class="inform-info">暂时没有消息哦</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {};
  },
  methods: {
    //返回
    back() {
      this.$router.back();
    },
    //账单通知
    billInform() {
      this.$toast({
        message: "账单通知页面",
        duration: 1000
      });
    },

    //消息通知
    msgInform() {
      this.$toast({
        message: "消息通知页面",
        duration: 1000
      });
    },

    //系统通知
    sysInform() {
      this.$toast({
        message: "系统通知页面",
        duration: 1000
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.message {
  margin-left: 10px;
  box-sizing: border-box;
  .msg-header {
    position: absolute;
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
  .msg-inform {
    margin-top: 70px;
    .inform-item {
      box-sizing: border-box;
      @include borderBottom($r: #efefef);
      padding-bottom: 20px;
      margin-top: 30px;
      > img {
        width: 40px;
        height: 40px;
        margin-right: 15px;
      }
      ul {
        width: 70%;
        .inform-title {
          color: $text-color;
          font-size: $base-fz-m;
          font-weight: bold;
          margin-bottom: 12px;
        }
        .inform-info {
          padding: 3px 0;
          color: $littlesc;
          font-size: $base-fz-s;
          @extend %ellipsis;
        }
      }
    }
  }
}
</style>
