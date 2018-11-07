<script>
import Input from './Input'
import List from './List'
import ShowIndex from './ShowIndex'
import {testApi} from '../../service/api'
export default {
    components:{Input,List,ShowIndex},
    mounted(){
        testApi().then((response)=>{
            console.log(response);
        })
    }
}
</script>
<template>
    <div>
        <Input />
        <List />
        <show-index />
    </div>
</template>

