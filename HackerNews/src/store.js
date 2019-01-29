
import Vue from 'vue';
import Vuex from 'vuex';
import { state } from './store/state';
import * as mutations from './store/mutations';
import * as actions from './store/actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters: {
    postsReady: state => state.postsReady,
    ComentsBox: state => state.ComentsBox,
  },
  mutations,
  actions,

});
