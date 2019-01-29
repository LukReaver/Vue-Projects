<template>
  <nav class="navbar is-warning is-fixed-top is-size-3" role="navigation" aria-label="main navigation">
      <div class="navbar-brand ">
        <a class="navbar-item has-text-weight-bold" href="#">HackerNews</a>
        <a
          role="button "
          class="navbar-burger burger "
          aria-label="menu"
          aria-expanded="false"
          data-target="nav"
          @click="navbar_show = !navbar_show"
          :class="{'is-active':navbar_show}"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="nav" class="navbar-menu " :class="{'is-active':navbar_show}" >
        <div class="navbar-start is-size-5">
          <a class="navbar-item " @click="navbar_show = !navbar_show">
            <router-link class="is-block-touch" to="/">Top</router-link>
          </a>
          <a class="navbar-item" @click="navbar_show = !navbar_show">
            <router-link class="is-block-touch" to="/Best">Best</router-link>
          </a>
          <a class="navbar-item" @click="navbar_show = !navbar_show">
            <router-link class="is-block-touch" to="/News">News</router-link>
          </a>
          <a class="navbar-item" @click="navbar_show = !navbar_show">
            <router-link class="is-block-touch" to="/Ask">Ask</router-link>
          </a>
          <a class="navbar-item" @click="navbar_show = !navbar_show">
            <router-link class="is-block-touch" to="/Show">Show</router-link>
          </a>
          <a class="navbar-item" @click="navbar_show = !navbar_show">
            <router-link class="is-block-touch" to="/Job">Job</router-link>
          </a>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      navbar_show: false,
    };
  },
};
</script>

<style scoped lang="scss">
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    // display: block;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.burger{
  height: auto;
  & span{
  height: 2px;
  }
}
</style>
