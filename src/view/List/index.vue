<template>
  <div class="list">
    <div class="lin1">
      <span>&lt;</span>
      <span>在售</span>
      <span>新车上市</span>
    </div>
    <ul class="nav">
      <li
        v-for="(item, index) in list"
        :key="index"
        :index="index"
        :class="index === ind ? 'active' : ''"
        @click="chan(index)"
      >
        {{ item.levelname }}
      </li>
    </ul>
    <div v-if="list.length">
      <div class="cont" v-for="(item, index) in list[ind].fctlist" :key="index">
        <p class="pp">
          {{ item.fctname }}
        </p>
        <dl
          v-for="(ite, inde) in item.serieslist"
          :key="inde"
          @click="Todatail(ite.seriesid)"
        >
          <dt>
            <img :src="ite.seriesImg" alt="" />
          </dt>
          <dd>
            <h3>{{ ite.seriesName }}</h3>
            <p style="color: red">
              {{ ite.seriesPriceMin / 10000 }}~{{ ite.seriesPriceMax / 10000 }}
              万
            </p>
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
      list: [],
      ind: 0,
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      axios({
        method: "get",
        url: "/api/ajax/GetSeriesByBrandId1",
        params: {
          r: 13,
          brandid: 15,
        },
      }).then((res) => {
        this.list = res.data.saledata;
        console.log(this.list);
      });
    },
    chan(index) {
      this.ind = index;
    },
    Todatail(seriesid) {
      this.$router.push(`/dotail/${seriesid}`);
    },
  },
};
</script>
<style lang="css" scoped>
.lin1 {
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}
li {
  padding: 5px 15px;
  border-radius: 10px;
  background: #EEE;
}
.active {
  color: #f60;
}
.pp {
  background: #EEE;
  padding: 5px 0;
}
img {
  width: 92px;
}
dl {
  display: flex;
  padding: 10px;
  box-sizing: border-box;
}
dd {
  margin-left: 20px;
  line-height: 36px;
}
</style>