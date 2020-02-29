<template>
  <div class="my-nav">
    <div style="color:#fff;font-size:25px;letter-spacing: 5px">问好</div>
    <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#333"
            text-color="#fff"
            active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "header",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .my-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #333;
  }
</style>