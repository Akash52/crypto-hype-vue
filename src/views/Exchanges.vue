<template>
  <CryptoListVue
    :cryptoData="exchangeData"
    :tableData="tableData"
    :tableTitle="tableTitle"
  />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CryptoListVue from '../components/CryptoList.vue';
import { CRYPTO_TABLE_DATA, CRYPTO_TABLE_TITLE } from '../constant';

export default {
  name: 'Exchanges',
  components: {
    CryptoListVue,
  },
  data() {
    return {
      tableData: CRYPTO_TABLE_DATA,
      tableTitle: CRYPTO_TABLE_TITLE,
    };
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
