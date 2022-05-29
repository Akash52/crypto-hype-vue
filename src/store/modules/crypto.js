import ApiService from '../../services/ApiService'

const state = {
  crypto: [],
}

const getters = {
  cryptoData: (state) => state.crypto,
}

const actions = {
  async fetchCryptoData({ commit }) {
    const response = await ApiService.getCrypto()
    commit('setCrypto', response.data)
  },
}

const mutations = {
  setCrypto: (state, crypto) => (state.crypto = crypto),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
