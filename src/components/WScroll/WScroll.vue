<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: 王强
 * @Date: 2020-05-13 12:05:47
 * @LastEditors: 王强
 * @LastEditTime: 2020-05-15 14:09:51
--> 
<template>
  <div class="warper" ref="warper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BScoll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      tyle: Boolean,
      default: false
    },
    pullDownRefresh: {
      tyle: Boolean,
      default: true
    },
    refreshDelay:{
        type:Number,
        default:20
    },
  },

  // watch:{
  //     data(){
  //         setTimeout(()=>{
  //             this.refresh();
  //         },this.refreshDelay)
  //     }
  // },

  mounted() {
    // 创建BScroll对象
    // setTimeout(() => {
      this.scroll = new BScroll(this.$refs.warper, {
        click: true,
        probeType: this.probeType, //滚动的监听方式
        pullUpLoad: this.pullUpLoad, //监听下拉加载
        pullDownRefresh: this.pullDownRefresh, //下拉刷新
        mouseWheel: true
      });
      console.log(this.scroll)
      // 监听滚动位置
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", position => {
          this.$emit("scroll", position);
        });
      }

      // 监听是否滚动到底部--上拉加载
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUp");
        });
      }

      //下拉刷新
      if (this.pullDownRefresh) {
        this.scroll.on("pullingDown", () => {
          this.$emit("pullingDown");
        });
      }
    // }, 1000);
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //完成上拉加载
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    //完成下拉刷新
    finishPullDown() {
      this.scroll && this.scroll.finishPullDown();
    },
    refresh() {
      console.log('刷新了')
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll.y;
    }
  }
};
</script>
