<template>
  <div class="intro1">
    <p class="title">{{info.title}}</p>
    <p class="title2">{{info.entitle}}</p>
  </div>
</template>

<script>
export default {
  name: "Intro",
  props:{
    info:{
		type:Object,
		defalut:()=>{}
	}
  }
};
</script>

<style lang="scss" scoped>
.intro1 {
  position: relative;
  margin-bottom: 40px;
  &:after {
    position: absolute;
    bottom: -6px;
    left: 47%;
    content: " ";
    display: block;
    width: 6%;
    height: 2px;
    border-radius: 50px;
    background: #3dbdc7;
  }
  .title {
    text-align: center;
    font-size: $base-fz-m;
    color: #7e7d7e;
    font-weight: bold;
    margin-bottom: 7px;
  }
  .title2 {
    text-align: center;
    font-size: $base-fz-s;
    color: $color-info;
    opacity: 0.32;
    letter-spacing: 2px;
  }
}
</style>
