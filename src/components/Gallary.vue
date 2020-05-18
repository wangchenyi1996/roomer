<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item in imgs" :key="item.id">
          <img class="gallary-img" :src="item.img" />
          <!-- <div style="color:#fff;text-align:center;;font-size:16px;margin-top:20px">{{item.id}} / {{imgs.length}}</div> -->
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        // pagination: ".swiper-pagination",
        // paginationType: "fraction",
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    handleGallaryClick() {
      this.$emit("close");
    }
  }
};
</script>
<style>
.swiper-container{
  padding-bottom: 30px;
}
.swiper-pagination{
  color: #fff !important;
  font-size:20px;
  position: relative;
  top: 15px;
}
</style>
<style lang="scss" scoped>
.container >>> .swiper-container {
  overflow: inherit;
} 


.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  .wrapper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    .gallary-img {
      width: 100%;
      // .swiper-pagination {
      //   color: #fff;
      //   position: relative;
      //   top:20px;
      //   font-size:20px;
      // }
    }
  }
}
</style>
