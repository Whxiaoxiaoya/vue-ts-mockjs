<template>
  <div id="app">
    <menu-bar></menu-bar>
    <MenuList />
    <MenuEditor v-if="this.$store.state.isShow" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuBar from "./components/MenuBar.vue";
import MenuList from "./components/MenuList.vue";
import MenuEditor from "./components/MenuEditor.vue";

@Component({
  components: {
    MenuBar,
    MenuList,
    MenuEditor
  }
})
export default class App extends Vue {}
</script>

<style>
</style>
