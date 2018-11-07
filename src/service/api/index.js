/*
 * @Author: tao 
 * @Date: 2018-10-17 09:32:08 
 * @Last Modified by: tao
 * @Last Modified time: 2018-10-17 10:07:30
 */
import axios from 'axios'
let host = ''
export function testApi(){
    return axios.get(host+'/test');
}

/**
 * @param {msg:''}
 * @return {code:1,msg:'成功'}
 * 
 *  */
export function saveMsg(body){
    return axios.post(host+'/saveMsg',body);
}

export function getListApi(){
    return axios.get(host+'/getList');
}