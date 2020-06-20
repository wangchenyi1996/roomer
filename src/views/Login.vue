<template>
  <div class="login">
    <div class="login-top" @click="goHome">
      <img src="../assets/imgs/login/login-top.png" width="100%" />
      <div class="u-f u-f-ajc">
        <img
          src="https://public.danke.com.cn/public-20180202-FtmNbHV0EwA33J9vBf4y7Y2N9jpo"
          width="15"
          height="15"
        />
      </div>
      <div>首页</div>
    </div>
    <div class="main">
      <div class="ip1">
        <input type="text" class="inputs" placeholder="请输入手机号" v-model="telphone" />
      </div>
      <div class="u-f u-f-sbc ip2">
        <input type="text" class="inputs" placeholder="请输入手机验证码" v-model="code" />
        <span
          :style="rightPhone ? 'color:#54cbcc;font-size:14px;font-weight:bold;' : 'color:#ccc;font-size:14px;font-weight:bold;'"
          @click="getCode"
        >{{codeTime ? `已发送(${codeTime}s)` : codeMsg}}</span>
      </div>

      <!-- <button class="login-btn" @click="login">登录</button> -->

      <van-button class="login-btn" :loading="flag" :disabled="dis"
      loading-text="登录中..." block round hairline color="#54cbcc" text="登录" @click="login"/>

      <!-- 传统方式 -->
     <!--  <div class="weixin-login">微信登录</div>
  	  <div class="login-type u-f u-f-ajc">
          <i class="iconfont icon-weixin"></i>
      </div> -->
      <!-- 使用在线svg -->
	    <div class="u-f u-f-ajc weixin-login">第三方登录</div>
      <!-- <div class="u-f">
        <div class="login-type u-f u-f-ajc">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xinlang"></use>
          </svg>
        </div>
        <div class="login-type u-f u-f-ajc">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weixin"></use>
          </svg>
        </div>
        <div class="login-type u-f u-f-ajc">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-QQ"></use>
          </svg>
        </div>
      </div> -->

      <!-- 使用自定义字体图标组件方式 -->
      <div class="u-f">
        <div class="login-type u-f u-f-ajc">
          <svg-icon iconClass='weixin1' className="icon"></svg-icon>
        </div>
        <div class="login-type u-f u-f-ajc">
          <svg-icon iconClass='xinlang' className="icon"></svg-icon>
        </div>
        <div class="login-type u-f u-f-ajc">
          <svg-icon iconClass='qq' className="icon"></svg-icon>
        </div>
      </div>

      <div class="login-desc">
        <span>登录即代表你同意</span>
        <span>《用户使用条款》</span>
        <span>《隐私保护政策》</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions} from "vuex";
export default {
  name: "Login",
  data() {
    return {
      codeTime: 0,
      codeMsg: "获取验证码",
      telphone: "",
      code: "",

      flag: false,
      dis:false
    };
  },
  computed: {
    rightPhone() {
      // 利用正则对手机号进行匹配，返回布尔值
      return /^1(3|4|5|7|8|9)\d{9}$/.test(this.telphone);
    }
  },
  created(){
    console.log('路由参数',this.$route.query)
  },
  methods: {
    ...mapActions("ziroom", ["saveUser"]),
    goHome() {
      this.$router.replace("/home");
    },
    //获取验证码
    getCode() {
      if (this.telphone.length != 11) {
        this.$toast({
          message: "手机号码格式不正确",
          duration: 1500
        });
        return;
      } else {
        this.$toast({
          message: "验证码发送成功",
          duration: 1500
        });
      }
      if (this.codeTime > 0) {
        this.$toast({
          message: "验证码发送频繁",
          duration: 1500
        });
        return;
      }
      // 如果当前没有计时!this.codeTime等于this.codeTime === 0
      if (!this.codeTime) {
        // 启动倒计时
        this.codeTime = 10;
        this.intervalId = setInterval(() => {
          this.codeTime--;
          if (this.codeTime <= 0) {
            // 停止计时
            this.codeMsg = "重新获取验证码";
            clearInterval(this.intervalId);
          }
        }, 1000);
      }
    },
    //登录
    login() {
      if (this.telphone.length != 11) {
        this.$toast({
          message: "手机号码格式不正确",
          duration: 1500
        });
        return;
      }
      if (!this.code) {
        this.$toast({
          message: "验证码不能为空",
          duration: 1500
        });
        return;
      }
      // 显示加载中、禁止多次点击
      this.flag = true
      this.dis = true

      this.$toast({
        message: "登录成功",
        duration: 1500,
        onClose: () => {
          let data = {
            telphone: this.telphone,
            isLogin: true,
            label: "LV.1",
            faceImg:"http://lc-3resyvee.cn-n1.lcfile.com/a467b3c7d2f1f38538aa/dog.jpg"
          };
          this.saveUser(data);
          // this.$router.replace("/my");
          this.$router.replace(this.$route.query);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
   width: 2em; height: 2em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}

.van-button__text {
  font-size: $base-fz-m;
}
.van-loading__circular{
  color: #ffffff !important;
}
.login .main div:nth-child(1){
  // border-bottom: none !important;
}
.login {
  .login-top {
    position: relative;
    :nth-child(2) {
      position: absolute;
      top: 15px;
      left: 15px;
    }
    :nth-child(3) {
      position: absolute;
      top: 24px;
      left: 50px;
      color: #fff;
      font-weight: bold;
    }
    .u-f {
      height: 30px;
      width: 30px;
      background-color: #efefef;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
  .main {
    margin: 30px;
    .inputs {
      border: none;
      color: $littlesc;
      font-size: $base-fz-m;
      &::placeholder {
        color: $littlesc;
        font-size: 14px;
        font-weight: bold;
      }
    }
    .ip1{
      height: 40px;
      line-height: 40px;
      @include borderBottom(1px, #eeeeee);
    }
    .ip2{
      margin-top: 15px;
      height: 40px;
      line-height: 40px;
      @include borderBottom(1px, #eeeeee);
    }
    .login-btn {
      margin-top: 50px;
      display: block;
      width: 100%;
      height: 45px;
      line-height: 45px;
      color: #ffffff;
      background-color: #54cbcc;
      border: none;
      font-size: 16px;
      border-radius: 20px;
    }
    .weixin-login {
      width: 100%;
      margin: 40px auto 20px;
      font-size: 15px;
      color: $littlesc;
      font-weight: bold;
      text-align: center;
      &:before {
        content: "———————";
        margin-right: 10px;
        color: $borderColor-l;
      }
      &:after {
        content: "———————";
        margin-left: 10px;
        color: $borderColor-l;
      }
    }
    .login-type {
      margin: 0 auto;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      @include borderAll($r: $borderColor-m);
      .icon-weixin {
        font-size: 25px;
        color: $littlesc;
      }
    }
    .login-desc {
      width: 100%;
      text-align: center;
      position: fixed;
      bottom: 15px;
      margin-left: -30px;
      font-size: 14px;
      font-weight: bold;
      :nth-child(1) {
        color: #b5b5b5;
      }
      :nth-child(2) {
        color: #54cbcc;
      }
      :nth-child(3) {
        color: #54cbcc;
      }
    }
  }
}
</style>
