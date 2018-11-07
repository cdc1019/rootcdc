<script>
export default {
    data(){
        return {
            msg:'首页'
        }
    },
    mounted(){
        window.home = this;
    }
}
</script>
<template>
    <div>
        <h1>
            {{msg}}
        </h1>
        <p>{{$store.state.num}}</p>
        <p>{{$store.getters.showNum}}</p>
        <button @click="$store.commit({type:'addNum',setup:100})">增加</button>
    </div>
    
</template>

