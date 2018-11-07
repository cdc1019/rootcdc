
import {saveMsg,getListApi} from '../../service/api'
let state = {
    msgList:[],
    iNow:null
}

let getters = {
    
}

let mutations = {
    addMsg(state,payLoad){
        state.msgList.push(payLoad.msg);
    },
    updateInow(state,payLoad){
        state.iNow = payLoad.index;
    },
    initMsg(state,payload){
        state.msgList = payload.msgList;
    }
}
let actions = {
    saveStrage(context,payload){// 存本地存储
        let {commit} = context;
        let getMsgList = localStorage.getItem('msgList');
        getMsgList = getMsgList ? JSON.parse(getMsgList) : [];
        getMsgList.push(payload.msg);
        localStorage.setItem('msgList',JSON.stringify(getMsgList));
        commit({type:'addMsg',msg:payload.msg});
    },
    async saveStrageServer({commit},palyload){
        let response = await saveMsg({msg:palyload.msg});
        if(response.data.code === 1){
            commit({type:'addMsg',msg:palyload.msg});
        }else{

        }
        
    },
    async getList({commit},payload){
        let response = await getListApi();
        if(response.data.code === 1){
            commit({type:'initMsg',msgList:response.data.msgList});
        }
        
    }
}


export default {
    state,getters,mutations,actions,namespaced:true
}