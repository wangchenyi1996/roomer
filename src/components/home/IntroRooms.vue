<template>
	<div class="u-f intro">
		<div class="left u-f-item">
            <img :src="roomIntro[0].img" width="100%" class="intro-img">
        </div>
        <div class="right u-f-item">
            <img :src="roomIntro[1].img" width="100%" class="intro-img">
            <img :src="roomIntro[2].img" width="100%" class="intro-img">
        </div>
	</div>
</template>

<script>
	export default {
		name:'IntroRooms',
		props:{
			roomIntro:{
				type:Array,
				defalut:()=>[]
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
  .intro{
      margin-top: 20px;
      .left{
          :first-child{
              height: 125px;
          }
          margin-right: 10px;
          box-sizing: border-box;
      }
      .right{
        :first-child{
          margin-bottom:5px;
          height: 60px;
        }
        :last-child{
          height: 60px;
        }
      }
      .intro-img{
        border-radius: 10px;
      }
  }
	
</style>
