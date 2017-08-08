/**
 * Created by sam on 2017/8/8.
 */
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  count:1
}

const mutations={
  add(state){
    state.count++;
  },
  reduce(state){
    state.count--;
  },
  addb(state,num){
    state.count += num;
  },
  reduceb(state,num){
    state.count -= num;
  }
}

// getters 计算属性会在mutations和actions方法中都被调用
const getters = {
  // count:state => state.count += 100
}

const actions ={
  addActions(context){
    context.commit('add');
    setTimeout(()=>{context.commit('reduce')},3000);
    console.log('我比reduce提前执行');
  },
  reduceActions({commit}){
    commit('reduce');
  }
}

export default new Vuex.Store({
  state,mutations,getters,actions
})
