<template>
  <div class="list">
    <van-card
      :num="item.num"
      :price="item.price"
      desc="描述信息"
      :title="item.title"
      :thumb="item.url"
      v-for="(item, index) in list"
      :key="index"
      @click="Todotail(item)"
    />
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  methods: {
    Todotail(item) {
      this.$router.push("/dotail");
      window.localStorage.setItem("car", JSON.stringify(item));
    },
  },
};
</script>

<style>
</style>