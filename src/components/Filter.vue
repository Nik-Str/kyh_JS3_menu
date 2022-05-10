<template>
  <div class="d-flex justify-content-center pt-4">
    <button type="button" class="btn btn-light me-3" @click="$store.commit('sortByPriceAscending')">
      Pris stigande
    </button>
    <button type="button" class="btn btn-light" @click="$store.commit('sortByPriceDescending')">Pris fallande</button>
  </div>
</template>

<script>
export default {
  name: 'Filter',
};
</script>
