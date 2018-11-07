<script>
export default {
    methods:{
        headClick(){
            this.collipse.isShow = !this.collipse.isShow;
            this.$emit('handleCollipse',this.collipse.isShow);
            this.$nextTick(()=>{
                this.$emit('showWrapHWatch',[this.index,this.getWrapHWatch()]);
            });
            
        },
        getWrapHWatch(){//实时获取元素的高度
            return this.$refs.cllipasWrap.offsetHeight;
        }
    },
    props:{
        collipse:{
            type:Object,
            default(){
                return {
                    isShow:false
                }
            }
        },
        index:{
            type:Number
        }
    },
    mounted(){
       this.$emit('showWrapHWatch',[this.index,this.getWrapHWatch()]);
    }
}
</script>
<template>
    <div class="collipse-wrap" ref="cllipasWrap">
        <div class="collipse-head" @click="headClick">
            <slot name="head"></slot>
        </div>
        <div class="collipse-body" v-show="collipse.isShow">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>

</style>


