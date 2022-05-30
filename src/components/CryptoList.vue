<template>
  <div class="container">
    <div v-if="cryptoLoading">Loading...</div>
    <div v-else>
      <div v-if="!cryptoLoading && !!cryptoData.length">
        <div>
          <table
            class="table table-hover mt-3 data-table shadow text-center mb-5"
          >
            <thead class="table-primary">
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Market Cap</th>
                <th>Volume (24Hr)</th>
                <th>Change (24Hr)</th>
              </tr>
            </thead>
            <tbody
              class="border-0 text-black-50 tbody-border"
              v-for="crypto in cryptoData"
              :key="crypto.id"
            >
              <tr>
                <td>
                  <small class="text-muted">{{ crypto.name }}</small>
                </td>
                <td>
                  <small class="text-muted">{{ crypto.priceUsd }}</small>
                </td>
                <td>
                  <small class="text-muted">{{ crypto.marketCapUsd }}</small>
                </td>
                <td>
                  <small class="text-muted">{{ crypto.volumeUsd24Hr }}</small>
                </td>
                <td>
                  <small class="text-muted">{{
                    crypto.changePercent24Hr
                  }}</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <div class="alert alert-danger" role="alert">No data found.</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CryptoList',
  props: {
    cryptoData: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['cryptoLoading']),
  },
};
</script>

<style lang="scss">
.data-table {
  border-collapse: collapse;
  border-radius: 10px;
  width: 100%;
}
.tbody-border {
  border-color: #f0f0f0 !important;
  border-style: solid;
  border-width: 1px;
}
</style>
