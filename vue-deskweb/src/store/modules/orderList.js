/**
 * Created by sam on 2017/5/31.
 */
import Vue from 'vue'
const state = {
  orderList:[],
  params:{}
}

const getters = {
  /* orderList: function (state) {
    return state.orderList
  }*/
  getOrderList: state => state.orderList
}

const actions = {
  fetchOrderList({ commit, state }){
    Vue.http.post('/api/orderList', state.params )
      .then( (res) => {
        commit('changeOrderList', res.data.data.list)
        /*state.orderList = res.data.data.list
        state.total = res.data.data.total*/
      },(err) => {

      })
  }
}

const mutations = {
  changeOrderList(state, payload){
    state.orderList = payload
  },
  updateParams(state, {key, val}){
    state.params[key] = val
    console.log(state.params)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
