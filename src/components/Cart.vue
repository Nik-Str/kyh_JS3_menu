<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasCart">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Cart</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="d-flex justify-content-between m-0">
        <p class="fw-bold">Product:</p>
        <p class="fw-bold">Price:</p>
        <p class="fw-bold">Amount:</p>
      </div>
      <div v-for="(item, index) in $store.state.cart" :key="index + item.title">
        <div class="d-flex justify-content-between align-items-center m-0 border-bottom mb-3">
          <p class="m-0">{{ item.title }}</p>
          <p class="m-0">{{ item.total }}kr</p>
          <div class="d-flex">
            <button
              type="button"
              class="btn btn-sm btn-outline-dark border-0"
              @click="$store.commit('removeFromCart', item)"
            >
              <i class="bi bi-dash-circle"></i>
            </button>
            <p class="my-auto p-2">{{ item.amount }}</p>

            <button type="button" class="btn btn-outline-dark border-0" @click="$store.commit('addToCart', item)">
              <i class="bi bi-plus-circle"></i>
            </button>
          </div>
        </div>
      </div>
      <p class="text-decoration-underline fw-bold">Total: {{ getTotalt }}kr</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  computed: {
    ...mapGetters(['getTotalt']),
  },
};
</script>

<style lang="scss" scoped>
button {
  font-size: 0.8rem;
}

i {
  font-size: 1.4rem;
}
</style>
