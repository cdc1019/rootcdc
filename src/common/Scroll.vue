<script>
/*
 * @Author: tao 
 * @Date: 2018-10-09 14:00:02 
 * @Last Modified by: tao
 * @Last Modified time: 2018-10-10 10:04:11
 */
export default {
    data(){
        return {
            offsetY:0,
            bl:0,
            moveH:0,
            scrollBl:0,
            siderH:0
        }
    },
    methods:{
        mousedown(ev){
            this.my = ev.pageY - this.$refs.move.offsetTop;
            document.onmousemove = (ev)=>{
                clearTimeout(this.timer);
                this.timer = setTimeout(()=>{
                    let y = ev.pageY - this.my;
                    let maxTop = this.$refs.progress.offsetHeight - this.moveH;
                    if(y<0){y=0;}
                    if(y>maxTop){
                        y = maxTop;
                    }
                    this.offsetY = y;
                },0)
            }
            document.onmouseup = ()=>{
                document.onmousemove = null;
                document.onmouseup = null;
            }
        },
        computedInit(){
            this.siderH = this.$refs.sider.offsetHeight;
            this.bl = this.$refs.wrap.offsetHeight / this.siderH;
            this.moveH = this.bl * this.$refs.progress.offsetHeight;
            this.scrollBl = (this.$refs.progress.offsetHeight - this.moveH) / (this.siderH - this.$refs.wrap.offsetHeight);
        },
        mouseEnter(){
            window.onmousewheel = this.bl<1?(ev)=>{
                let offsetY = this.offsetY + ev.deltaY / 10;
                let maxTop = this.$refs.progress.offsetHeight - this.moveH;
                if(offsetY < 0){
                    offsetY = 0;
                }
                if(offsetY > maxTop){
                    offsetY = maxTop;
                }

                this.offsetY  = offsetY;

            }:null;
        },
        mouseLeave(){
            window.onmousewheel = null;
        }
    },
    computed:{
        siderY(){
            return -this.offsetY / this.scrollBl;
        }
    },
    mounted(){
       window.tt = this;
       this.computedInit();
    }
}
</script>
<template>
    <div class="scroll-wrap" ref="wrap" @mouseenter="mouseEnter" @mouselave="mouseLeave">
        <div :style="{top:siderY+'px',height:siderH+'px'}" class="scroll-sider" ref="sider">
            <!-- <ul>
                <li v-for="(item,key) in 10" :key="key">{{item}}</li>
            </ul> -->
            <slot></slot>
        </div>
        <div class="scroll-progress" v-show="bl<1" ref="progress">
            <div class="scroll-progress-move" :style="{top:offsetY+'px',height:moveH+'px'}" ref="move" @mousedown="mousedown"></div>
        </div>
    </div>
</template>

<style scoped>
    .scroll-wrap{
        position:relative; width:160px; top:0px; height:100%; background-color:#ccc;; overflow:hidden; user-select: none;
    }
    .scroll-sider{
        position:absolute; left:0; top:0; right:0; padding:20px;
    }
    .scroll-progress{
        position:absolute; top:0; bottom:0px; right:0; width:5px; background-color:#202123; 
        cursor:pointer;
    }
    .scroll-progress-move{
        position:absolute; left:0; right:0; top:0; height:100px; border-radius:3px; background:rgba(255,255,255,0.5);
    }
</style>


