<template>
    <div>
        <CommHeader :title="city" />
        <!-- 

        属性说明
        属性名	类型	描述
        v-model	Array	必填，数据源，有格式要求，必须遵守
        label	String	需要显示的字段，默认为'name'
        children	String	二级数组的字段名称，默认为‘children’
        relkey	String	索引字段，默认为‘id’

        事件说明
        事件	参数
        click	返回当前点击项的对象

        -->
        <w-sortlist v-model="cityData" @click="select" children="cities" relkey="core" label="name"></w-sortlist>
    </div>
</template>

<script>
    import CommHeader from "@/components/CommHeader.vue"; 
    import {cityData} from '../plugins/city.js'
    import wSortlist from '@/components/CityList.vue'
    import {mapState, mapActions } from "vuex";
    export default {
        name:'City',
        components: {
            wSortlist,
            CommHeader
        },
        computed:{
            ...mapState("ziroom", ["city"])
        },
        data () {
			return {
				cityData: cityData
			}
		},
        mounted(){
            // console.log('tag', cityData)
            console.log('city', this.city)
        },
        methods: {
            ...mapActions("ziroom", ["recordCity"]),
			select (data) {
                this.$toast({
                    message: `选择城市：${data.name}`,
                    duration: 800,
                    onclose:()=>{
                        this.$router.back()
                    }
                });
                this.recordCity(data.name)
			} 
		},

    }
</script>
