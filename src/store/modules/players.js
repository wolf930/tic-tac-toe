const init = {
  player1: '',
  player2: '',
};

const actions = {
  setPlayers({ commit }, { player1, player2 }) {
    commit('setPlayers', { player1, player2 });
  },
};

const mutations = {
  setPlayers(state, { player1, player2 }) {
    state.player1 = player1;
    state.player2 = player2;
  },
};

export default {
  namespaced: true,
  state: init,
  actions,
  mutations,
};
