<template>
  <div>
    <Navbar />
    <main>
      <router-view />
      <Cart />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Cart,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
