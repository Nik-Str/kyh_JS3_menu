<template>
  <div class="d-flex justify-content-center pt-4">
    <button type="button" class="btn btn-light me-3" @click="$store.commit('resetAll')">Visa alla</button>
    <button type="button" class="btn btn-light me-3" @click="$store.commit('sortByPriceAscending')">
      Pris stigande
    </button>
    <button type="button" class="btn btn-light me-3" @click="$store.commit('sortByPriceDescending')">
      Pris fallande
    </button>
    <button type="button" class="btn btn-light me-3" @click="$store.commit('sortByLetterAscending')">Namn A-Z</button>
    <button type="button" class="btn btn-light me-3" @click="$store.commit('sortByLetterDescending')">Namn Z-A</button>
    <button type="button" class="btn btn-light me-3" @click="$store.commit('showOnlyLactoseFree')">Laktosfri</button>
  </div>
</template>

<script>
export default {
  name: 'Filter',
};
</script>
