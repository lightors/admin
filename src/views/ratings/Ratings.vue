<template>
  <div>
    <div class="container mt-5" >
      <div class="form-group">
        <select name="" id="produce-select"
                class="form-control custom-select">
          <option value="0" disabled selected>选择产品</option>
          <option value="vue">vue</option>
          <option value="node">node</option>
          <option value="jquery">juqery</option>
          <option value="djingo">djingo</option>
          <option value="flutter">flutter</option>
        </select>
      </div>
      <div class="forn-group">
        <input type="number" id="rating-control"
               class="form-control" step="0.1" max="5"
               placeholder="评分0-5" disabled>
      </div>
      <table class="table">
        <thead>
        <th>评教课程</th>
        <th>评分</th>
        </thead>
        <tbody>
        <tr v-for="item in classNames">
          <td>{{item}}</td>
          <td>

          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Ratings",
    data() {
      return {
        //课程名称
        classNames:['vue','node','jquery','djingo','flutter'],

        //第一步 初始评分
        ratings: {
          vue:4.7,
          node:3.4,
          jquery:2.3,
          djingo:3.6,
          flutter:4.1
        },
        //第二步，设置总分变量
        starsTotal:5,
      }
    },

    methods: {
      //第三步 设置评分函数
      getRatings() {
    //console.log('运行');
    for (let rating in this.ratings) {
      //console.log(ratings[rating]);
      //获得分数百分比
      const starPercentage = (this.ratings[rating]/starsTotal)*100 ;

      console.log(typeof starPercentage);

      //获得四舍五入到十位带分数百分比
      /*const starPercentageRounded =
          `${Math.round(starPercentage/10)*10}%`;*/

      const starPercentageRounded =
          `${starPercentage}%`;
      console.log(starPercentageRounded);

      //点亮星标宽度等于分数百分比
      document.querySelector(`.${rating} .stars-inner`)
          .style.width = starPercentageRounded;

      //插入后面的分数
      document.querySelector(`.${rating}  .number-rating`)
          .innerHTML = ratings[rating];
    }


  }
    },













  }
</script>

<style scoped>
  .stars-outer {
    position: relative;
    display: inline-block;

  }

  .stars-inner {
    position: absolute;
    top:0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;

  }

  .stars-outer::before {
    content:'\f005  \f005  \f005  \f005  \f005';
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color:#ccc;
  }

  .stars-inner::before {
    content:'\f005  \f005  \f005  \f005  \f005';
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color:#f8ce0b;
  }
</style>