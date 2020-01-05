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
              >
                <van-checkbox
                  name="a"
                  style="background:#f9f9f9;margin-bottom:20px;border-radius:4px;"
                >
                  <div class="lists">
                    <p class="p1">龙眠大道 天景山公寓花锦苑 主卧 朝南 B室</p>
                    <div class="room-item u-f">
                      <img
                        src="http://lc-00shgioj.cn-n1.lcfile.com/b21aa716b308d307b501/1.jpg"
                        class="room-left"
                      />
                      <div class="room-right">
                        <p class="p2">合租 | 三室一厅 12m² 10/30层</p>
                        <p class="p3">距离1号线1000米</p>
                        <ul class="u-f p4">
                          <li>首月租金五折</li>
                        </ul>
                        <div class="p5 u-f u-f-sbc">
                          <div>
                            <span>￥</span>
                            <span>680</span>
                            <span>/首月</span>
                            <span>990</span>
                          </div>
                          <div class="yk" @click.stop="looks">约看</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </van-checkbox>
                <van-checkbox
                  name="b"
                  style="background:#f9f9f9;margin-bottom:20px;border-radius:4px;"
                >
                  <div class="lists">
                    <p class="p1">集庆门大街 万达东坊 次卧 朝西 A室</p>
                    <div class="room-item u-f">
                      <img
                        src="http://lc-00shgioj.cn-n1.lcfile.com/b21aa716b308d307b501/1.jpg"
                        class="room-left"
                      />
                      <div class="room-right">
                        <p class="p2">合租 | 三室一厅 12m² 10/20层</p>
                        <p class="p3">距离2号线1000米</p>
                        <ul class="u-f p4">
                          <li>首月租金五折</li>
                        </ul>
                        <div class="p5 u-f u-f-sbc">
                          <div>
                            <span>￥</span>
                            <span>680</span>
                            <span>/首月</span>
                            <span>990</span>
                          </div>
                          <div class="yk" @click.stop="looks">约看</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </van-checkbox>
              </van-checkbox-group>

              <div class="is-c" v-show="!showCollect">
                <div class="lists" v-for="i in 2" style="margin-bottom:20px;">
                  <p class="p1">集庆门大街 万达东坊 次卧 朝西 A室</p>
                  <div class="room-item u-f">
                    <img
                      src="http://lc-00shgioj.cn-n1.lcfile.com/b21aa716b308d307b501/1.jpg"
                      class="room-left"
                    />
                    <div class="room-right">
                      <p class="p2">合租 | 三室一厅 12m² 10/20层</p>
                      <p class="p3">距离2号线1000米</p>
                      <ul class="u-f p4">
                        <li>首月租金五折</li>
                      </ul>
                      <div class="p5 u-f u-f-sbc">
                        <div>
                          <span>￥</span>
                          <span>680</span>
                          <span>/首月</span>
                          <span>990</span>
                        </div>
                        <div class="yk" @click.stop="looks">约看</div>
                      </div>
                    </div>
                  </div>
                </div>
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
            <div class="lists" v-for="i in 5" :key="i" @click="goDetail(i)">
              <p class="p1">龙眠大道 天景山公寓花锦苑 主卧 朝南 B室</p>
              <div class="room-item u-f">
                <img
                  src="http://lc-00shgioj.cn-n1.lcfile.com/b21aa716b308d307b501/1.jpg"
                  class="room-left"
                />
                <div class="room-right">
                  <p class="p2">合租 | 三室一厅 12m² 10/30层</p>
                  <p class="p3">距离1号线1000米</p>
                  <ul class="u-f p4">
                    <li>首月减半</li>
                    <li>独立阳台</li>
                    <li>地铁周边</li>
                  </ul>
                  <div class="p5 u-f u-f-sbc">
                    <div>
                      <span>￥</span>
                      <span>680</span>
                      <span>/首月</span>
                      <span>990</span>
                    </div>
                    <div class="yk" @click.stop="looks">约看</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import CommHeader from "@/components/CommHeader.vue";
export default {
  name: "Attention",
  data() {
    return {
      title: "关注/足迹",
      active: 0,
      showData: false,
      result: [], // 选中的结果
      showCollect: false
    };
  },
  components: {
    CommHeader
  },
  created() {
    //获取路由传递的参数
    this.active = this.$route.params.id;
    // console.log(this.active);
  },
  methods: {
    //点击约看
    looks() {
      this.$toast({
        message: "点击约看",
        duration: 1500
      });
    },
    //点击详情
    goDetail(id) {
      this.$router.push({
        name: "Detail",
        params: {
          id: id
        }
      });
    },
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
        });
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
        .lists {
          width: 95%;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 10px;
          padding-right: 10px;
          background-color: #f9f9f9;
          // border-radius: 4px;
          .p1 {
            font-size: $base-fz-s;
            color: $text-color;
            font-weight: bold;
            margin-bottom: 8px;
            padding: 3px 0;
            @extend %ellipsis;
          }
          .room-item {
            .room-left {
              width: 37%;
              height: 35%;
              margin-right: 10px;
              border-radius: 4px;
            }
            .room-right {
              width: 60%;
              .p1 {
                font-size: $base-fz-m;
                font-weight: bold;
                color: $big-color;
                margin-bottom: 7px;
                @extend %ellipsis;
              }
              .p2,
              .p3 {
                font-size: $base-fz;
                color: #999;
                margin-bottom: 7px;
                padding-bottom: 1px;
                @extend %ellipsis;
              }
              .p4 {
                margin-bottom: 10px;
                li {
                  padding: 3px 5px;
                  border-radius: 4px;
                }
                :nth-child(2n + 1) {
                  color: $color3;
                  background-color: #fff1ee;
                  margin-right: 7px;
                }
                :nth-child(2n) {
                  color: $littlesc;
                  background-color: #ffffff;
                  @include borderAll($r: $tabColor);
                  margin-right: 7px;
                }
              }
              .p5 {
                span:nth-child(1) {
                  font-size: $base-fz;
                  color: $color3;
                }
                span:nth-child(2) {
                  font-size: $base-fz-m;
                  font-weight: bold;
                  color: $color3;
                }
                span:nth-child(3) {
                  font-size: $base-fz;
                  color: $littlesc;
                }
                span:nth-child(4) {
                  font-size: $base-fz;
                  color: $littlesc;
                  text-decoration: line-through;
                }
                .yk {
                  font-size: $base-fz-s;
                  color: #fff;
                  background-color: $main-color;
                  padding: 5px 10px;
                  border-radius: 20px;
                }
              }
            }
          }
        }
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
      .lists {
        padding-top: 20px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        background-color: #f9f9f9;
        margin-bottom: 20px;
        border-radius: 4px;
        .p1 {
          font-size: $base-fz-s;
          color: $text-color;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .room-item {
          .room-left {
            width: 37%;
            height: 35%;
            margin-right: 10px;
            border-radius: 4px;
          }
          .room-right {
            width: 60%;
            .p1 {
              font-size: $base-fz-m;
              font-weight: bold;
              color: $big-color;
              margin-bottom: 7px;
              @extend %ellipsis;
            }
            .p2,
            .p3 {
              font-size: $base-fz;
              color: #999;
              margin-bottom: 7px;
              padding-bottom: 1px;
              @extend %ellipsis;
            }
            .p4 {
              margin-bottom: 10px;
              li {
                padding: 3px 5px;
                border-radius: 4px;
              }
              :nth-child(2n + 1) {
                color: $color3;
                background-color: #fff1ee;
                margin-right: 7px;
              }
              :nth-child(2n) {
                color: $littlesc;
                background-color: #ffffff;
                @include borderAll($r: $tabColor);
                margin-right: 7px;
              }
            }
            .p5 {
              span:nth-child(1) {
                font-size: $base-fz;
                color: $color3;
              }
              span:nth-child(2) {
                font-size: $base-fz-m;
                font-weight: bold;
                color: $color3;
              }
              span:nth-child(3) {
                font-size: $base-fz;
                color: $littlesc;
              }
              span:nth-child(4) {
                font-size: $base-fz;
                color: $littlesc;
                text-decoration: line-through;
              }
              .yk {
                font-size: $base-fz-s;
                color: #fff;
                background-color: $main-color;
                padding: 10px 30px;
                border-radius: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
