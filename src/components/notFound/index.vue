<!--
 * @Description: 404页面优化
 * @Version: 1.0
 * @Autor: 王强
 * @Date: 2020-05-18 09:00:21
 * @LastEditors: 王强
 * @LastEditTime: 2020-05-18 09:37:55
--> 
<template>
    <div class="not-found">
        <img src="../../assets/imgs/404.png" alt="404 notfound page" >
        <div class="not-cont">
            <span class="not-text" @click="back">返回上一页</span>
            <span class="not-text" @click="backHome">返回首页</span>
        </div>
        <p>请稍等，{{ times }}s后返回首页面</p>
    </div>
</template>

<script>
    export default {
        props: {
            times: {
                type: Number,
                default: 3
            }
        },
        data() {
            return {
                intervalId: null
            }
        },
        mounted() {
            this.autoTime()
        },
        methods: {
            back(){
                this.$router.back()
            },
            backHome() {
                this.$router.push('/home')
            },
            autoTime(){
                if(this.intervalId){
					clearInterval(this.intervalId)
				}
				if (this.times>0) {
					// 启动倒计时
					this.intervalId = setInterval(() => {
						this.times--
						if (this.times <= 0) {
							// 停止计时
                            clearInterval(this.intervalId)
                            this.backHome()
						}
					}, 1000)
				}
            }
        },
    }
</script>

<style lang="scss" scoped>
.not-found{
    position: relative;
    overflow: hidden;
    .not-cont{
        position: absolute;
        bottom: 30%;
        left: 50%;
        transform: translateX(-50%);
        .not-text{
            color: orangered;
            font-size: 15px;
        }
        .not-text:first-child{
            margin-right: 30px;
        }
    }
    p{
        position: absolute;
        bottom: 40%;
        left: 50%;
        transform: translateX(-50%);
        color: #556677;
        font-size: 15px;
    }
}
</style>