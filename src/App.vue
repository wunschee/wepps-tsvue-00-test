<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Share Tech Mono', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:rgba(255, 255, 255, 0.8);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: rgba(200, 200, 200, 0.8);
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
