/**
 * Created by sam on 2017/5/31.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import orderList from './modules/orderList.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    orderList
  }
})
