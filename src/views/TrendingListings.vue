<template>
  <div>Trending Listings {{ crypto }}</div>
</template>

<script>
import ApiService from '@/services/ApiService.js'

export default {
  name: 'TrendingListings',
  data() {
    return {
      crypto: [],
      loading: true,
    }
  },
  async created() {
    const { data } = await ApiService.getCrypto()
    this.crypto = data.data
    this.loading = false
  },
}
</script>

<style></style>
