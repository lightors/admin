<template>
  <div id="app">
    <myheader></myheader>
    <section style="display: flex;flex: 1;">
      <div style="background-color: #333;">
        <left @collapse="leftcollapse"></left>
      </div>

      <article :style="{width:'calc(100vw - '+leftW+'px)'}"
               style="padding:10px;box-sizing: border-box">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 15px 0;">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </article>
    </section>
  </div>
</template>

<script>
  import {myheader,left} from './components'

  export default {
    name: "Home",
    data() {
      return {
        leftW:201
      }
    },

    components: {
      myheader,
      left,
    },
    methods: {
      leftcollapse(val) {
        if(val) {
          this.leftW = val? 65:201;
        }
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
<style>
  * {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  #app {
    display: flex;
    height: 100vh;
    flex-direction: column;
    /*text-align: center;*/
  }
</style>
