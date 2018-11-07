<script>
import Aside from './Aside'
export default {
  components:{Aside}
}
</script>

<template>
    <div>
        <Aside />
        <div class="content">
            <Header />
            <router-view></router-view>
        </div>
        
    </div>
</template>

