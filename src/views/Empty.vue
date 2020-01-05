<template>
  <div></div>
</template>

<script>
export default {
  name: "Empty",
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$router.replace(from.path);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
