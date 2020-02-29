<template>
  <div style="position: relative; height: 100vh">
    <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            router
            background-color="#333"
            text-color="#fff" active-text-color="yellow">
      <el-menu-item index="1" route="/">
        <i class="el-icon-setting"></i>
        <span slot="title">工作平台</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" route="/user">用户列表</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
    <i class="arrow"
       :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"
       @click="isCollapse=!isCollapse"></i>
  </div>
</template>


<script>
  export default {
    watch: {
      iscollapse(newvalue) {
        this.$emit('collapse',newvalue);
      }
    },
    data() {
      return {
        activeIndex:'1',
        isCollapse: false,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /*min-height: 400px;*/
  }
  
  .arrow {
    /*background: red;*/
    position: absolute;
    left: calc(100% - 30px);
    bottom: calc(50% - 15px);
    width: 30px;
    height: 30px;
    font-size: 30px;
    color: #fff;

  }
</style>