<template>
  <div class="memo-container">
    <div class="memo">
      <div class="mark"></div>
      <div class="memo-heading">
        <h5 class="title">{{memo.title}}</h5>
        <ul class="tools">
          <li class="edit"
              @click="showEdit"></li>
          <li class="delete"
              @click="doDel"></li>
        </ul>
      </div>
      <h6 class="memo-info">
        <span class="timeStamp">{{memo.createTime}}</span>
        <span class="category">分类: {{this.$store.state.aHelper.getCategoryName(memo.categoryId)}}</span>
      </h6>
      <div class="content">
        <div class="text">{{memo.content}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component,Vue,Prop} from "vue-property-decorator";
import ItemData from "../model/ItemData";

@Component
export default class MenuItem extends Vue {
  @Prop() memo!: ItemData;

  showEdit() {
        let newMemo={...this.memo}
    // let newMemo = JSON.parse(JSON.stringify(this.memo));
        this.$store.commit("toggleShow",true)
        this.$store.commit("TransMemo",newMemo)
  }
  doDel() {
    if(confirm("确定要删除此数据？")) {
       this.$store.state.aHelper.remove(this.memo.id) 
    }
  }
}
</script>

<style>

</style>