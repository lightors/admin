<template>
  <div>
    <el-table
            :data="tableData"
            border
            style="width: 100%">
      <el-table-column
              type="index"
              :index="indexMethod"
              label="节次/星期" width="180">

      </el-table-column>
      <el-table-column label="上午">

        <el-table-column
                prop="lessons1"
                label="1-2节"
                width="180">
        </el-table-column>
        <el-table-column
                prop="lessons2"
                label="3-4节"
                width="180">
        </el-table-column>
        <el-table-column
                prop="lessons3"
                label="5-6节">
        </el-table-column>
      </el-table-column>


      <el-table-column label="下午">

        <el-table-column
                prop="lessons4"
                label="7-8节">
        </el-table-column>
        <el-table-column
                prop="lessons5"
                label="9-10节">
        </el-table-column>
        <el-table-column
                prop="lessons6"
                label="11-12节">
        </el-table-column>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  export default {
    name: "personSchedules",
    data() {
      return {
        tableData: [
          {
            lessons1:'',
            lessons2:'',
            lessons3:'',
            lessons4:'影视鉴赏',
            lessons5:'',
            lessons6:'',

          },
          {
            lessons1:'',
            lessons2:'',
            lessons3:'',
            lessons4:'',
            lessons5:'',
            lessons6:'高等数学',

          },
          {
            lessons1:'单片机应用',
            lessons2:'',
            lessons3:'',
            lessons4:'',
            lessons5:'',
            lessons6:'',


          },
          {
            lessons1:'',
            lessons2:'',
            lessons3:'大学物理',
            lessons4:'',
            lessons5:'',
            lessons6:'',


          },
          {
            lessons1:'',
            lessons2:'',
            lessons3:'',
            lessons4:'',
            lessons5:'',
            lessons6:'毛概',

          },
          {
            lessons1:'',
            lessons2:'',
            lessons3:'',
            lessons4:'',
            lessons5:'通信原理',
            lessons6:'',

          },
          {
            lessons1:'',
            lessons2:'',
            lessons3:'大学英语',
            lessons4:'',
            lessons5:'',
            lessons6:'',

          },
        ]
      }
    },
    methods: {
      indexMethod(index) {
       // return ((index*2) +1)+'-'+((index+1)*2)+'节';
        switch (index) {
          case 0:index='一'; break;
          case 1:index='二'; break;
          case 2:index='三'; break;
          case 3:index='四'; break;
          case 4:index='五'; break;
          case 5:index='六'; break;
          case 6:index='日'; break;

        }

        return '星期' + (index);
      }
    }
  }
</script>

<style scoped>

</style>