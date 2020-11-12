<template>
  <div class="dotail" @scroll="dotailScroll" ref="heigh">
    <div class="box" v-for="(item, index) in list" :key="index">
      <div class="one-img" v-if="item.images.length === 1">
        <dl>
          <dt>{{ item.title }}</dt>
          <dd>
            <img :src="item.img" alt="" />
          </dd>
        </dl>
      </div>
      <div class="two-img" v-else>
        <dl>
          <dt>{{ item.title }}</dt>
          <dd>
            <img :src="k" alt="" v-for="(k, i) in item.images" :key="i" />
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      seriesid: this.$route.params.id,
      list: [],
      scrollTop: "",
      scrollHight: "",
      clearnHeight: "",
      pageid: "",
    };
  },
  created() {
    this.add();
  },
  methods: {
    add() {
      axios({
        method: "get",
        url: "/car/series/getarticlelist",
        params: {
          search_after: this.pageid,
          channel: "all",
          seriesid: this.seriesid,
          info_type: "recommend",
        },
      }).then((res) => {
        this.list = this.list.concat(res.data.newslist);
        console.log(this.list);
        this.pageid = res.data.pageid;
      });
    },
    dotailScroll(e) {
      this.scrollTop = e.target.scrollTop; //获取滚动的距离
      this.scrollHight = e.target.scrollHeight; //最大滚动距离
      this.clearnHeight = e.target.offsetHeight; //当前页面高度

      if (this.scrollHight - this.clearnHeight - 5 <= this.scrollTop) {
        this.add();
      }
    },
  },
};
</script>

<style lang="css" scoped>
dl {
  padding: 10px;
  box-sizing: border-box;
}
.one-img dl {
  display: flex;
  justify-content: space-between;
}
.one-img dl dd img {
  width: 110px;
}
.two-img dl dd {
  display: flex;
  justify-content: space-between;
}
.two-img dl dd img {
  width: 33%;
}
.dotail {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>