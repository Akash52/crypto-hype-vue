<template>
  <div>
    <HeaderVue />
    <HomePage />
  </div>
</template>

<script>
import HeaderVue from './components/Header.vue';
import HomePage from './views/HomePage.vue';
export default {
  name: 'App',
  components: {
    HeaderVue,
    HomePage,
  },
};
</script>

<style lang="scss">
@import 'bootstrap';
</style>
