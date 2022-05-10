<template>
  <div class="bg">
    <Filter />
    <Menu />
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';
import Filter from '../components/Filter.vue';

export default {
  name: 'AdultsView',
  components: {
    Menu,
    Filter,
  },
  mounted() {
    this.$store.commit('setIsShowing', 'Adults');
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url('../assets/BG_adults.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
