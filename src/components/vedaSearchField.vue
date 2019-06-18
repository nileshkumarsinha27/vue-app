<template>
  <div class="input-container">
    <label for="search">
      <input type="text" placeholder="Search" v-model="value" v-on:keyup="changeHandle(value)">
    </label>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  data: function() {
    return {
      value: ""
    };
  },
  methods: {
    changeHandle: function(value) {
      if (value && value.length > 2) {
        store.dispatch("searchHandle", value);
      } else {
        store.dispatch("searchHandle", null);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.input-container {
  display: block;
  margin: 10px 0;
  text-align: left;
  width: 100%;
  input {
    width: 250px;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding: 10px 0 3px;
    margin: 0 0 0 20px;
  }
}
</style>

