<template>
  <div>
    <!-- <div v-if="cryptoLoading">Crypto Loading</div>
    <div v-else>Crypto : {{ cryptoData }}</div> -->
    <CryptoListVue :cryptoData="cryptoData" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CryptoListVue from '../components/CryptoList.vue';

export default {
  name: 'TrendingListings',
  components: {
    CryptoListVue,
  },
  data() {
    return {
      crypto: [],
      loading: true,
    };
  },
  methods: {
    ...mapActions(['fetchCryptoData']),
  },
  computed: {
    ...mapGetters(['cryptoData', 'cryptoLoading']),
  },
  beforeMount() {
    if (this.cryptoData?.length === 0) {
      this.fetchCryptoData();
    } else {
      this.crypto = this.cryptoData;
      this.loading = false;
    }
  },
};
</script>

<style></style>
