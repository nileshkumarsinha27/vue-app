<template>
  <div class="list-item-container">
    <p>
      <strong>Meter:</strong>
      {{this.listItemData.meter}}
    </p>
    <p>
      <strong>Mandal:</strong>
      {{this.listItemData.mandal}}
    </p>
    <p>
      <strong>Sukta:</strong>
      {{this.listItemData.sukta}}
    </p>
    <p>
      <strong>Sung By:</strong>
      {{this.listItemData.sungby}}
    </p>
    <div v-if="this.showMore">
      <p>
        <strong>Category:</strong>
        {{this.listItemData.sungbycategory}}
      </p>
      <p>
        <strong>Sung For:</strong>
        {{this.listItemData.sungfor}}
      </p>
      <span class="more-click-item" v-on:click="moreClick(false)">Less</span>
    </div>
    <div v-else>
      <span class="more-click-item" v-on:click="moreClick(true)">More</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data: function() {
    return {
      listItemData: this.data,
      showMore: false
    };
  },
  methods: {
    moreClick: function(bool) {
      return (this.showMore = bool);
    }
  }
};
</script>

<style scoped lang="scss">
.list-item-container {
  width: 100%;
  text-align: left;
  font-size: 14px;
  position: relative;
  height: 100%;
  p {
    max-width: 300px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .more-click-item {
    color: #ff7f1a;
    font-size: 13px;
    position: absolute;
    bottom: 0;
    right: 10px;
    cursor: pointer;
  }
}
</style>

