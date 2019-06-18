<template>
  <div class="home">
    <vedaSearchField/>
    <vedaListing/>
  </div>
</template>

<script>
// @ is an alias to /src
import vedaListing from "@/components/vedaListing.vue";
import vedaSearchField from "@/components/vedaSearchField.vue";

export default {
  name: "home",
  components: {
    vedaListing,
    vedaSearchField
  }
};
</script>
<style lang="scss">
.home {
  margin: 50px auto;
}
</style>

