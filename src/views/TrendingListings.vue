<template>
  <div>Trending Listings {{ cryptoData }}</div>
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
    ...mapGetters(['cryptoData']),
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
