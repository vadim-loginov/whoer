<template>
  <div id="app">
    <TranslationsEditor/>
  </div>
</template>

<script>
import TranslationsEditor from './components/TranslationsEditor';

export default {
  name: 'App',
  components: {
    TranslationsEditor,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
