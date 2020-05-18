<template>
  <div class="room-guide">
    <p class="guide">入住指南</p>
    <img src="../../assets/imgs/login/rzzn.jpg" width="100%" />
  </div>
</template>

<script>
export default {
  name: "Guide",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.room-guide {
  background-color: #f9f9f9;
  padding: 15px 10px;
  border-radius: 8px;
  .guide {
    font-size: $base-fz-m;
    color: $big-color;
    font-weight: bold;
    margin-bottom: 15px;
  }
  > img {
    border-radius: 4px;
  }
}
</style>
