import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const getSearchResult = (item, val) =>
  Object.keys(item).some(
    elem =>
      typeof item[elem] === "string" &&
      item[elem].toLowerCase().includes(val.toLowerCase())
  );
export default new Vuex.Store({
  state: {
    list: [],
    maxPages: 0,
    refList: []
  },
  mutations: {
    getDataMutation: function(state) {
      axios.get("https://sheetlabs.com/IND/rv").then(response => {
        state.list = response.data;
        state.refList = response.data;
        state.maxPages = Math.ceil(response.data.length / 10);
      });
    },
    getSearchData: function(state, value) {
      if (value) {
        state.list = [...state.refList];
        state.list = [...state.list].filter(obj => getSearchResult(obj, value));
      } else {
        state.list = [...state.refList];
      }
    }
  },
  actions: {
    getData({ commit }) {
      commit("getDataMutation");
    },
    searchHandle({ commit }, value) {
      console.log(value);
      commit("getSearchData", value);
    }
  }
});
