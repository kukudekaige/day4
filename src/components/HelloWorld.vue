<template>
  <div class="hello">
    <div class="nav">
      <span>排序</span>
      <span>品牌</span>
      <span>价格</span>
      <span>筛选</span>
    </div>
    <div class="main">
      <List :list="list" />
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "./Footer";
import List from "./List";
export default {
  name: "HelloWorld",
  created() {
    axios.get("/api/list").then((res) => {
      this.list = res.data.list;
    });
  },
  components: {
    Footer,
    List,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      list: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
