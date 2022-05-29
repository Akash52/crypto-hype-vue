<template>
  <div>
    <div v-if="cryptoLoading">Crypto Loading</div>
    <div v-else>Crypto : {{ cryptoData }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TrendingListings',
  data() {
    return {
      crypto: [],
      loading: true,
    }
  },
  methods: {
    ...mapActions(['fetchCryptoData']),
  },
  computed: {
    ...mapGetters(['cryptoData', 'cryptoLoading']),
  },
  beforeMount() {
    if (this.cryptoData?.length === 0) {
      this.fetchCryptoData()
    } else {
      this.crypto = this.cryptoData
      this.loading = false
    }
  },
}
</script>

<style></style>
