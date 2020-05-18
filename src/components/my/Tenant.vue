<template>
  <div>
    <div class="room-service">
      <p class="service">租客特权</p>
      <div class="u-f">
        <img src="../../assets/imgs/login/s1.jpg" width="33%" height="33%" />
        <img src="../../assets/imgs/login/s2.jpg" width="33%" height="33%" />
        <img src="../../assets/imgs/login/s3.jpg" width="33%" height="33%" />
      </div>
    </div>
    <div class="end">—— 让租房变得简单和快乐 ——</div>
  </div>
</template>

<script>
export default {
  name: "Tenant",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.room-service {
  margin-top: 20px;
  background-color: #ffffff;
  padding: 15px 10px;
  border-radius: 8px;
  .service {
    font-size: $base-fz-m;
    color: $big-color;
    font-weight: bold;
    margin-bottom: 15px;
  }
  img {
    border-radius: 4px;
    margin-right: 7px;
  }
}
.end {
  margin-top: 20px;
  text-align: center;
  font-size: $base-fz;
  color: $littlesc;
}
</style>
