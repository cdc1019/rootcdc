<script>
import {createNamespacedHelpers} from 'vuex'
let {mapState,mapMutations, mapActions} = createNamespacedHelpers('msglist');
export default {
    data(){
        return {}
    },
    computed:{
        ...mapState(['msgList','iNow'])
    },
    methods:{
        ...mapMutations(['updateInow']),
        ...mapActions(['getList']),
        liClick(index){
            this.updateInow({index});
        }
    },
    mounted(){
        this.getList();
    }
}
</script>

<template>
    <ul>
        <li :style="{color:iNow === key?'red':'#333'}" @click="liClick(key)" v-for="(item,key) in msgList" :key="key">{{item}}</li>
    </ul>
</template>