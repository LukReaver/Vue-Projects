<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800");

html {
  font-size: 62.5%;
}
body {
  height: 100vh;
  font-family: "Montserrat", sans-serif;
  background-color: rgb(113, 207, 187);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 60%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  a {
    margin: 0.4rem;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
