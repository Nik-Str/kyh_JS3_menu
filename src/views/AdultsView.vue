<template>
  <div class="bg">
    <Menu :menu="$store.state.isShowing" />
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';

export default {
  name: 'AdultsView',
  components: {
    Menu,
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
  height: 100vh;
}
</style>
