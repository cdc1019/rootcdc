<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            val:''
        }
    },
    methods:{
        ...mapActions('msglist',['saveStrageServer']),
        handleClick(){
            if(!this.val){
                return
            }
            this.saveStrageServer({msg:this.val});
            this.val = '';
        }
    }
}
</script>
<template>
    <div>
        <input type="text" v-model="val" />
        <input type="button" value="发送" @click="handleClick" />
    </div>
    
</template>