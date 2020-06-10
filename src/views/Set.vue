<template>
  <div class="set" :class="flag ? 'fix' : ''">
    <div class="back">
      <img src="../assets/imgs/login/back.png" @click="back" />
    </div>
    <div class="header u-f-c u-f-ajc">
      <div style="position:relative">
        <img :src="imgUrl" v-show="showImg" class="h-img" />
        <van-uploader v-model="fileList" :preview-image="false" :after-read="afterRead">
          <img src="../assets/imgs/login/up.png" class="u-img" />
        </van-uploader>
      </div>

      <div class="u-f-ajc">
        <input type="text" class="edit" v-model="tel" />
        <img src="../assets/imgs/login/edit.png" class="edit-img" />
      </div>
    </div>
  
    <div class="set-list">
       <div class="set-item u-f u-f-sbc">
        <span>{{ $t('setInfo.language') }}</span>
        <div class="u-f u-f-ajc label">
          <span @click="open1">{{lang}}</span>
          <van-action-sheet v-model="show1" :actions="langArr" @select="onSelect2" />
          <img src="../assets/imgs/login/r.png" />
        </div>
      </div>

      <div class="set-item u-f u-f-sbc">
        <span>{{ $t('setInfo.gender') }}</span>
        <div class="u-f u-f-ajc label">
          <span @click="open">{{sex}}</span>
          <van-action-sheet v-model="show" :actions="sexArr" @select="onSelect" />
          <img src="../assets/imgs/login/r.png" />
        </div>
      </div>

      <div class="set-item u-f u-f-sbc">
        <span>{{ $t('setInfo.constellation') }}</span>
        <div class="u-f u-f-ajc label">
          <span @click="showPicker = true">{{xz}}</span>
          <van-popup v-model="showPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="constellation"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            />
          </van-popup>
          <img src="../assets/imgs/login/r.png" />
        </div>
      </div>

      <div class="set-item u-f u-f-sbc" style="border:none">
        <span>{{ $t('setInfo.mobile') }}</span>
        <div class="u-f u-f-ajc label" @click="changeTelphone">
          <span>18112646888</span>
          <img src="../assets/imgs/login/r.png" />
        </div>
      </div>

      <div class="bg"></div>

      <div class="set-item u-f u-f-sbc">
        <span>{{ $t('setInfo.cleanCache') }}</span>
        <div class="u-f u-f-ajc label">
          <span @click="clearStorage">{{myStorage}}</span>
          <img src="../assets/imgs/login/r.png" />
        </div>
      </div>

      <div class="set-item u-f u-f-sbc">
        <span>{{ $t('setInfo.about') }}</span>
        <div class="u-f u-f-ajc label">
          <img src="../assets/imgs/login/r.png" />
        </div>
      </div>
      <div class="set-item u-f u-f-sbc">
        <span>{{ $t('setInfo.toRate') }}</span>
        <div class="u-f u-f-ajc label">
          <img src="../assets/imgs/login/r.png" />
        </div>
      </div>

      <div class="set-item u-f u-f-sbc" style="border:none;padding-bottom:10px;margin-top:10px">
        <span>{{ $t('setInfo.unLock') }}</span>
        <div class="u-f u-f-ajc label">
          <van-switch :value="checked" @input="onInput" active-color="#54cbcc" />
        </div>
      </div>

      <div class="bg"></div>

      <div class="logout" @click="out">退出登录</div>

      <div class="bg"></div>
    </div>
  </div>
</template>

<script>
import { pathToBase64, base64ToPath } from '@common/image-tools/index.js'
import { mapActions, mapState } from "vuex";

import Cookies from "js-cookie";
// 设置vant的多语言
import { Locale } from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';
import zhCN from 'vant/lib/locale/lang/zh-CN';

export default {
  name: "Set",
  data() {
    return {
      telphone: "",
      checked: false,
      flag: false,
      fileList: [],
      imgUrl: "",
      showImg: true,
      sex: Cookies.get("language")== 'zh' ? '未设置' : 'no set',

      show: false,
      show1: false,
      sexArr: [{ name: "男" }, { name: "女" }],

      xz: Cookies.get("language")== 'zh' ? '未设置' : 'no set',
      showPicker: false,
      constellation: ['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'],

      myStorage:'10MB',
      lang:Cookies.get("language")== 'zh' ? '中文' : '英文',
      langArr:[{name:'中文',id:'zh'},{name:'英文',id:'en'}]

    };
  },
  computed: {
    ...mapState("ziroom", ["userInfo"]),
    tel() {
      return this.telphone.substr(0, 3) + "****" + this.telphone.substr(7);
    }
  },
  created() {
    // console.log(this.userInfo);
    this.telphone = this.userInfo.telphone;
    this.imgUrl = this.userInfo.faceImg;
  },
  methods: {
    ...mapActions("ziroom", ["logout", "saveUser"]),
    //指纹解锁
    onInput(checked) {
      this.checked = checked;
    },
    //返回
    back() {
      this.$router.back();
    },
    //退出
    out() {
      this.flag = true;
      this.$dialog
        .confirm({
          message: "确定退出登录吗？",
          confirmButtonColor: "#54cbcc"
        })
        .then(() => {
          // on confirm
          this.flag = false;
          this.$toast({
            message: "退出登录成功",
            duration: 1500,
            onClose: () => {
              this.logout();
              this.$router.replace("/my");
            }
          });
        })
        .catch(() => {
          // on cancel
          this.flag = false;
        });
    },
    //上传头像
    async afterRead(file) {
      //base64转换为uri地址
      // base64ToPath(file.content)
      // .then((res)=>{
      //   console.log(res)    //blob:http://localhost:8080/63d620d1-3ec9-430b-a8fd-05f59c25b6e8
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })

      let base64 = await base64ToPath(file.content)
      // console.log(base64)
			
      this.imgUrl = file.content;
      let data = {
        telphone: this.telphone,
        isLogin: true,
        label: "LV.1",
        faceImg: this.imgUrl
      };
      this.saveUser(data);
    },

    onSelect(item) {
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
      this.show = false;
      this.sex = item.name;
      this.$toast({
        message: item.name,
        duration: 1500
      });
    },

    // 选择语言
    onSelect2(item){
      this.show1 = false;
      this.lang = item.name;
      
       if (item.id == "zh") {
        this.$i18n.locale = "zh";
        this.$store.dispatch("setLanguage", "zh");
        // Cookies.set("language", item.id);
        Locale.use('zh-CN', zhCN);
      } else {
        this.$i18n.locale = "en";
        this.$store.dispatch("setLanguage", "en");
        // Cookies.set("language", item.id);
        Locale.use('en-US', enUS);
      }
    },

    open() {
      this.show = true;
    },
     open1() {
      this.show1 = true;
    },
    onConfirm(xz) {
      this.xz = xz;
      this.showPicker = false;
    },
    clearStorage(){
      this.$toast({
        message: '清除缓存成功',
        duration: 300,
        onClose:()=>{
          this.myStorage = '0.0MB'
        }
      });
    },
    changeTelphone(){
      this.$router.push('/telphone')
    }
  }
};
</script>

<style>
/* .van-uploader__preview,.van-image,.van-uploader__preview-image{
  display: none;
  opacity: 0;
}
.van-image__img{
  display: none;opacity: 0;
}  */
</style>

<style lang="scss" scoped>
.fix {
  position: fixed;
  width: 100%;
}
.set {
  width: 100%;
  overflow-x: hidden;
  .back {
    img {
      width: 25px;
      margin-top: 10px;
      margin-left: 10px;
    }
  }
  .header {
    margin-top: 35px;
    margin-bottom: 55px;
    .h-img {
      width: 90px;
      border-radius: 50%;
    }
    .u-img {
      width: 30px;
      position: relative;
      right: 17px;
      bottom: 0px;
    }
    .edit {
      border: 0;
      text-align: center;
      margin-top: 10px;
      font-size: $base-fz-m;
      color: $text-color;
      width: 110px;
    }
    .edit-img {
      width: 16px;
      position: relative;
      top: 6px;
    }
  }
  .set-list {
    padding-bottom: 10px;
    .set-item {
      padding-bottom: 15px;
      margin-top: 20px;
      margin-left: 10px;
      margin-right: 10px;
      @include borderBottom($r: #efefef);
      > span {
        font-size: $base-fz-s;
        font-weight: bold;
        color: $text-color;
      }
      .label {
        span {
          font-size: $base-fz-s;
          font-weight: bold;
          color: $littlesc;
          margin-right: 7px;
        }
        img {
          width: 18px;
        }
      }
    }
    .bg {
      height: 10px;
      background-color: #f7f8fa;
      content: " ";
      width: 100%;
      padding: 0 10px;
      margin-left: -10px;
    }
    .logout {
      padding: 15px;
      text-align: center;
      font-size: $base-fz-s;
      font-weight: bold;
      color: $text-color;
    }
  }
}
</style>
