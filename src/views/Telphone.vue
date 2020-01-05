<template>
  <div class="my-telphone">
    <!-- 头部 可使用插槽-->
    <CommHeader :title="title" style="background:#ffffff;"></CommHeader>
    <!-- 更换手机步骤 -->
    <div class="main-tel">
      <ul class="my-step u-f u-f-asc">
        <li
          class="u-f u-f-ajc"
          v-for="item in stepArr"
          :key="item.id"
          :class="active==item.id?'first':'second'"
        >
          <span class="u-f u-f-ajc">{{item.id}}</span>
          <span>{{item.name}}</span>
        </li>
      </ul>
      <div class="steps1" v-show="active==1">
        <div class="tel">
          <input type="text" v-model="telphone" />
        </div>
        <div class="code u-f u-f-sbc">
          <input type="text" v-model="code" placeholder="请输入手机验证码" />
          <button class="btn" @click="getCode">{{codeTime ? `已发送(${codeTime}s)` : codeMsg}}</button>
        </div>
        <div class="finish-step1 u-f u-f-ajc">
          <button @click="finishStep1">完成</button>
        </div>
      </div>
      <div class="steps2" v-show="active!=1">
        <div class="tel">
          <input type="text" v-model="newTelphone" placeholder="请输入新的手机号码" />
        </div>
        <div class="code u-f u-f-sbc">
          <input type="text" v-model="code" placeholder="请输入手机验证码" />
          <button class="btn" @click="getCodeNext">{{codeTime ? `已发送(${codeTime}s)` : codeMsg}}</button>
        </div>
        <div class="finish-step1 u-f u-f-ajc">
          <button @click="finishStep2">完成</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommHeader from "@/components/CommHeader.vue";
export default {
  name: "Telphone",
  data() {
    return {
      title: "更换手机号",
      stepArr: [{ id: 1, name: "验证身份" }, { id: 2, name: "验证新手机" }],
      active: 1,
      telphone: "18112688666",
      newTelphone: "",
      code: "",
      codeTime: 0,
      codeMsg: "获取验证码"
    };
  },
  components: {
    CommHeader
  },
  methods: {
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
    getCodeNext() {
      if (this.newTelphone.length != 11) {
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
    //步骤一
    finishStep1() {
      if (this.telphone.length != 11) {
        this.$toast({
          message: "手机号码格式不正确",
          duration: 1500
        });
        return;
      }
      if (this.code.length <= 0) {
        this.$toast({
          message: "验证码不能为空",
          duration: 1500
        });
        return;
      }
      // 停止计时
      this.codeTime = 0;
      clearInterval(this.intervalId);
      this.codeMsg = "获取验证码";
      this.active++;
      this.telphone = "";
      this.code = "";
      if (this.active > this.stepArr.length) {
        this.active = this.stepArr.length;
      }
    },
    // 步骤二
    finishStep2() {
      if (this.newTelphone.length != 11) {
        this.$toast({
          message: "手机号码格式不正确",
          duration: 1500
        });
        return;
      }
      if (this.code.length <= 0) {
        this.$toast({
          message: "验证码不能为空",
          duration: 1500
        });
        return;
      }

      this.$toast({
        message: "修改号码成功",
        duration: 300,
        onClose: () => {
          // 停止计时
          this.codeMsg = "获取验证码";
          clearInterval(this.intervalId);
          this.newTelphone = "";
          this.code = "";
          //返回上一页
          this.$router.back();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.main-tel {
  margin-top: 70px;
  .my-step {
    height: 40px;
    li {
      span:first-child {
        font-size: $base-fz-m;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        margin-right: 7px;
      }
      span:last-child {
        font-size: $base-fz-m;
        font-weight: bold;
      }
    }
    .first {
      span:first-child {
        background-color: $main-color;
        color: #ffffff;
      }
      span:last-child {
        color: $main-color;
      }
    }
    .second {
      span:first-child {
        background-color: $littlesc;
        color: #ffffff;
      }
      span:last-child {
        color: $littlesc;
      }
    }
  }
  .steps1,
  .steps2 {
    margin-top: 20px;
    .tel {
      height: 50px;
      width: 100%;
      @include borderTop($r: #cfcfcf);
      @include borderBottom($r: #cfcfcf);
      > input {
        border: none;
        height: 50px;
        width: 90%;
        padding-left: 15px;
        font-size: $base-fz-m;
        color: $littlesc;
      }
      ::placeholder {
        color: $littlesc;
      }
    }
    .code {
      height: 50px;
      width: 100%;
      @include borderBottom($r: #cfcfcf);
      > input {
        border: none;
        height: 50px;
        width: 90%;
        padding-left: 15px;
        font-size: $base-fz-m;
        color: $littlesc;
      }
      ::placeholder {
        color: $littlesc;
      }
      .btn {
        border: none;
        min-width: 130px;
        height: 36px;
        margin-right: 10px;
        background-color: $main-color;
        color: #ffffff;
        border-radius: 20px;
        font-size: $base-fz-s;
        font-weight: bold;
      }
    }
    .finish-step1 {
      > button {
        border: none;
        width: 90%;
        height: 45px;
        margin-top: 30px;
        background-color: $main-color;
        font-size: $base-fz-m;
        font-weight: bold;
        color: #ffffff;
        border-radius: 25px;
      }
    }
  }
}
</style>
