<template>
  <div class="col-md-12 text-center d-flex flex-col page-container">
    <div class="flex-1">
      <img class="logo" src="../assets/logo-full.png">
    </div>
    <div class="flex-1">
      <h1>{{ msg }}</h1>
    </div>
    <div class="flex-1">
      <router-link to="players">Enter Player Names</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data() {
    return {
      msg: 'Welcome to Tic Tac Toe',
    };
  },
};
</script>

<style scoped>
@media (max-width: 376px) {
  .logo {
    width: 90%
  }
}

.page-container {
  height: 100vh
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
