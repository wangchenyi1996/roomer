<template>
  <div class="findHome" :class="fix ? 'fix-home' :''">
    <!-- 搜索，带删除 -->
    <Header />

    <!-- 分类 -->
    <van-dropdown-menu active-color="#54cbcc" :close-on-click-outside="true" :overlay="overlay">
      <ul class="home-type u-f u-f-sbc">
        <van-dropdown-item
          title="合/整租"
          @close="closeItem"
          @open="openItem"
          @change="changeItem"
          ref="dropDown"
        >
          <div v-show="show1">
            <div class="hezu">
              <div class="title u-f">
                <span>合租</span>
                <span>专业室内设计 | 高品质合租</span>
              </div>
              <ul class="all-room u-f u-f-sbc">
                <li @click="toggleFlag(1)">
                  <button class="hz-btn" :class="flag1?'flag':''">全部</button>
                </li>
                <li @click="toggleFlag(2)">
                  <button class="hz-btn" :class="flag2?'flag':''">2居</button>
                </li>
                <li @click="toggleFlag(3)">
                  <button class="hz-btn" :class="flag3?'flag':''">3居</button>
                </li>
                <li @click="toggleFlag(4)">
                  <button class="hz-btn" :class="flag4?'flag':''">4居+</button>
                </li>
              </ul>
              <div class="line"></div>
            </div>
            <div class="hezu">
              <div class="title u-f">
                <span>整租</span>
                <span>业主整租 | 给你空间自主权</span>
              </div>
              <ul class="all-room u-f u-f-sbc">
                <li @click="toggleFlag2(1)">
                  <button class="hz-btn" :class="flag01?'flags':''">全部</button>
                </li>
                <li @click="toggleFlag2(2)">
                  <button class="hz-btn" :class="flag02?'flags':''">2居</button>
                </li>
                <li @click="toggleFlag2(3)">
                  <button class="hz-btn" :class="flag03?'flags':''">3居</button>
                </li>
                <li @click="toggleFlag2(4)">
                  <button class="hz-btn" :class="flag04?'flags':''">4居+</button>
                </li>
              </ul>
              <div class="line"></div>
            </div>
            <div class="submits u-f u-f-sbc">
              <button @click="resetOpt">重置</button>
              <button @click="submitOpt">确定</button>
            </div>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="位置" @close="closeItem" @open="openItem" @change="changeItem">
          <div>
            <van-tree-select
              :items="items"
              :active-id.sync="activeId"
              :main-active-index.sync="activeIndex"
              @click-nav="clickNav"
              @click-item="clickRightItem"
            />
          </div>
        </van-dropdown-item>
        <van-dropdown-item
          v-model="value3"
          :options="option3"
          @change="changeItem"
          @close="closeItem"
          @open="openItem"
        />
        <van-dropdown-item title="更多" @close="closeItem" @open="openItem" @change="changeItem">
          <div class="more" v-show="show2">
            <div class="fwts">
              <p>房屋特色</p>
              <ul class="fwts-list u-f u-f-wrap">
                <li
                  v-for="(item,index) in findHome.list1"
                  :key="index"
                  @click="getFlag(index)"
                  :class="valArr.includes(index)? 'flag': ''"
                >{{item}}</li>
              </ul>
            </div>
            <div class="fwts">
              <p>房屋朝向</p>
              <ul class="fwts-list u-f u-f-wrap">
                <li
                  v-for="(item,index) in findHome.list2"
                  :key="index"
                  :class="valArr2.includes(index)? 'flag': ''"
                  @click="getFlag2(index)"
                >{{item}}</li>
              </ul>
            </div>

            <div class="fwts">
              <p>房屋面积</p>
              <ul class="fwts-list u-f u-f-wrap">
                <li
                  v-for="(item,index) in findHome.list3"
                  :key="index"
                  :class="valArr3.includes(index)? 'flag': ''"
                  @click="getFlag3(index)"
                >{{item}}</li>
              </ul>
            </div>

            <div class="fwts">
              <p>房屋风格</p>
              <ul class="fwts-list u-f u-f-wrap">
                <li
                  v-for="(item,index) in findHome.list4"
                  :key="index"
                  :class="valArr4.includes(index)? 'flag': ''"
                  @click="getFlag4(index)"
                >{{item}}</li>
              </ul>
            </div>

            <div class="fwts">
              <p>房屋状态</p>
              <ul class="fwts-list u-f u-f-wrap">
                <li
                  v-for="(item,index) in findHome.list5"
                  :key="index"
                  :class="valArr5.includes(index)? 'flag': ''"
                  @click="getFlag5(index)"
                >{{item}}</li>
              </ul>
            </div>
            <div class="submits u-f u-f-sbc">
              <button @click="resetOpt2">重置</button>
              <button @click="submitOpt2">确定</button>
            </div>
          </div>
        </van-dropdown-item>
        <li class="type-item">
          <img src="../assets/imgs/findHome/sort.png" alt="排序" class="paixu" @click="reset" />
        </li>
      </ul>
    </van-dropdown-menu>

    <!-- <div class="line"></div> -->
    <!-- 热门地点 -->
    <ul class="hot u-f">
      <li v-for="item in hots" :key="item.id" @click="goHot(item)">{{item.text}}</li>
    </ul>

    <!-- 房屋列表 -->
    <WScroll
      class="content-scroll"
      ref="scroll"
      :probe-type="3"
      :pull_down_refresh="true"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
      @pullingDown="pullDown"
    >
      <div class="room-around">
        <div style="text-align:center;margin-bottom:10px" v-show="isLoading">
          <van-loading type="spinner" size="24px">拼命刷新中...</van-loading>
        </div>
        <div class="room-list" v-for="(item,index) in roomList" :key="index">
          <img v-if="index==8" src="../assets/imgs/findHome/home.png" />
          <Room v-else :item="item" :index="index" />
        </div>
        <div style="text-align:center;margin-top:10px" v-show="ismore">
          <van-loading type="spinner" size="24px">正在加载中...</van-loading>
        </div>
      </div>
      <!-- 尾部 -->
      <van-divider :style="{ color: '#515151', borderColor: '#fff', padding: '20px 16px' }"></van-divider>
    </WScroll>

    <!-- 返回顶部按钮 -->
    <img
      src="../assets/imgs/home/top.png"
      alt="返回顶部"
      class="top"
      @click="backClick"
      v-show="showTopBtn"
    />

    <TabBar v-show="$route.meta.showTabBar" />
  </div>
</template>

<script>
//引入自定义封装的better-scroll插件
import WScroll from "@/components/WScroll/WScroll.vue";

import { mapActions, mapState } from "vuex";
import TabBar from "@/components/TabBar.vue";
import Room from "@/components/Room.vue";
import Header from "@/components/findHome/Header.vue";
import findHomeData from "@/common/data.js";

export default {
  name: "FindHome",
  data() {
    return {
      showTopBtn: false,
      isLoading: false,
      ismore: false,

      roomlists: [],
      hots: [
        {
          text: "新街口",
          id: 1
        },
        {
          text: "油坊桥",
          id: 2
        },
        {
          text: "马群",
          id: 4
        },
        {
          text: "珠江路",
          id: 5
        },
        {
          text: "鼓楼",
          id: 6
        },
        {
          text: "百家湖",
          id: 7
        },
        {
          text: "双龙大道",
          id: 8
        },
        {
          text: "天润城",
          id: 9
        }
      ],
      // 下拉菜单
      value3: "a",
      option3: [
        { text: "不限", value: "a" },
        { text: "1000元以下", value: "b" },
        { text: "1000-2000元", value: "c" },
        { text: "2000-3000元", value: "d" },
        { text: "3000-4000元", value: "e" },
        { text: "4000-5000元", value: "f" },
        { text: "5000-6000元", value: "g" },
        { text: "6000元以上", value: "h" }
      ],
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,

      flag01: false,
      flag02: false,
      flag03: false,
      flag04: false,
      overlay: true,
      fix: false,
      show1: true,
      show2: true,
      //输入框后面删除图标显示和隐藏
      search: "",

      items: findHomeData,
      activeId: 1,
      activeIndex: 1,

      findHome: {
        list1: [
          "独立卫生间",
          "独立阳台",
          "靠近地铁",
          "独立淋浴",
          "绿化好",
          "品质公寓",
          "美食多",
          "购物电",
          "靠近小学",
          "可月租"
        ],
        list2: ["东", "南", "西", "北", "南北"],
        list3: [
          "10m²以下",
          " 10-20m²",
          "20-30m²",
          "30-40m²",
          "40-50m²",
          "50-60m²",
          "60m²以上"
        ],
        list4: ["工业风", "北欧宜家", "现代简约", "MUJI风"],
        list5: ["转租", "可预定", "可立即入住"]
      },
      valArr: [],
      valArr2: [],
      valArr3: [],
      valArr4: [],
      valArr5: []
    };
  },
  components: {
    TabBar,
    Room,
    Header,
    WScroll
  },
  computed: {
    ...mapState("ziroom", ["roomList"]),
    inputRight() {
      if (this.search != "") {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    ...mapActions("ziroom", ["getRoomList"]),
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.showTopBtn = position.y >= -1000 ? false : true;
    },
    //模拟上拉加载
    loadMore() {
      this.ismore = true;
      let obj = {
        roomImg:
          "http://lc-00shgioj.cn-n1.lcfile.com/b21aa716b308d307b501/1.jpg",
        roomWhere: "天景山公寓花锦苑 主卧 朝南 B室",
        type: 1,
        price: 680,
        oldPrice: 1380,
        roomIntro: "四室一厅",
        roomArea: "120.8m²",
        roomLive: "18/30层",
        whereInfo: "距3号线龙眠大道站550米",
        label: ["首月减免", "独立阳台", "地铁周边"]
      };
      setTimeout(() => {
        this.roomList.push(obj);
        this.$refs.scroll.finishPullUp();
        this.ismore = false;
        this.$refs.scroll.refresh();
      }, 1000);
    },
    //模拟下拉刷新
    pullDown() {
      this.isLoading = true;
      let obj = {
        roomImg:
          "http://lc-00SHgiOJ.cn-n1.lcfile.com/cb906e925d4574a51a29/4.jpg",
        roomWhere: "南京南站 龙西新寓 朝北 D室",
        type: 4,
        price: 683,
        oldPrice: 1383,
        roomIntro: "四室一厅",
        roomArea: "120.8m²",
        roomLive: "18/30层",
        whereInfo: "距1号线天印大道站550米",
        label: ["首月减免", "独立阳台", "地铁周边"]
      };
      setTimeout(() => {
        this.roomList.unshift(obj);
        this.$refs.scroll.finishPullDown();
        this.isLoading = false;
        this.$refs.scroll.refresh();
      }, 1000);
    },
    //重置选项
    reset() {
      this.$toast({
        message: "重置内容...",
        duration: 1500
      });
    },
    toggleFlag(index) {
      if (index == 1) {
        if (this.flag1 && this.flag2 && this.flag3 && this.flag4) {
          this.flag1 = false;
          this.flag4 = false;
          this.flag3 = false;
          this.flag2 = false;
        } else {
          this.flag1 = true;
          this.flag2 = true;
          this.flag3 = true;
          this.flag4 = true;
        }
      } else if (index == 2) {
        if (this.flag3 && this.flag4) {
          if (this.flag2) {
            this.flag2 = false;
            this.flag1 = false;
          } else {
            this.flag2 = !this.flag2;
            this.flag1 = true;
          }
        } else {
          if (this.flag2) {
            this.flag2 = false;
          } else {
            this.flag2 = !this.flag2;
          }
        }
      } else if (index == 3) {
        if (this.flag2 && this.flag4) {
          if (this.flag3) {
            this.flag3 = false;
            this.flag1 = false;
          } else {
            this.flag3 = !this.flag3;
            this.flag1 = true;
          }
        } else {
          if (this.flag3) {
            this.flag3 = false;
          } else {
            this.flag3 = !this.flag3;
          }
        }
      } else if (index == 4) {
        if (this.flag2 && this.flag3) {
          if (this.flag4) {
            this.flag4 = false;
            this.flag1 = false;
          } else {
            this.flag4 = !this.flag4;
            this.flag1 = true;
          }
        } else {
          if (this.flag4) {
            this.flag4 = false;
          } else {
            this.flag4 = !this.flag4;
          }
        }
      }
    },
    toggleFlag2(index) {
      if (index == 1) {
        if (this.flag01 && this.flag02 && this.flag03 && this.flag04) {
          this.flag01 = false;
          this.flag04 = false;
          this.flag03 = false;
          this.flag02 = false;
        } else {
          this.flag01 = true;
          this.flag02 = true;
          this.flag03 = true;
          this.flag04 = true;
        }
      } else if (index == 2) {
        if (this.flag03 && this.flag04) {
          if (this.flag02) {
            this.flag02 = false;
            this.flag01 = false;
          } else {
            this.flag02 = !this.flag02;
            this.flag01 = true;
          }
        } else {
          if (this.flag02) {
            this.flag02 = false;
          } else {
            this.flag02 = !this.flag02;
          }
        }
      } else if (index == 3) {
        if (this.flag02 && this.flag04) {
          if (this.flag03) {
            this.flag03 = false;
            this.flag01 = false;
          } else {
            this.flag03 = !this.flag03;
            this.flag01 = true;
          }
        } else {
          if (this.flag03) {
            this.flag03 = false;
          } else {
            this.flag03 = !this.flag03;
          }
        }
      } else if (index == 4) {
        if (this.flag02 && this.flag03) {
          if (this.flag04) {
            this.flag04 = false;
            this.flag01 = false;
          } else {
            this.flag04 = !this.flag04;
            this.flag01 = true;
          }
        } else {
          if (this.flag04) {
            this.flag04 = false;
          } else {
            this.flag04 = !this.flag04;
          }
        }
      }
    },
    closeItem() {
      this.show1 = true;
      this.show2 = true;
      this.fix = !this.fix;
      console.log("关", this.fix);
    },
    openItem() {
      this.show1 = true;
      this.show2 = true;
      this.fix = !this.fix;
      console.log("开", this.fix);
    },
    changeItem(e) {
      console.log("改变菜单", e);
    },
    resetOpt() {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;

      this.flag01 = false;
      this.flag02 = false;
      this.flag03 = false;
      this.flag04 = false;
    },
    submitOpt() {
      this.show1 = !this.show1;
      this.overlay = !this.overlay;
      this.fix = false;
      console.log("3", this.fix);
    },
    resetOpt2() {},
    submitOpt2() {
      this.show2 = !this.show2;
      this.overlay = false;
      this.fix = false;
    },

    clickNav(e) {
      console.log(e);
      this.activeId = 1;
    },
    clickRightItem(data) {
      console.log(data);
    },
    getFlag(i) {
      let idx = this.valArr.indexOf(i);
      if (idx > -1) {
        this.valArr.splice(idx, 1);
      } else {
        this.valArr.push(i);
      }
    },
    getFlag2(i) {
      let idx = this.valArr2.indexOf(i);
      if (idx > -1) {
        this.valArr2.splice(idx, 1);
      } else {
        this.valArr2.push(i);
      }
    },
    getFlag3(i) {
      let idx = this.valArr3.indexOf(i);
      if (idx > -1) {
        this.valArr3.splice(idx, 1);
      } else {
        this.valArr3.push(i);
      }
    },
    getFlag4(i) {
      let idx = this.valArr4.indexOf(i);
      if (idx > -1) {
        this.valArr4.splice(idx, 1);
      } else {
        this.valArr4.push(i);
      }
    },
    getFlag5(i) {
      let idx = this.valArr5.indexOf(i);
      if (idx > -1) {
        this.valArr5.splice(idx, 1);
      } else {
        this.valArr5.push(i);
      }
    },
    goHot(item) {
      this.$toast({
        message: "点击了" + item.text,
        duration: 1500,
        onClose: () => {
          this.clickHot();
        }
      });
    },
    //模拟点击了热门地点
    clickHot() {
      this.$toast({
        message: "正在加载中...",
        duration: 1500
      });
      let temp = [];
      for (let i = 0; i < this.roomlists.length; i++) {
        if (this.roomlists[i].type % 2 == 0) {
          temp.push(this.roomlists[i]);
        }
      }
      this.roomlists = temp;
    }

  },
  mounted() {
    // this.$nextTick(() => {
      this.getRoomList();
      // 1.图片加载完成的事件监听
        this.$nextTick(() => {
        this.$bus.$on("imgMoreLoad", () => {
          this.$refs.scroll.refresh();
          console.log("图片加载",this.$refs.scroll.scroll);
        });
      });
  },
  activated() {
    // console.log("activated");
    
  }
};
</script>


<style lang="scss">
.line {
  @include borderBottom($r: #efefef);
  content: "  ";
  height: 1px;
  margin: 0px -10px;
}
.van-popup {
  overflow-y: 1 !important;
}

.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-width: 0px 0;
}
.van-dropdown-menu {
  margin-top: 5px;
  height: 40px;
  background-color: #fff;
  justify-content: space-between;
  @include borderBottom($r: #efefef);
  margin-left: -10px;
  padding-left: 10px;
  margin-right: -10px;
  padding-right: 10px;
  z-index: 999;
}
.van-dropdown-menu__item {
  flex: none;
}
.van-ellipsis {
  font-size: 14px;
}
.van-tree-select__item--active {
  color: $main-color;
}
.van-sidebar-item--select {
  border-color: $main-color;
}
.my-class {
  font-size: $base-fz-s;
  font-weight: bold;
}
.hezu {
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  .title {
    margin-bottom: 15px;
    :first-child {
      font-size: $base-fz-m;
      color: $big-color;
      font-weight: bold;
      display: inline-block;
      margin-right: 10px;
    }
    :last-child {
      font-size: $base-fz;
      color: $littlesc;
    }
  }
  .all-room {
    margin-bottom: 15px;
    li {
      flex: 1;
      .hz-btn {
        background-color: #fff;
        @include borderAll($r: #efefef);
        width: 90%;
        padding: 7px 0;
        border-radius: 15px;
      }
    }
  }
}
.submits {
  margin-top: 25px;
  padding-bottom: 25px;
  :first-child {
    width: 30%;
    height: 40px;
    line-height: 40px;
    margin-left: 15px;
    @include borderAll($r: #efefef);
    background-color: #fff;
    border-radius: 4px;
    font-size: $base-fz-s;
  }
  :last-child {
    width: 55%;
    height: 40px;
    line-height: 40px;
    margin-right: 15px;
    border: none;
    background-color: $main-color;
    border-radius: 4px;
    @include borderAll($r: #efefef);
    font-size: $base-fz-s;
    color: #fff;
  }
}
.flag,
.flags {
  color: #fff !important;
  background-color: $main-color !important;
  @include borderAll($r: $main-color);
}
.more {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 15px;
  .fwts {
    > p {
      font-size: $base-fz-m;
      color: $big-color;
      font-weight: bold;
    }
    .fwts-list {
      margin-bottom: 25px;
      > li {
        background-color: #fff;
        margin-top: 15px;
        margin-right: 10px;
        padding: 10px 5px;
        width: 65px;
        text-align: center;
        border-radius: 4px;
        @include borderAll($r: #cfcfcf);
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.content-scroll{
  height: calc(100% - 185px);
  overflow: hidden;
}
.top {
  position: fixed;
  right: 15px;
  bottom: 70px;
}
.fix-home {
  position: fixed;
  width: 95%;
}
.findHome {
  height: 100vh;
  margin: 0 10px;

  .home-type {
    margin-top: 25px;
    padding-bottom: 15px;
    .type-item {
      > img {
        width: 16px;
      }
      > span {
        color: $text-color;
        font-size: $base-fz-s;
      }
      .icon-sort-desc {
        position: relative;
        top: -3px;
      }
      .paixu {
        position: relative;
        top: -4px;
        left: -5px;
      }
    }
  }
  .line {
    @include borderBottom($r: #efefef);
    content: "  ";
    height: 1px;
    margin: 0px -10px;
  }
  .room-around {
    // margin: 20px 0px;
    // padding-bottom: 20px;
    .room-list {
      > img {
        width: 100%;
        margin-bottom: 25px;
        border-radius: 4px;
      }
    }
  }
  .hot {
    margin-top: 10px;
    margin-bottom: 15px;
    width: 100%;
    font-size: $base-fz-s;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      background-color: rgba(239, 239, 239, 0.63);
      border-radius: 20px;
      padding: 7px 3px;
      margin-right: 7px;
      min-width: 60px;
      text-align: center;
    }
  }
}
</style>