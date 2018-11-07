import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config'
Vue.use(VueRouter)
window.VueRouter = VueRouter;
const router = new VueRouter({
    routes
});
window.router = router;
export default router;
