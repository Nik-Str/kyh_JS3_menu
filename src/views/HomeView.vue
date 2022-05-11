<template>
  <div class="bg">
    <div class="overlayer">
      <div class="content">
        <div>
          <h1 class="mb-0">WELCOME TO CLOWNTOWN</h1>
          <h4 class="mt-0"><i>Tasty food for everyone</i></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url('../assets/BG_home.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.overlayer {
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
}

.content {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30vh;
  color: white;
}
</style>
