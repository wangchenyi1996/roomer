<template>
  <div class="home" :class="fix ? 'fix':''">
    <!-- 头部导航 -->
    <HeaderNav :flag="flag" />
    <!-- 轮播图 -->
    <Swipers :swiperList="swiperList" :current="current" @changeCurrent="changeCurrent" />
    <!-- 小介绍 -->
    <Intro :intro="intro" />
    <!-- 合租、整租、月租、找房 -->
    <RoomOption :roomOption="roomOption" />
    <!-- 介绍 -->
    <IntroRooms :roomIntro="roomIntro" />
    <!-- 特惠房源 -->
    <DiscountRoom :discountRoom="discountRoom" />
    <!-- 租住品质 -->
    <RentalQuality :rentalQuality="rentalQuality" :current2="current2" @handleRent="handleRent" />
    <!-- 服务、维修 -->
    <Services />
    <!-- 返回顶部按钮 -->
    <img
      src="../assets/imgs/home/top.png"
      alt="返回顶部"
      class="top"
      v-show="showBack"
      @click="backTop"
    />
    <!-- 保洁、搬家、维修服务 -->
    <ServiceMajor />
    <!-- 自如驿站 -->
    <Station />
    <!-- 自如优品 -->
    <GoodProduct :goodProduct="goodProduct" />
     <!-- 尾部 -->
    <van-divider :style="{ color: '#515151', borderColor: '#cfcfcf', padding: '0 16px' }">我是有底线的</van-divider>

    <div class="first" v-show="isflag" @touchmove.prevent>
      <img src="../assets/imgs/home/first.png" width="70%" />
      <img src="../assets/imgs/home/error.png" @click="isFirst" />
    </div>
    <TabBar v-show="$route.meta.showTabBar" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TabBar from "@/components/TabBar.vue";
import Swipers from "@/components/home/Swiper.vue";
import HeaderNav from "@/components/home/HeaderNav.vue";
import Intro from "@/components/home/Intro.vue";
import RoomOption from "@/components/home/RoomOption.vue";
import IntroRooms from "@/components/home/IntroRooms.vue";
import RentalQuality from "@/components/home/RentalQuality.vue";
import DiscountRoom from "@/components/home/DiscountRoom.vue";
import Services from "@/components/home/Services.vue";
import ServiceMajor from "@/components/home/ServiceMajor.vue";
import Station from "@/components/home/Station.vue";
import GoodProduct from "@/components/home/GoodProduct.vue";

//节流、防抖
import { debounce, throttle} from "utils/mUtils.js";

export default {
  name: "Home",
  data() {
    return {
      newSwiperList: [],
      current: 0,
      intro: [
        {
          id: 1,
          img: require("../assets/imgs/home/ic1.png"),
          text: "100%房源房价"
        },
        {
          id: 2,
          img: require("../assets/imgs/home/ic2.png"),
          text: "月度双次保洁/极速维修"
        },
        {
          id: 3,
          img: require("../assets/imgs/home/ic3.png"),
          text: "品质房屋/放心呼吸"
        }
      ],
      roomOption: [
        {
          id: 1,
          img: require("../assets/imgs/home/hz.png"),
          text: "合租"
        },
        {
          id: 2,
          img: require("../assets/imgs/home/zz.png"),
          text: "整租"
        },
        {
          id: 3,
          img: require("../assets/imgs/home/yz.png"),
          text: "月租"
        },
        {
          id: 4,
          img: require("../assets/imgs/home/dtzf.png"),
          text: "找房"
        }
      ],
      roomIntro: [
        {
          id: 1,
          img: "http://lc-3resYveE.cn-n1.lcfile.com/8bb9851e16091c9d597d/1.png"
        },
        {
          id: 2,
          img: "http://lc-3resYveE.cn-n1.lcfile.com/2be0f0883cf462ef3ac4/2.png"
        },
        {
          id: 3,
          img: "http://lc-3resYveE.cn-n1.lcfile.com/019b4fa763339acd01eb/3.png"
        }
      ],
      top: 0,
      showBack: false, //是否显示返回顶部按钮
      flag: true, //导航栏渐变消失、显示效果

      current2: 0,
      rentalQuality: [
        {
          id: 1,
          img: require("../assets/imgs/home/1.png")
        },
        {
          id: 2,
          img: require("../assets/imgs/home/2.png")
        },
        {
          id: 3,
          img: require("../assets/imgs/home/3.png")
        }
      ],
      discountRoom: [
        {
          id: 1,
          img: require("../assets/imgs/home/room/1.jpg"),
          roomWhere: "下马坊 万达江南明珠 主卧 朝南",
          price: 880,
          oldPrice: 1560,
          label: [
            {
              id: 1,
              msg: "立减返现"
            },
            {
              id: 2,
              msg: "靠近地铁"
            }
          ]
        },
        {
          id: 2,
          img: require("../assets/imgs/home/room/2.jpg"),
          roomWhere: "柳洲东路 明发滨江新城二期 主卧",
          price: 1080,
          oldPrice: 1690,
          label: [
            {
              id: 1,
              msg: "品质公寓"
            },
            {
              id: 2,
              msg: "靠近地铁"
            }
          ]
        },
        {
          id: 3,
          img: require("../assets/imgs/home/room/3.jpg"),
          roomWhere: "新模范马路 西瓜圃桥 独立阳台",
          price: 680,
          oldPrice: 1250,
          label: [
            {
              id: 1,
              msg: "立减返现"
            },
            {
              id: 2,
              msg: "品质公寓"
            }
          ]
        },
        {
          id: 4,
          img: require("../assets/imgs/home/room/4.jpg"),
          roomWhere: "珠江路 进香河 次卧 朝北 阳光",
          price: 1980,
          oldPrice: 2560,
          label: [
            {
              id: 1,
              msg: "独立阳台"
            },
            {
              id: 2,
              msg: "靠近地铁"
            }
          ]
        },
        {
          id: 5,
          img: require("../assets/imgs/home/room/5.jpg"),
          roomWhere: "柳洲东路 明发滨江新城二期 主卧",
          price: 1080,
          oldPrice: 1690,
          label: [
            {
              id: 1,
              msg: "品质公寓"
            },
            {
              id: 2,
              msg: "靠近地铁"
            }
          ]
        },
        {
          id: 6,
          img: require("../assets/imgs/home/room/6.jpg"),
          roomWhere: "新模范马路 西瓜圃桥 独立阳台",
          price: 680,
          oldPrice: 1250,
          label: [
            {
              id: 1,
              msg: "立减返现"
            },
            {
              id: 2,
              msg: "品质公寓"
            }
          ]
        },
        {
          id: 7,
          img: require("../assets/imgs/home/room/7.jpg"),
          roomWhere: "珠江路 进香河 次卧 朝北 阳光",
          price: 1980,
          oldPrice: 2560,
          label: [
            {
              id: 1,
              msg: "独立阳台"
            },
            {
              id: 2,
              msg: "靠近地铁"
            }
          ]
        }
      ],
      goodProduct: [
        {
          id: 1,
          img: require("../assets/imgs/home/goods/yp1.jpg"),
          roomWhere:
            "述物原创 全棉抱枕靠垫家用沙发客厅简约北欧靠枕床头纯棉抱枕套（含枕芯）",
          price: 63.8
        },
        {
          id: 2,
          img: require("../assets/imgs/home/goods/yp2.jpg"),
          roomWhere:
            "星川 装饰画文艺复古餐厅客厅玄关组合画挂画现代简约 克拉斯克",
          price: 168.0
        },
        {
          id: 3,
          img: require("../assets/imgs/home/goods/yp3.jpg"),
          roomWhere: "M+ ins欧式创意字母小棕瓶透明复古花瓶家居摆设花瓶",
          price: 15.6
        },
        {
          id: 4,
          img: require("../assets/imgs/home/goods/yp4.jpg"),
          roomWhere:
            "述物原创 皮革ins抽纸盒北欧纸巾盒客厅创意家用欧式车载用纸巾袋",
          price: 25.9
        },
        {
          id: 5,
          img: require("../assets/imgs/home/goods/yp5.png"),
          roomWhere:
            "[自营] 自如优品 裸睡纯色水洗棉四件套多色可选床品套件 被套床单枕套1.5m/1.8m均适用",
          price: 349.0
        }
      ],
      isflag: true,
      fix: true
    };
  },
  components: {
    Swipers,
    HeaderNav,
    Intro,
    RoomOption,
    IntroRooms,
    RentalQuality,
    DiscountRoom,
    Services,
    ServiceMajor,
    Station,
    GoodProduct,
    TabBar
  },
  computed: {
    ...mapState("ziroom", ["swiperList"])
  },
  mounted() {
    this.getSwiperList();
    this.newSwiperList = this.swiperList;
    // window.addEventListener("scroll", throttle(this.handleScroll,200));
    window.addEventListener("scroll", this.handleScroll);
  },
  activated() {
    if (this.newSwiperList.length !== this.swiperList.length) {
      this.newSwiperList = this.swiperList;
      this.getSwiperList();
    }
    // window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapActions("ziroom", ["getSwiperList"]),

    changeCurrent(index) {
      this.current = index;
    },
    handleScroll(e) {
      // console.log(e.target.documentElement.scrollTop);
      this.top = e.target.documentElement.scrollTop;
      // 控制滚动按钮的隐藏或显示
      if (this.top > 350) {
        this.showBack = true;
      } else {
        this.showBack = false;
      }
      if (this.top > 40) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
    //回到顶部
    backTop() {
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.top / 15);
        document.documentElement.scrollTop = document.body.scrollTop =
          this.top + ispeed;
        if (this.top === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    handleRent(index) {
      this.current2 = index;
    },
    isFirst() {
      this.isflag = false;
      this.fix = false;
    }
  },
  deactivated() {
    //页面退出时，移除滚动事件
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
.fix {
  position: fixed !important;
  width: 100%;
}
.home {
  margin: 0 10px;
  position: relative;
  padding-bottom: 50px;
  height: 100%;
  &::-webkit-scrollbar {
    width: 0 !important;
    display: none;
  }
  .top {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    position: fixed;
    bottom: 90px;
    right: 15px;
    z-index: 99;
  }
  .first {
    img:first-child {
      border-radius: 10px;
      position: absolute;
      left: 12%;
      top: 18%;
    }
    img:last-child {
      position: absolute;
      left: 42%;
      top: 545px;
    }
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    padding-bottom: 60px;
    margin-left: -15px;
    margin-right: -15px;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    overflow-y: hidden;
    height: 100%;
  }
}
</style>
