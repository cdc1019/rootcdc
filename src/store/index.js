/*
 * @Author: tao 
 * @Date: 2018-10-13 08:51:27 
 * @Last Modified by: tao
 * @Last Modified time: 2018-10-17 10:10:11
 * @func 构建sore实例
 */
import Vue from 'vue'
import Vuex , {Store} from 'vuex'
import logger from 'vuex/dist/logger'
import modules from './modules'
window.vuex = Vuex;
Vue.use(Vuex);
const store = new Store({
    state:{},
    getters:{},
    mutations:{},
    actions:{},
    modules,
    strict:false,
    plugins:[logger()]
});
window.store = store;
export default store;