<template>
  <div class="container">
    <div class="nav_links">
      <ul>
        <router-link class="link" to="/">Hem</router-link>
        <router-link class="link" to="/children">Barnmeny</router-link>
        <router-link class="link" to="/adultsView">Vuxenmeny</router-link>
        <router-link class="link" to="/coupleView">Par-meny</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link {
  margin: 20px;
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
  transition: 0.5s ease;
}
.link:hover {
  color: #4FFBDF;
}



</style>