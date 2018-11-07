<script>
import {mapState} from 'vuex'

export default {
    computed:{
        ...mapState('msglist',['iNow'])
    }
}
</script>
<template>
<div>
    <h1>当前显示的是第{{iNow === null ? '?' : iNow+1}}条</h1>
    <input type="text" v-model="$store.state.test.val" />
</div>
    
</template>

