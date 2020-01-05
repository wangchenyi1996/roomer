<template>
	<ul class="intro-list u-f u-f-sbc animated zoomIn">
		<li class="intro-item u-f u-f-sbc" v-for="(item) in intro" :key="item.id">
			<img :src="item.img" width="16" height="16"><span>{{item.text}}</span>
		</li>
	</ul>
</template>

<script>
	export default {
		name:'Intro',
		props:{
			intro:{
				type:Array,
				defalut:()=>[]
			}
		}
	}
</script>

<style lang="scss" scoped>
.intro-list{
  margin-top: 10px;
  .intro-item{
	span{
		transform:scale(.8);
		display: inline-block;
		margin-left: -5px;
	}
  }
}
</style>
