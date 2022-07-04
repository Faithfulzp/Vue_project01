// 引入vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex';
//应用Vuex插件
Vue.use(Vuex);
// 准备actions-用于响应组件中的动作
const actions = {
    addWait(context, value) {
        setTimeout(() => {
            context.commit('ADDWAIT',value);
        },500)
    },
    addOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('ADDODD',value);
        }
    }
}
// 准备mutations-用于操作数据（state）
const mutations = {
    ADD(state,value) {
        state.sum += value;
    },
    SUB(state,value) {
        state.sum -= value;
    },
    ADDWAIT(state, value) {
        state.sum += value;
    },
    ADDODD(state, value) {
        state.sum += value;
    },
}
// 准备state-用于存储数据
const state = {
    sum: 0,
}
// 准备getters-用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})