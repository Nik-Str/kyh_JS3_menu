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
  name: 'CoupleView',
  components: {
    Menu,
    Filter,
  },
  mounted() {
    this.$store.commit('setIsShowing', 'Couple');
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url('../assets/BG_couple.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
