<template>
  <div class="my-nav">
    <div style="color:#fff;font-size:25px;letter-spacing: 5px;">
      <div style="background-color:rgba(255,255,255,.9);border-radius: 17px;
      display: inline-block;height: 32px;vertical-align: middle;">
        <svg class="octicon octicon-mark-github v-align-middle"
             height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
          <path fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
          </path></svg>
      </div >

      教务系统
      <small style="font-size: 16px;">学生综合教务管理平台</small>
    </div>
    <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#333"
            text-color="#fff"
            active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-paperclip"></i>
        常用
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          设置
        </template>
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
      <el-menu-item index="3">
        <i class="el-icon-sort"></i>
        切换角色
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-user"></i>
        用户
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-bell"></i>
        消息
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-switch-button"></i>
        退出
      </el-menu-item>
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