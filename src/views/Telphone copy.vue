<template>
  <div class="my-telphone">
    <!-- 头部 可使用插槽-->
    <CommHeader :title="title" style="background:#ffffff;"></CommHeader>
    <!-- 更换手机步骤 -->
    <div class="main-tel">
      <ul class="my-step u-f u-f-asc">
        <!-- <li class="u-f u-f-ajc" :class="active==1?'first':'second'">
          <span class="u-f u-f-ajc">1</span>
          <span>验证身份</span>
        </li>
        <li class="u-f u-f-ajc" :class="active==1?'second':'first'">
          <span class="u-f u-f-ajc">2</span>
          <span>验证新手机</span>
        </li> -->
         <li class="u-f u-f-ajc" v-for="item in stepArr" :key="item.id" :class="active==item.id?'first':'second'" >
          <span class="u-f u-f-ajc">{{item.id}}</span>
          <span>{{item.name}}</span>
        </li>
      </ul>
      <button @click="nextStep">下一步</button>
    </div>
  </div>
</template>

<script>
import CommHeader from "@/components/CommHeader.vue";
export default {
  name: "Telphone",
  data() {
    return {
      title: "更换手机号",
      stepArr: [{ id: 1, name: "验证身份" }, { id: 2, name: "验证新手机" }],
      active: 1
    };
  },
  components: {
    CommHeader
  },
  methods: {
    //下一步
    nextStep() {
        this.active++
        if(this.active>this.stepArr.length){
            this.active=1
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.main-tel {
  margin-top: 70px;
  .my-step {
    height: 40px;
    li {
      span:first-child {
        font-size: $base-fz-m;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        margin-right: 7px;
      }
      span:last-child {
        font-size: $base-fz-m;
        font-weight: bold;
      }
    }
    .first {
      span:first-child {
        background-color: $main-color;
        color: #ffffff;
      }
      span:last-child {
        color: $main-color;
      }
    }
    .second {
      span:first-child {
        background-color: $littlesc;
        color: #ffffff;
      }
      span:last-child {
        color: $littlesc;
      }
    }
  }
}
</style>
