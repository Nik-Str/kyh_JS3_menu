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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.bg {
  background-image: url('../assets/BG_couple.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Montserrat', sans-serif !important;
}
</style>
