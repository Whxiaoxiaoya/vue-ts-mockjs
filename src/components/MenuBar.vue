<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand">
                <img height="40"
                    src="../assets/logo.png" />➕
                <img height="40"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEUAesz///8Ac8oAcMmFsN8Ad8u50ewAdcqjweUAbshRktQAa8cAacd1pNpHjtM8idHb5/Xz9/zn7/gyhdDJ2/BtodmNsd8AZsbS4fKzy+kff86gveRkm9eErN05gs6qxuj1Ch+yAAADMElEQVR4nO2Z24KiMAxAS2sJF+UOItD1//9ywZlRCmXoBd19yHkbqeOxbZKmEoIgCIIgCIIgCIIgCIIgCIIgCIIgCIL8b3ATFG8H+gTsDLpyJC3TB0maJEm0Znw1mZ6XSweIO3GvsqIo2urWD2GokNyDNp4Jg/RFgYhMepz7g7mEoUI9U+BwKdYjqpR+TIGDrx7TnD+kAH/yrUF++E6Fy48C3zYYHYzWggWWCtlvwwJmonC3Uoh33lYbpAg7BR7tDez0Y9NOIaz2Bgb602A5C4uX82KRIW4GCQrqQKaf77Nq8TCIHv8a5DAKuuv5HEevNJEPsb7B+IWozHWecES8ePr15aiUlCL2eJWHw88U2Narb9j835/UAS5FZP8MQFZPfxe1SURaK8zT0mxI2I9T0JnWCGeFfL7scI/MkvMhCp5UlMBtF1gqqI5SH1CYZ4H+gKk3V4B2NsYbjnbQUZDzQi7YsWuhNQuLQ0ZV0iMldBQI9Rb4yfmIWDBQYLelg9fW1DknmSjwVHFsK4R7YtRXIKHyvFf0cISEngIB9dkx7w9YDk0F3m2coPOTc5LWVCCg2g4PssRxInQVCJSKdu6Lxi1faisQvt2DVE7zoK8wjh22GprMJV2aKBDgYmM1Koc9aaQwpmrWqCUcarihwnTRMrQqh8h6KYwVptNa4q8jtDLqJRwVpuBI14UrtZ0GK4WpkemWIdrY7khLhaktI3Kz29puSGuFaTl6ycF2MzgojDVc2hEGdwyWCqrmVer6B8vNoF0paSPW/at0jLi8V4EmrZevww7mO1K8U4HSx6IX15XCPFG+cRbgeVnZLpoYTj6yFzibXT1XRPqYD0VEJyWgrHxNBISfyQtU/hjPC9JrSAFoeI3kilm9LTteV+eD3O+FaFbF8n01Yv/m9VusszTQiAh1J7UisD42aQQl273+HSlsBWxuWdQk9udXrbsm2J2Hi0MnoVcj9n5JES79lGaZYukvP8sUqdMdsG6x5lRsSOS9Y29tcGQhtUKi6EvXa3B68l/s1Do4l0JKim0/xAfcswB7sTuhHFgcl9FQ1/UQkXN46OWfAZzDxD/6dARBEFv+AuqFKQU8WzNVAAAAAElFTkSuQmCC">
            </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">全部</a>
                    <ul class="dropdown-menu">
                        <li @click="doFilterList(-1)"><a href="#">全部 <span>({{doFilter(-1)}})</span></a></li>
                        <li @click="doFilterList(0)"><a href="#">工作 <span>({{doFilter(0)}})</span></a></li>
                        <li @click="doFilterList(1)"><a href="#">生活 <span>({{doFilter(1)}})</span></a></li>
                        <li @click="doFilterList(2)"><a href="#">学习 <span>({{doFilter(2)}})</span></a></li>
                    </ul>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">新建</a>
                    <ul class="dropdown-menu">
                        <li><a href="#" @click="addMemo">文本便签</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Category from '../model/CateEnum';

@Component
export default class list extends Vue {
    addMemo() {
        this.$store.commit('toggleShow',true)
    }

    doFilter(cid: number): number {
        if (cid == -1) {
        return this.$store.state.aHelper.memoList.length;
        } else {
        return this.$store.state.aHelper.memoList.filter((ele: any) => {
            return ele.categoryId == cid;
        }).length;
        }
   }
   doFilterList(cateId:number):void {
      this.$store.commit('doFilterCateId',cateId)
   }
}
</script>

<style>
.navbar-brand > img {
  display: inline-block;
}
</style>