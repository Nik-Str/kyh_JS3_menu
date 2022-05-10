<template>
  <div class="container d-flex justify-content-center">
    <div>
      <div
        v-for="item in $store.state.isShowing"
        :key="item.id"
        class="mb-2 card shadow"
        @click="$store.commit('addToCart', item)"
      >
        <div class="card-body">
          <p class="m-0 fw-bold fs-5">{{ item.title }}</p>
          <p class="m-0">{{ item.ingredients }}</p>
          <p class="m-0 fw-bold">{{ item.price }}kr</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  height: 100%;
  padding-top: 1rem;
  padding-bottom: 5rem;
}

.card {
  background-color: rgba(250, 250, 250, 0.5) !important;
  transition: 0.8s;
  max-width: 40rem;
}

.card:hover {
  background-color: rgba(250, 250, 250, 0.7) !important;
  cursor: pointer;
}
</style>
