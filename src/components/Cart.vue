<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasCart">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Cart</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div v-for="(item, index) in $store.state.cart" :key="index + item.title">
        <div class="d-flex justify-content-between m-0">
          <p>{{ item.title }}</p>
          <div class="d-flex">
            <button
              type="button"
              class="btn btn-outline-dark rounded-circle"
              @click="$store.commit('removeFromCart', item)"
            >
              -
            </button>
            <p class="my-auto p-2">{{ item.amount }}</p>

            <button type="button" class="btn btn-outline-dark rounded-circle" @click="$store.commit('addToCart', item)">
              +
            </button>
          </div>
        </div>
        <p class="text-start fw-bold">{{ item.total }}kr</p>
      </div>
      <p>Total: {{ getTotalt }}</p>
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
</style>
