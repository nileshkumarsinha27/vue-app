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

const getUniqueValues = arr =>
  arr.filter((thing, index) => {
    return (
      index ===
      arr.findIndex(obj => {
        return JSON.stringify(obj) === JSON.stringify(thing);
      })
    );
  });
export default new Vuex.Store({
  state: {
    list: [],
    maxPages: 0,
    refList: [],
    refMaxPages: 0,
    tempList: []
  },
  mutations: {
    getDataMutation: function(state) {
      axios.get("https://sheetlabs.com/IND/rv").then(response => {
        state.list = getUniqueValues(response.data);
        state.refList = getUniqueValues(response.data);
        state.maxPages = Math.ceil(state.list.length / 10);
        state.refMaxPages = Math.ceil(state.list.length / 10);
      });
    },
    getSearchData: function(state, value) {
      if (value) {
        state.list = [...state.refList];
        state.list = [...state.list].filter(obj => getSearchResult(obj, value));
        state.tempList = [...state.list];
      } else {
        state.list = [...state.refList];
      }
      state.maxPages = Math.ceil(state.list.length / 10);
    },
    createPaginationArrays: function(state, page) {
      state.list = [...state.tempList].slice(page * 10, page * 10 + 10);
    }
  },
  actions: {
    getData({ commit }) {
      commit("getDataMutation");
    },
    searchHandle({ commit }, value) {
      commit("getSearchData", value);
    },
    paginateList({ commit }, page) {
      commit("createPaginationArrays", page);
    }
  }
});
