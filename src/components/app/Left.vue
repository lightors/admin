<template>
  <div style="position: relative; height: 100vh">
    <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            router
            background-color="#333"
            text-color="#fff" active-text-color="yellow">
      <h2 style="color: white ">
        <i class="el-icon-share"></i>
      </h2>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-date"></i>
          <span slot="title">我的选课</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" route="/cschedules">班级课表</el-menu-item>
          <el-menu-item index="2-2" route="/pschedules">个人课表</el-menu-item>
          <el-menu-item index="2-3">选课中心</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-search"></i>
          <span slot="title">教室查询</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" route="/user">空教室查看</el-menu-item>
          <el-menu-item index="2-2">教室借用</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-folder-checked"></i>
          <span slot="title">我的成绩</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" route="/user">成绩查看</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-notebook-2"></i>
          <span slot="title">考试信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" route="/user">考试安排</el-menu-item>
          <el-menu-item index="2-3">考级报名</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-magic-stick"></i>
          <span slot="title">培养方案</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" route="/user">专业计划</el-menu-item>
          <el-menu-item index="2-3">学业进度</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-notebook-1"></i>
          <span slot="title">学籍信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" route="/user">学籍卡片</el-menu-item>
          <el-menu-item index="2-3">个人信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-school"></i>
          <span slot="title">公共信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" route="/user">教学周历</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-crop"></i>
          <span slot="title">评教系统</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" route="/user">学生教学评价</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
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