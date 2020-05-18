<template>
  <div class="attend">
    <!-- 头部 可使用插槽-->
    <CommHeader :title="title">
      <!-- <div slot="right"><i class="iconfont icon-ziyuan icon" style="position:absolute;right:10px"></i></div> -->
    </CommHeader>
    <!-- Tab切换 -->
    <div class="tabs">
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
          <div
            slot="title"
            :style="active==0 ?'font-weight:bold;color:#54cbcc;':'color:#333;font-weight:bold;'"
          >我的关注</div>
          <div class="no-data" v-show="showData">
            <div class="no-title">共关注了0间房屋、0个小区</div>
            <div class="no u-f-c u-f-ajc">
              <img src="../assets/imgs/login/no-list.png" class="no-img" />
              <span class="no-btn">去找房</span>
            </div>
          </div>
          <div class="collect" v-show="!showData">
            <div class="no-title u-f u-f-sbc" v-show="!showCollect">
              <span>共关注了2间房屋、2个小区</span>
              <img src="../assets/imgs/login/check.png" @click="isShow" />
            </div>
            <ul class="is-collect u-f u-f-sbc" v-show="showCollect">
              <li @click="cancle">取消</li>
              <li @click="checkAll">全选</li>
              <li @click="delCollect">删除</li>
            </ul>
            <div class="collect-list">
              <van-checkbox-group
                v-show="showCollect"
                v-model="result"
                ref="checkboxGroup"
                checked-color="#FA735F"
                style="background:#fff;"
                @change="chooiseOne"
              >
                <div v-for="(item,index) in gzData" :key="index">
                  <van-checkbox
                    style="background:#f9f9f9;margin-bottom:20px;border-radius:4px;"
                    :name="index+1"
                  >
                    <CollectRoom :item="item" :index="index" />
                  </van-checkbox>
                </div>
              </van-checkbox-group>

              <div class="is-c" v-show="!showCollect" v-for="(item,index) in gzData" :key="index">
                <CollectRoom style="margin-bottom:20px;" :item="item" :index="index" />
              </div>
            </div>
            <!-- 推荐房源 -->
            <div class="tj">
              <p class="title">推荐房源</p>
              <div class="lists" v-for="(item,index) in gzData" :key="index">
                <CollectRoom :item="item" :index="index" style="margin-bottom:20px;" />
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab>
          <div
            slot="title"
            :style="active==1 ?'font-weight:bold;color:#54cbcc;':'color:#333;font-weight:bold;'"
          >我的足迹</div>
          <div class="footers">
            <div class="no-title">共浏览了五套房源</div>
            <div class="lists" v-for="(item,index) in zjData" :key="index">
              <CollectRoom :item="item" :index="index" style="margin-bottom:20px;" />
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 推荐房源 -->
    <!-- <div class="tj">
      <p class="title">推荐房源</p>
      <div class="lists" v-for="(item,index) in gzData" :key="index">
        <CollectRoom :item="item" :index="index" style="margin-bottom:20px;" />
      </div>
    </div>-->
    <!-- 尾部 -->
    <van-divider :style="{ color: '#515151', borderColor: '#efefef', padding: '0 16px' }">我是有底线的</van-divider>
  </div>
</template>

<script>
import CommHeader from "@/components/CommHeader.vue";
import CollectRoom from "@/components/CollectRoom.vue";
export default {
  name: "Attention",
  data() {
    return {
      title: "关注/足迹",
      active: 0,
      showData: false,
      result: [], // 选中的结果
      showCollect: false,
      //简单模拟关注、足迹数据
      gzData: [
        {
          title: "龙眠大道 天景山公寓花锦苑 主卧 朝南 B室",
          label: ["首月五折"]
        },
        {
          title: "集庆门大街 万达东坊 次卧 朝西 A室",
          label: ["首月五折"]
        }
      ],
      zjData: [
        {
          title: "龙眠大道 天景山公寓花锦苑 主卧 朝南 B室",
          label: ["首月五折", "地铁周边", "独立阳台"]
        },
        {
          title: "集庆门大街 万达东坊 次卧 朝西 A室",
          label: ["首月五折", "地铁周边", "独立阳台"]
        },
        {
          title: "龙眠大道 天景山公寓花锦苑 主卧 朝南 B室",
          label: ["首月五折", "地铁周边", "独立阳台"]
        },
        {
          title: "集庆门大街 万达东坊 次卧 朝西 A室",
          label: ["首月五折", "地铁周边", "独立阳台"]
        }
      ]
    };
  },
  components: {
    CommHeader,
    CollectRoom
  },
  created() {
    //获取路由传递的参数
    this.active = this.$route.params.id;
    // console.log(this.active);
  },
  methods: {
    // 选择的显示和隐藏
    isShow() {
      this.showCollect = !this.showCollect;
    },
    //全选
    checkAll() {
      console.log(this.showCollect);
      this.$refs.checkboxGroup.toggleAll(true);
    },
    //取消
    cancle() {
      if (this.showCollect) {
        this.showCollect = !this.showCollect;
      }
      this.$refs.checkboxGroup.toggleAll(false);
    },
    //删除
    delCollect() {
      this.$dialog
        .confirm({
          message: "确定删除吗？",
          confirmButtonColor: "#54cbcc"
        })
        .then(() => {
          this.$toast({
            message: "删除成功",
            duration: 1500
          });
          this.showCollect = !this.showCollect;
        });
    },
    chooiseOne(e) {
      this.result = e;
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
.van-checkbox__label {
  line-height: 12px;
}
.van-icon {
  margin-left: 7px;
}
.van-tab__pane,
.van-tab__pane-wrapper {
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  // min-height: 74vh;
}
</style>
<style lang="scss" scoped>
.attend {
  .tabs {
    margin-top: 40px;
    .no-data {
      margin-top: 20px;
      .no-title {
        margin-left: 15px;
        font-size: $base-fz-s;
        color: $text-color;
        margin-bottom: 15px;
        font-weight: bold;
      }
      .no {
        img {
          margin-top: 80px;
          margin-bottom: 40px;
          width: 45%;
        }
        .no-btn {
          width: 150px;
          text-align: center;
          font-size: $base-fz-m;
          color: $main-color;
          @include borderAll($r: $main-color);
          height: 40px;
          line-height: 40px;
          border-radius: 20px;
        }
      }
    }
    .collect {
      margin-top: 20px;
      .no-title {
        height: 30px;
        margin-left: 15px;
        font-size: $base-fz-s;
        color: $text-color;
        margin-bottom: 15px;
        font-weight: bold;
        > img {
          width: 20px;
          margin-right: 15px;
        }
      }
      .is-collect {
        height: 30px;
        margin: 0 15px;
        margin-bottom: 15px;
        font-size: $base-fz-s;
        color: $text-color;
        :last-child {
          color: $color3;
        }
      }
      .collect-list {
        margin: 0 10px;
      }
    }
    .footers {
      margin: 20px 10px;
      .no-title {
        margin-left: 15px;
        font-size: $base-fz-s;
        color: $text-color;
        margin-bottom: 15px;
        font-weight: bold;
      }
    }
  }
  .tj {
    margin: 15px;
    > p {
      font-size: $base-fz-l;
      color: $text-color;
      margin-bottom: 15px;
      font-weight: bold;
    }
  }
}
</style>
