<template>
  <div id="app">
    <h1 class="app_title">In Love with JuJu</h1>
    <app-tabulator />
  </div>
</template>

<script>

import Tabulator from './Components/Tabulator'
export default {
  name: 'App',
  components: {
    'app-tabulator': Tabulator
  }
}
</script>

<style lang="scss">
html, body {
  font-family: 'Comic Sans MS';
  margin: 0;
  padding: 0;
}
p, h1, h2, h3, h4, h5, h6, a, span, div {
  padding: 0;
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
}
</style>