<template>
  <div id="app">
    <router-view />
    <router-view name="a" />
    <router-view name="b" />
  </div>
</template>

<script>
export default {
  components: {
    
  }
}
</script>

<style>
  *{box-sizing:border-box;}
  html,body,ul{padding:0; margin:0;}
  li{list-style:none;}
</style>
