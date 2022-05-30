<template>
  <CryptoListVue :cryptoData="exchangeData" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CryptoListVue from '../components/CryptoList.vue';

export default {
  name: 'Exchanges',
  components: {
    CryptoListVue,
  },
  methods: {
    ...mapActions(['fetchExchangeData']),
  },
  computed: {
    ...mapGetters(['exchangeData']),
  },
  beforeMount() {
    if (this.exchangeData?.length === 0) {
      this.fetchExchangeData();
    }
  },
};
</script>

<style></style>
