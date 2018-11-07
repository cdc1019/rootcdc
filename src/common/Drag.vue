
<script>
/*
 * @Author: tao 
 * @Date: 2018-10-10 08:08:06 
 * @Last Modified by:   tao 
 * @Last Modified time: 2018-10-10 08:08:06 
 */
function mousemove (ev){
    console.log(this);
    let x = ev.clientX - this.mx;
    let y = ev.clientY - this.my;
    this.positionLT.left = x;
    this.positionLT.top = y;
}
function mouseup(){
     document.removeEventListener('mousemove',this.bindMousemove,false);
     document.removeEventListener('mouseup',this.bindMouseup,false);
}
export default {
    created(){
        this.bindMousemove = mousemove.bind(this);
        this.bindMouseup = mouseup.bind(this);
    },
    methods:{
        mousedown(ev){
            this.mx = ev.clientX;
            this.my = ev.clientY;
            document.addEventListener('mousemove',this.bindMousemove,false);
            document.addEventListener('mouseup',this.bindMouseup,false);
        }
    },
    data(){
        return {
            positionLT:this.positionReceive 
        }
    },
    props:{
        positionReceive:{
            type:Object,
            default:function(){
                return {left:0,top:0}
            }
        }
    }
}
</script>
<template>
    <div :style="{left:positionLT.left+'px',top:positionLT.top+'px'}" class="dragbox" @mousedown="mousedown">
        <slot></slot>
    </div>
</template>
<style scoped>
    .dragbox{
        cursor:pointer; position:absolute; left:0; top:0; padding:10px;
    }
</style>


