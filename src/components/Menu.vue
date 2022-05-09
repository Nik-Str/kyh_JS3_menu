<template>
  <div>
    <div v-for="item in menu" :key="item.id">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menu: Array,
  },
};
</script>

<style lang="scss" scoped></style>
