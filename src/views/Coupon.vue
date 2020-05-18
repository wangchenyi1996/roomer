<template>
  <div class="my-coupon">
    <!-- 头部 可使用插槽-->
    <CommHeader :title="title" style="background:#ffffff;">
      <div slot="right">
        <span
          style="position:absolute;right:10px;top:0px;font-size:14px;color:#999"
          @click="useHelp"
        >使用说明</span>
      </div>
    </CommHeader>
    <div class="tab-list">
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
            :style="active==0 ?'font-weight:bold;color:#54cbcc;':'color:#999;font-weight:bold;'"
          >未使用</div>
          <div class="no-use">
            <!-- 公共的搜索 -->
            <CouponHeader />
            <div class="u-f u-f-ajc" v-show="showData">
              <img src="../assets/imgs/login/wu.png" class="no-datas" />
            </div>
            <div class="have-list" v-show="!showData">
              <CouponItem
                v-for="item in noUseArr"
                :key="item.id"
                :item="item"
                @useChange="getUseData"
              />
            </div>
          </div>
        </van-tab>
        <van-tab>
          <div
            slot="title"
            :style="active==1 ?'font-weight:bold;color:#54cbcc;':'color:#999;font-weight:bold;'"
          >已过期</div>
          <div class="have-use">
            <!-- 公共的搜索 -->
            <CouponHeader />
            <div class="u-f u-f-ajc" v-show="showData">
              <img src="../assets/imgs/login/wu.png" class="no-datas" />
            </div>
            <div class="have-list" v-show="!showData">
              <CouponItem v-for="item in useArr" :key="item.id" :item="item" @useChange="getUseData" />
            </div>
          </div>
        </van-tab>
        <van-tab>
          <div
            slot="title"
            :style="active==2 ?'font-weight:bold;color:#54cbcc;':'color:#999;font-weight:bold;'"
          >已使用</div>
          <div class="y-use">
            <!-- 公共的搜索 -->
            <CouponHeader />
            <div class="u-f u-f-ajc" v-show="showData">
              <img src="../assets/imgs/login/wu.png" class="no-datas" />
            </div>
            <div class="have-list" v-show="!showData">
              <CouponItem v-for="item in haveArr" :key="item.id" :item="item" @useChange="getUseData" />
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import CommHeader from "@/components/CommHeader.vue";
import CouponHeader from "@/components/CouponHeader.vue";
import CouponItem from "@/components/CouponItem.vue";
export default {
  name: "Coupon",
  data() {
    return {
      title: "优惠卷",
      active: 0,
      showData: false,
      noUseArr: [
        {
          id: 1,
          title: "小米优品满减劵",
          intro: "满499元减50元",
          price: "￥50",
          timeStr: "2019-10-20 至 2019-12-12",
          type: 1
        },
        {
          id: 2,
          title: "腾讯优品满减劵",
          intro: "满299元减50元",
          price: "￥40",
          timeStr: "2019-10-20 至 2019-12-12",
          type: 1
        },
        {
          id: 3,
          title: "阿里优品满减劵",
          intro: "满399元减50元",
          price: "￥30",
          timeStr: "2019-10-20 至 2019-12-12",
          type: 1
        }
      ],
      useArr: [
        {
          id: 1,
          title: "百度优品满减劵",
          intro: "满499元减50元",
          price: "￥50",
          timeStr: "2019-10-20 至 2019-12-12",
          type: 2
        },
        {
          id: 2,
          title: "抖音优品满减劵",
          intro: "满299元减50元",
          price: "￥40",
          timeStr: "2019-10-20 至 2019-12-12",
          type: 2
        },
        {
          id: 3,
          title: "美团优品满减劵",
          intro: "满399元减50元",
          price: "￥30",
          timeStr: "2019-10-20 至 2019-12-12",
          type: 2
        },
        {
          id: 4,
          title: "拼多多优品满减劵",
          intro: "满199元减50元",
          price: "￥20",
          timeStr: "2019-10-20 至 2019-12-12",
          type: 2
        }
      ],
      haveArr: [
        {
          id: 1,
          title: "百度优品满减劵",
          intro: "满499元减50元",
          price: "￥50",
          timeStr: "2019-10-20 至 2019-12-12",
          type: 3
        },
        {
          id: 2,
          title: "抖音优品满减劵",
          intro: "满299元减50元",
          price: "￥40",
          timeStr: "2019-10-20 至 2019-12-12",
          type: 3
        }
      ]
    };
  },
  components: {
    CommHeader,
    CouponHeader,
    CouponItem
  },
  methods: {
    useHelp() {
      this.$toast({
        message: "点击了使用说明",
        duration: 1500
      });
    },
    //兑换使用
    getUseData(data) {
      this.$toast({
        message: "点击兑换使用",
        duration: 1500
      });
      //   console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.van-tab__pane-wrapper {
  min-height: 80vh;
}

.tab-list {
  margin-top: 60px;
  .no-use {
    .no-datas {
      width: 65%;
      margin-top: 50px;
    }
  }
  .have-list {
    margin: 20px 10px;
  }
}
</style>
