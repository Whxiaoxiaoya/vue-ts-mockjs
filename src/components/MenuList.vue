<template>
  <div class="container">
    <MenuItem v-for="item in filterMemo()" :key="item.id" :memo="item" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuItem from "./MenuItem.vue";
import ItemData from "../model/ItemData";

@Component({
  components: {
    MenuItem
  }
})
export default class MenuList extends Vue {
  memoArr: Array<ItemData> = this.$store.state.aHelper.memoList;
  filterMemo() {
    if (this.$store.state.cateId == -1) {
      return this.memoArr;
    } else {
      return this.memoArr.filter((item: any) => {
        return item.categoryId == this.$store.state.cateId;
      });
    }
  }
}
</script>

<style>
</style>