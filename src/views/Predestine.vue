<template>
  <div class="predestine">
    <!-- 头部 可使用插槽-->
    <CommHeader :title="title" style="background:#ffffff;" />

    <div class="pre-list">
      <van-tabs
        v-model="active"
        sticky
        animated
        swipeable
        color="#54cbcc"
        line-width="20px"
        :border="false"
      >
        <van-tab>
          <div slot="title" :style="active==0 ?activeStyle:deactiveStyle">待看房</div>
          <!-- 没有数据时 -->
          <div class="no-data u-f u-f-ajc" v-show="showData">
            <img src="../assets/imgs/login/no_pre.png" />
          </div>
          <!-- 有数据时 -->
          <div class="have-data" v-show="!showData">
            <!-- 预定 -->
            <template v-for="item in dkData">
              <RoomItem :key="item.id" :item="item" @goGPS="gps"/>
            </template>
          </div>
        </van-tab>

        <van-tab>
          <div slot="title" :style="active==1 ?activeStyle:deactiveStyle">已看房</div>
          <!-- 没有数据时 -->
          <div class="no-data u-f u-f-ajc" v-show="showData">
            <img src="../assets/imgs/login/no_pre.png" />
          </div>
          <!-- 有数据时 -->
          <div class="have-data" v-show="!showData">
            <!-- 看过 -->
            <template v-for="item in kgData">
              <RoomItem :key="item.id" :item="item" />
            </template>
          </div>
        </van-tab>

        <van-tab>
          <div slot="title" :style="active==2 ?activeStyle:deactiveStyle">已预定</div>
          <!-- 没有数据时 -->
          <div class="no-data u-f u-f-ajc" v-show="showData">
            <img src="../assets/imgs/login/no_pre.png" />
          </div>
          <!-- 有数据时 -->
          <div class="have-data" v-show="!showData">
            <!-- 看过 -->
            <template v-for="item in ydData">
              <RoomItem :key="item.id" :item="item" />
            </template>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import CommHeader from "@/components/CommHeader.vue";
import RoomItem from "@/components/pre/RoomItem.vue";
export default {
  name: "Predestine",
  data() {
    return {
      title: "预定记录",
      activeStyle: {
        fontWeight: "bold",
        fontSize: "16px",
        color: "#54cbcc"
      },
      deactiveStyle: {
        color: "#999",
        fontWeight: "bold"
      },
      active: 0,
      showData: false,
      dkData: [
        {
          id: 1,
          type: 1,
          img: require("../assets/imgs/home/room/1.jpg"),
          roomWhere: "下马坊 万达江南明珠 主卧 朝南",
          price: 880,
          timeStr: "2019-10-10",
          label: [
            {
              id: 1,
              msg: "立减返现"
            },
            {
              id: 2,
              msg: "靠近地铁"
            },
            {
              id: 3,
              msg: "绿化好"
            }
          ]
        },
        {
          id: 2,
          type: 1,
          img: require("../assets/imgs/home/room/2.jpg"),
          roomWhere: "柳洲东路 明发滨江新城二期 主卧",
          price: 1080,
          timeStr: "2019-12-10",
          label: [
            {
              id: 1,
              msg: "品质公寓"
            },
            {
              id: 2,
              msg: "靠近地铁"
            },
            {
              id: 3,
              msg: "学区房"
            }
          ]
        }
      ],
      kgData: [
        {
          id: 1,
          type: 2,
          img: require("../assets/imgs/home/room/1.jpg"),
          roomWhere: "下马坊 万达江南明珠 主卧 朝南",
          price: 880,
          timeStr: "2019-10-10",
          label: [
            {
              id: 1,
              msg: "立减返现"
            },
            {
              id: 2,
              msg: "靠近地铁"
            },
            {
              id: 3,
              msg: "绿化好"
            }
          ]
        },
        {
          id: 2,
          type: 2,
          img: require("../assets/imgs/home/room/2.jpg"),
          roomWhere: "柳洲东路 明发滨江新城二期 主卧",
          price: 1080,
          timeStr: "2019-12-10",
          label: [
            {
              id: 1,
              msg: "品质公寓"
            },
            {
              id: 2,
              msg: "靠近地铁"
            },
            {
              id: 3,
              msg: "学区房"
            }
          ]
        }
      ],
      ydData: [
        {
          id: 1,
          type: 3,
          img: require("../assets/imgs/home/room/1.jpg"),
          roomWhere: "下马坊 万达江南明珠 主卧 朝南A室",
          price: 880,
          timeStr: "2019-10-10",
          label: [
            {
              id: 1,
              msg: "立减返现"
            },
            {
              id: 2,
              msg: "靠近地铁"
            },
            {
              id: 3,
              msg: "绿化好"
            }
          ]
        }
      ]
    };
  },
  components: {
    CommHeader,
    RoomItem
  },
  methods: {
    gps(id){
      // console.log(id) //房源的id
     this.$router.push({
        name:'myMap',
        params:{
          id:id
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.van-tab__pane-wrapper {
  min-height: 80vh;
}

.predestine {
  margin-top: 50px;
  .pre-list {
    .no-data {
      height: 100%;
      > img {
        width: 40%;
        margin-top: 100px;
      }
    }
    .have-data {
      margin: 20px 10px 0px;
    }
  }
}
</style>
