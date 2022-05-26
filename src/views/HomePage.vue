<template>
  <div class="container">
    <div class="row mt-5 p-5 wrapper-row align-items-center">
      <div class="col-6">
        <h2 class="text-center mb-5">
          Keep up with the crypto hype by searching for your favorite coins!
        </h2>
        <form @submit.prevent="onSubmit" novalidate>
          <div class="form-group postion-relative">
            <input
              type="text"
              class="form-control rounded-pill shadow-lg"
              placeholder="Search for a coin"
              name="searchTerm"
              v-model="searchTerm"
            />
            <i class="fas fa-search search-icon position-absolute"></i>
          </div>
        </form>
      </div>
      <div class="col-6">
        <img src="../assets/img/landing-right-bg.png" class="img-fluid" />
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-4">
        <div class="card border-0 text-center">
          <div class="card-body">
            <img
              src="../assets/img/trending.png"
              class="img-fluid"
              alt="bitcoin"
            />
            <h3 class="card-title mt-3">Bitcoin</h3>
            <p class="card-text">Get the latest price and news for Bitcoin.</p>
            <a href="#" class="btn btn-dark"> Trending Listings </a>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card border-0 text-center">
          <div class="card-body">
            <img
              src="../assets/img/exchanges.png"
              class="img-fluid"
              alt="bitcoin"
            />
            <h3 class="card-title mt-3">Bitcoin Exchanges</h3>
            <p class="card-text">
              Get the latest price and news for Bitcoin Exchanges.
            </p>
            <a href="#" class="btn btn-dark"> Exchanges </a>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card border-0 text-center">
          <div class="card-body">
            <img
              src="../assets/img/portfolio.png"
              class="img-fluid"
              alt="bitcoin"
            />
            <h3 class="card-title mt-3">Bitcoin Portfolio</h3>
            <p class="card-text">
              Get the latest price and news for your portfolio.
            </p>
            <a href="#" class="btn btn-dark"> Portfolio </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    onSubmit() {
      console.log('Searching for: ', this.searchTerm);
    },
  },
};
//   methods: {
//     onSubmit() {
//       this.$router.push({
//         name: 'Search',
//         params: {
//           searchTerm: this.searchTerm,
//         },
//       });
//     },
//   },
</script>

<style lang="scss" scoped>
@import './HomePage.scss';
</style>
