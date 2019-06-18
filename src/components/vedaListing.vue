<template>
  <div class="listing-container">
    <ul v-if="list.length>0">
      <li v-for="item in list" v-bind:key="item">
        <vedaItem :data="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
import vedaItem from "@/components/vedaItem.vue";
import { mapState } from "vuex";
import store from "@/store.js";
export default {
  data: () => ({
    page: 0
  }),
  mounted() {
    store.dispatch("getData");
  },
  name: "vedaisting",
  components: {
    vedaItem
  },
  computed: mapState({
    list: state => state.list,
    refMaxPages: state => state.refMaxPages,
    maxPages: state => state.maxPages
  })
};
</script>


<style scoped lang="scss">
ul {
  width: 100%;
  li {
    display: inline-grid;
    box-sizing: border-box;
    width: 26%;
    margin: 20px 1%;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  }
}
</style>

