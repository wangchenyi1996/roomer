<template>
  <div class="details">
    <!-- 顶部导航栏渐变效果 -->
    <Header />

    <div class="detail-top" @click="handleBannerClick">
      <img src="../assets/imgs/detail/top.jpg" />
      <div class="banner-info">
        <div class="banner-tittle u-f u-f-ajc">
          <span style="display:inline-block;margin-left:10px">珠江路 进香河 次卧 朝北 阳光</span>
          <div style="width:100px;margin-right:10px" class="u-f u-f-ajc">
            <img src="../assets/imgs/detail/pic.png" />
            <span>6张</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 图片预览效果组件 -->
    <Gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose" />

    <!-- 底部 -->
    <div class="footer u-f u-f-asc">
      <div class="attention u-f u-f-c u-f-ajc" @click="guanzhu">
        <img src="../assets/imgs/detail/gz1.png" width="25" v-show="!isGuanzhu"/>
        <img src="../assets/imgs/detail/gz2.png" width="25" v-show="isGuanzhu"/>
        <span :style="isGuanzhu?'color:#3ebebf':''">关注</span>
      </div>
      <div class="u-f">
        <div class="call u-f u-f-ajc" @click="telphone">电话咨询</div>
        <div class="look-room u-f u-f-ajc" @click="lookRoom">预约看房</div>
      </div>
    </div>

    <div class="room-desc">
      <div class="room1 u-f u-f-sbc">
        <div class="room" style="align-self:flex-start">
          <div class="desc">秣周东路 翠屏诚园 主卧 朝南 D室2142341235123</div>
          <ul class="label u-f">
            <li class="label-item">免费WIFI</li>
            <li class="label-item">交通便捷</li>
            <li class="label-item">分期付款</li>
            <li class="label-item">首月免费</li>
          </ul>
        </div>
        <img src="../assets/imgs/detail/tel.png" width="36" @click="callTel"/>
      </div>

      <div class="pay-money u-f u-f-sbc">
        <ul class="u-f u-f-sbc">
          <li>￥650</li>
          <li>/首月活动价</li>
          <li>￥1350</li>
        </ul>
        <div class="u-f-sbc" @click="payMoney">
          <span>付款方式</span>
          <img src="../assets/imgs/home/arrow-right.png" style="width:20px" />
        </div>
      </div>

      <div class="room2">
        <div class="title">房屋标配</div>
        <ul class="room-device u-f u-f-asc">
          <li class="u-f-c u-f-ajc">
            <img src="../assets/imgs/detail/room-device/1.png" />
            <span>床</span>
          </li>
          <li class="u-f-c u-f-ajc">
            <img src="../assets/imgs/detail/room-device/2.png" />
            <span>WIFI</span>
          </li>
          <li class="u-f-c u-f-ajc">
            <img src="../assets/imgs/detail/room-device/3.png" />
            <span>洗衣机</span>
          </li>
          <li class="u-f-c u-f-ajc">
            <img src="../assets/imgs/detail/room-device/4.png" />
            <span>空调</span>
          </li>
          <li class="u-f-c u-f-ajc">
            <img src="../assets/imgs/detail/room-device/5.png" />
            <span>智能锁</span>
          </li>
        </ul>
      </div>

      <div class="room3">
        <ul class="base-info u-f u-f-asc">
          <li class="u-f-c u-f-item" style="border-right:2px solid #efefef">
            <span>朝向-南</span>
            <span>10m²</span>
          </li>
          <li class="u-f-c u-f-item" style="border-right:2px solid #efefef">
            <span>四室一厅一卫</span>
            <span>智能锁</span>
          </li>
          <li class="u-f-c u-f-item">
            <span>12/30层</span>
            <span>有电梯</span>
          </li>
        </ul>
        <ul class="u-f-c">
          <li class="u-f u-f-ac">
            <img src="../assets/imgs/detail/icon-gps.png" />
            <div style="color:#000;font-size:14px;font-weight:bold;">距离南京南站约1KM 1号线1.2KM</div>
          </li>
          <li class="u-f u-f-ac">
            <img src="../assets/imgs/detail/icon-room.png" />
            <div style="color:#515151;font-size:14px;">设置工作地 查看通勤路线</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="room-live">
      <van-tabs v-model="active" color="#54cbcc" line-width="20px" :swipeable="true" :sticky="true">
        <van-tab class="opt-item">
          <div slot="title" :style="active==0 ?'font-weight:bold;color:#515151;':''">配置周边</div>
          <Item1/>
        </van-tab>
        <van-tab class="opt-item">
          <div slot="title" :style="active==1 ?'font-weight:bold;color:#515151;':''">房源特色</div>
          <Item2/>
        </van-tab>
        <van-tab class="opt-item">
          <div slot="title" :style="active==2 ?'font-weight:bold;color:#515151;':''">小区介绍</div>
          <Item3/>
        </van-tab>
        <van-tab class="opt-item">
          <div slot="title" :style="active==3 ?'font-weight:bold;color:#515151;':''">房源推荐</div>
          <Item4/>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Header from "@/components/detail/Header.vue";
import Gallary from "@/components/Gallary.vue";
import Item1 from "@/components/detail/tab/Item1.vue";
import Item2 from "@/components/detail/tab/Item2.vue";
import Item3 from "@/components/detail/tab/Item3.vue";
import Item4 from "@/components/detail/tab/Item4.vue";
export default {
  name: "Detail",
  data() {
    return {
      id: "",
      showGallary: false,
      imgs: [
        {
          id: 1,
          img: require("../assets/imgs/detail/1.jpg")
        },
        {
          id: 2,
          img: require("../assets/imgs/detail/2.jpg")
        },
        {
          id: 3,
          img: require("../assets/imgs/detail/3.jpg")
        },
        {
          id: 4,
          img: require("../assets/imgs/detail/4.jpg")
        },
        {
          id: 5,
          img: require("../assets/imgs/detail/5.jpg")
        },
        {
          id: 6,
          img: require("../assets/imgs/detail/6.jpg")
        }
      ],
      active: 0,

      isGuanzhu:false,  //是否关注
    };
  },
  components: {
    Header,
    Gallary,
    Item1,
    Item2,
    Item3,
    Item4
  },
  created() {
    this.id = this.$route.params.id;
    console.log("详情id:", this.id);
  },
  mounted(){
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    },
    //预览图片
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    },
    //关注
    guanzhu(){
        this.isGuanzhu = !this.isGuanzhu
    },
    //拨打电话
    callTel(){
        this.$toast({
          message: "拨打电话中...",
          duration: 1500
        });
    },
    //付款方式
    payMoney(){
        this.$toast({
          message: "点击了付款方式...",
          duration: 1500
        });
    },
    //底部tabbar--电话咨询
    telphone(){
        this.$toast({
          message: "拨打电话中...",
          duration: 1500
        });
    },
     lookRoom(){
        this.$toast({
          message: "看房中...",
          duration: 1500
        });
    },

  }
  //   beforeRouteEnter(to, from, next) {
  //     let id = to.params.id;
  //     // console.log(/detail\/\d+/.test(to.path))
  //     if (/detail\/\d+/.test(to.path)) {
  //       next(`/detail/item1`);
  //     } else {
  //       next();
  //     }
  //   }
};
</script>

<style lang="scss" scoped>
.details {
  width: 100%;
  margin-bottom: 60px;
  .detail-top {
    :first-child {
      width: 100%;
    }
    .banner-info {
      position: relative;
      width: 100%;
      top: -30px;
      .banner-tittle {
        color: #ffffff;
        font-size: 14px;
        font-weight: bold;
        img {
          width: 25px !important;
          margin-right: 7px;
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 60px;
    background-color: rgb(249, 249, 249);
    .attention {
      height: 60px;
    }
    .call {
      height: 40px;
      background-color: #fac543;
      color: #ffffff;
      width: 120px;
      border-radius: 6px;
      margin-right: 15px;
      font-size: 16px;
      font-weight: bold;
    }
    .look-room {
      background-color: #3ebebf;
      color: #ffffff;
      height: 40px;
      border-radius: 6px;
      width: 120px;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .room-desc {
    position: relative;
    top: -10px;
    margin: 0 10px;
    .room1 {
      .room {
        .desc {
          width: 300px;
          font-size: 16px;
          color: $big-color;
          font-weight: bold;
          @extend %ellipsis;
        }
        .label {
          width: 100%;
          margin-top: 10px;
          .label-item {
            width: 60px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            margin-right: 5px;
            border-radius: 4px;
          }
          .label-item:nth-child(2n) {
            font-size: $base-fz;
            color: $color3;
            background-color: $bg-color3;
          }
          .label-item:nth-child(2n + 1) {
            font-size: $base-fz;
            color: $color2;
            background-color: $bg-color2;
          }
        }
      }
    }
    .pay-money {
      margin-top: 15px;
      ul > li:nth-child(1) {
        color: $color1;
        font-size: 16px;
        font-weight: bold;
        margin-right: 5px;
      }
      li:nth-child(2) {
        color: $text-color;
        font-size: $base-fz;
        margin-right: 5px;
      }
      li:nth-child(3) {
        color: $littlesc;
        font-size: $base-fz;
        text-decoration: line-through;
      }
      .u-f-sbc {
        color: $littlesc;
        font-size: $base-fz;
      }
    }
    .room2 {
      margin-top: 20px;
      .title {
        color: $big-color;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 15px;
      }
      li > img {
        width: 30px;
        margin-bottom: 5px;
      }
      li > span {
        color: $littlesc;
        font-size: $base-fz;
      }
    }
    .room3 {
      border-radius: 10px;
      // background-color: rgba(229, 232, 236, 0.26);
      background-color: #FAFAFA;
      margin-top: 20px;
      .base-info {
        > li {
          text-align: center;
          margin: 20px 10px;
          :first-child {
            margin-bottom: 10px;
            font-size: 15px;
            font-weight: bold;
            color: $big-color;
          }
          :last-child {
            font-size: $base-fz;
            color: $littlesc;
          }
        }
      }
      .u-f {
        margin-left: 15px;
        margin-bottom: 10px;
        > img {
          margin-right: 10px;
        }
      }
    }
  }
  .room-live {
    margin-top: 15px;
    .opt-list {
      height: 40px;
      background-color: #f9f9f9;
      .opt-item {
        color: $littlesc;
        font-size: $base-fz-s;
      }
      .actives {
        color: $text-color;
        font-size: $base-fz-s;
        font-weight: bold;
      }
    }
  }
}
</style>
