<script>
import Scroll from '../../common/Scroll'
import navData from './navData'
import Collipse from '../../common/Collipse'
export default {
    components:{Scroll,Collipse},
    data(){
        return {
            cllipseH:[]    
        }
    },
    props:{
        navData:{
            type:Array,
            default:()=>navData
        }
    },
    methods:{
        showWrapHWatch(ch){
            // console.log('collipse的高度是'+ch[1]+',索引是'+ch[0]);
            let index = this.cllipseH.findIndex(item=>item[0]===ch[[0]]);
            if(index===-1){
                this.cllipseH.push(ch);
            }else{
                this.cllipseH[index] = ch;
            }
        }
    },
    mounted(){
        window.cool = this;
    }
}
</script>
<template>
    <div class="nav">
        <Scroll>
            <Collipse :index="key" v-for="(item,key) in navData" :key="key" @showWrapHWatch="showWrapHWatch">
                <h3 slot="head">
                    <router-link :to="item.path">{{item.navText}}</router-link>
                </h3>
                <ul v-if="item.subNav?true:false" ref="navContent">
                    <li v-for="(value,index) in item.subNav" :key="index">
                        <router-link :to="value.path">{{value.subNavText}}</router-link>
                    </li>
                </ul>
            </Collipse>
        </Scroll>
    </div>
    
</template>
<style scoped>
    .nav{
        height:500px; margin-top:100px;
    }
</style>


