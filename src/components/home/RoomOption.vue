<template>
	<ul class="room-opt u-f u-f-asc">
		<li class="room u-f-c u-f-ajc" v-for="item in roomOption" :key="item.id">
			<!-- <img src="../../assets/imgs/home/yz.png"  width="40" height="40" style="margin-bottom:5px;"> -->
			<img :src="item.img"  width="40" height="40" style="margin-bottom:5px;">
			<span>{{ item.text }}</span>
		</li>
	</ul>
</template>

<script>
	export default {
		name:'RoomOption',
		props:{
			roomOption:{
				type:Array,
				defalut:()=>[]
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.room-opt{
		margin-top: 25px;
		.room{
			>span{
				color: $littlesc;
			}
		}
	}
</style>
