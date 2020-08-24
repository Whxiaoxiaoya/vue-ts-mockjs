<template>
  <div>
    <div class="cover-layer"></div>
    <div id="new-markdown"
         class="editor-layer">
      <div class="editor-top">
        <input class="editor-title form-control"
               type="text"
               placeholder="标题"
               v-model="memo.title" />
        <div class="dropdown select-category">
          <button class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown">
            <span class="category">{{this.$store.state.aHelper.getCategoryName(memo.categoryId)}}</span>
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li @click="memo.categoryId=0">
              <a>工作</a>
            </li>
            <li @click="memo.categoryId=1">
              <a>生活</a>
            </li>
            <li @click="memo.categoryId=2">
              <a>学习</a>
            </li>
          </ul>
        </div>
        <ul class="tools">
          <li class="save"
              @click="saveNew"></li>
          <li class="cancel"
              @click="closeWin"></li>
        </ul>
      </div>
      <textarea class="text-content form-control"
                placeholder="内容"
                v-model="memo.content"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue,Prop } from 'vue-property-decorator';
import ItemData from "../model/ItemData";

@Component
export default class MenuEditor extends Vue {
    memo:ItemData = new ItemData(-1, 0);
    created() {
        this.memo=this.$store.state.transMemo;
    }
    saveNew() {
        if(
            this.memo&&
            this.memo.categoryId > -1 &&
            this.memo.title.trim().length > 0 &&
            this.memo.content.trim().length > 0
        ) {
           if(this.memo.id>0) {
            this.$store.state.aHelper.edit(this.memo);

            }else {
            this.$store.state.aHelper.addData(this.memo);
            }
            this.$store.commit("toggleShow",false)
        }else {
            alert('请输入正确内容~~~')
        }
        
    }
    closeWin() {
        this.$store.commit("toggleShow",false)
    }
}
</script>

<style>

</style>