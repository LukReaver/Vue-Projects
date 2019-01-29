<template>
  <div id="app">
    <app-navbar></app-navbar>
    <transition name="fade" appear>
      <app-preloader v-show="!postsReady"></app-preloader>
    </transition>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Preloader from '@/components/Preloader';
import bulma from 'bulma';


export default {
  components: {
    'app-navbar': Navbar,
    'app-preloader': Preloader,
  },

  computed: {
    postsReady() {
      return this.$store.getters.postsReady;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800");

#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: rgb(0, 209, 177);
}
html {
  background: rgb(0, 209, 177);
}
@media only screen and (max-width: 768px) {
  .tag {
    font-size: 0.45em !important;
  }
}
@media only screen and (min-width: 768px) {
  .tag {
    font-size: 0.65em !important;
  }
}
</style>
