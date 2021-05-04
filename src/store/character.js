import axios from "axios";

export default {
  state: {
    characters: [],
    sortField: null,
    sortOrder: "asc",
    page: {
      current: 1,
      length: 4,
    },
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setSortField(state, payload) {
      state.sortField = payload;
    },
    setSortOrder(state, payload) {
      if (payload === state.sortField) {
        state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
      }
    },
    setPrevPage(state) {
      state.page.current -= 1;
    },
    setNextPage(state) {
      state.page.current += 1;
    },
  },
  actions: {
    fetchCharacters({ commit, state }) {
      axios.get("https://rickandmortyapi.com/api/character").then((res) => {
        let data = res.data.results;
        commit("setCharacters", data);
      });
    },
    sortCharacters({ commit, state }, payload) {
      commit("setSortField", payload);
      state.characters.sort((a, b) => {
        let mod = 1;
        if (state.sortOrder === "desc") mod = -1;
        if (a[state.sortField] < b[state.sortField]) {
          commit("setCharacters", state.characters);
          return -1 * mod;
        }
        if (a[state.sortField] > b[state.sortField]) {
          commit("setCharacters", state.characters);
          return 1 * mod;
        }
        return 0;
      });
    },
    sortOrderCharacters({ commit }, payload) {
      commit("setSortOrder", payload);
    },
    prevPage({ commit, state }) {
      if (state.page.current > 1) commit("setPrevPage");
    },
    nextPage({ commit, state }) {
      if (state.page.current * state.page.length < state.characters.length)
        commit("setNextPage");
    },
  },
  getters: {
    getCharacters(state) {
      return state.characters.filter((item, index) => {
        let start = (state.page.current - 1) * state.page.length;
        let end = state.page.current * state.page.length;
        if (index >= start && index < end) return true;
      });
    },
    getCharactersID: (state) => (id) => {
      return state.characters.find((item) => item.id === id);
    },
    getPageCurrent(state) {
      return state.page.current;
    },
    getPageLength(state) {
      return state.page.length;
    },
  },
};
