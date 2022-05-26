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
