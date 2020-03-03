<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">选课中心</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/user' }">成绩查看</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">学籍卡片</el-breadcrumb-item>
    </el-breadcrumb>

  </div>

</template>

<script>
    export default {
      name: "Tabs",
    }
</script>

<style scoped>

</style>