<template>
  <header>
    <div class="container navbar navbar-expand-lg bg-light navbar-light m-0 py-0 px-3 shadow">
      <router-link class="navbar-brand" to="/"><img src="../assets/logo.png" alt="Logo" /></router-link>
      <button
        class="navbar-toggler bg-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="nav_links collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav">
          <router-link class="link nav-item" to="/children">Barnmeny</router-link>
          <router-link class="link nav-item" to="/adults">Vuxenmeny</router-link>
          <router-link class="link nav-item" to="/couple">Par-meny</router-link>
          <li class="nav-item my-auto cart-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart">
            <i v-if="getTotalt === 0" class="bi bi-cart fw-bold"></i>
            <i v-if="getTotalt !== 0" class="bi bi-cart-fill"></i>
            {{ getTotalt }}kr
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters(['getTotalt']),
  },
};
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  margin-top: 30px;
  min-width: 100% !important;
  background-color: rgba(250, 250, 250, 0.3);
}

.nav_links {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item {
  color: grey;
}

.link {
  margin: 20px;
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.5s ease;
}
.link:hover {
  color: #4ffbdf;
}

img {
  height: 3rem;
  width: 3rem;
}

.cart-link {
  transition: 0.8s;
}

.cart-link:hover {
  cursor: pointer;
}

i {
  font-size: 1.4rem;
  font-weight: bolder !important;
}
</style>
