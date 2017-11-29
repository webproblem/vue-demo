import Vue from 'vue'
import Vuex from 'vuex'
import {examList} from '../data/examData1'
import mutations from './mutation'

Vue.use(Vuex)

const state = {
    //当前题目索引
    currendIndex: 0,
    //题目列表
    examList: examList,
    //保存的答案
    saveAnswer: [],
    //考试时长
    time: 30,
    //花费的时间
    useTime: ''
};


export default new Vuex.Store({
	state,
    mutations
})