let state = {
    num:0,
    val:''
}

let getters = {
    showNum(state){
        return state.num * 5;
    }
}

let mutations = {
    addNum(state,payload){
        state.num += payload.setup;
    },
    disNum(state,payload){
        state.num -= payload.setup;
    },
    initMsg(){

    }
}
let actions = {

}


export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}