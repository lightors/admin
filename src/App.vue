<template>
  <div id="app">
    <my-header></my-header>
    <section style="display: flex;flex: 1;">
      <div style="background-color: #333;">
        <left @collapse="leftcollapse"></left>
      </div>

      <article :style="{width:'calc(100vw - '+leftW+'px)'}"
               style="padding:10px;box-sizing: border-box">
        <tabs></tabs>
        <router-view></router-view>
      </article>
    </section>
  </div>
</template>

<script>
  import {myHeader,left,Tabs} from './components'

  export default {
    name: "Home",
    data() {
      return {
        leftW:201
      }
    },

    components: {
      myHeader,
      left,
      Tabs,
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
