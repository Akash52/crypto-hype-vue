import ApiService from '../../services/ApiService'

const state = {
  crypto: [],
  cryptoLoading: true,
}

const getters = {
  cryptoData: (state) => state.crypto,
  cryptoLoading: (state) => state.cryptoLoading,
}

const actions = {
  async fetchCryptoData({ commit }) {
    const response = await ApiService.getCrypto()
    commit('setCrypto', response.data)
    commit('setCryptoLoading', false)
  },
}

const mutations = {
  setCrypto: (state, crypto) => (state.crypto = crypto),
  setCryptoLoading: (state, loading) => (state.cryptoLoading = loading),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
