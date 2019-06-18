<template>
  <div id="app">
    <div id="nav">
      <ul v-if="items.length>0">
        <li v-for="item in items" v-bind:key="item.name">{{item.name}}</li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [{ name: " Rig Veda Data" }]
  })
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  max-width: 1440px;
  background: #e5e6f1;
  padding: 0 0 50px;
}
#nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background: #5677bd;
  z-index: 1;
  ul {
    list-style: none;
    text-align: left;
    width: 100%;
    li {
      color: #fff;
      font-size: 30px;
      line-height: 50px;
      text-align: center;
      width: 100%;
      display: inline-block;
    }
  }
}
</style>
