<template>
  <div style="display: flex;flex-direction: column;justify-content: space-between">
    <el-row :gutter="20">
      <el-col :span="9">
        <el-card class="box-card" shadow="hover" style="height: 250px;">
          <div slot="header" class="clearfix">
            <span>快捷入口</span>
            <el-button style="float: right; padding: 3px 0" type="text">添加更多</el-button>
          </div>
          <el-row :gutter="5" class="kjrk">
            <el-col :span="8">
              <el-button type="primary">
                <i class="el-icon-circle-plus-outline"></i>添加用户
              </el-button>

            </el-col>
            <el-col :span="8">
              <el-button type="success">
                <i class="el-icon-user"></i>用户管理
              </el-button>
            </el-col>
            <el-col :span="8">
              <el-button type="danger">
                <i class="el-icon-edit"></i>帖子管理
              </el-button>
          </el-col>
            <el-col :span="8">
              <el-button type="warning">
                <i class="el-icon-s-release"></i>投诉管理
              </el-button>
          </el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :span="11">
        <el-card class="box-card" shadow="hover"  style="height: 250px;">
          <div slot="header" class="clearfix">
            <span>数据统计</span>
          </div>
          <el-row :gutter="5" class="sjtj">
            <el-col class="item" :span="12">新增用户/<span>150</span> 人</el-col>
            <el-col class="item" :span="12">新增帖子/<span>150</span> 条</el-col>
            <el-col class="item" :span="12">新增金额/<span>1500.00</span> 元</el-col>
            <el-col class="item" :span="12">新增投诉/<span>150</span> 条</el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :span="4">
        <iframe allowtransparency="true" frameborder="0"
                width="140" height="128" scrolling="no"
                src="//tianqi.2345.com/plugin/widget/index.htm?s=1&z=1&t=1&v=1&d=1&bd=0&k=000000&f=0080ff&ltf=009944&htf=cc0000&q=1&e=1&a=1&c=54511&w=140&h=128&align=center"></iframe>
      </el-col>

    </el-row>
    <div style="height: 5px;">

    </div>

    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>每日统计</span>
          </div>
          <chartscolumn id="c1" width="350px" height="300px"/>
        </el-card>


      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>本周访问量</span>
          </div>
          <chartsline id="c2" width="350px" height="300px"></chartsline>
        </el-card>

      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>行业成分</span>
          </div>
          <chartspie id="c3" width="350px" height="300px"></chartspie>
        </el-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {chartscolumn, chartsline, chartspie} from "../../components";

  export default {
    name: "Home",
    components: {
      chartscolumn,
      chartsline,
      chartspie,
    },
  }

</script>

<style scoped>
  .kjrk button {
    margin: 15px 0;
    height: 40px;
  }
  .sjtj .item{
    padding: 20px 0;
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  .sjtj span {
    color: orangered;
    font-size: 30px;
    padding: 0 10px;
  }
</style>