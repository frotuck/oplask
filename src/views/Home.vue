<template>
  <div class="home">
    <Header />
    <search />
  </div>
</template>

<script>
// @ is an alias to /src
// import { getImages } from "@/module/search";
import Search from "@/components/Search";
import Header from "@/components/Header";

export default {
  name: "Home",
  mounted() {
    // getImages().then(res => console.log(res));
    // getSearchImages().then(res => console.log(res));
  },
  components: { Search, Header }
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

:root {
  background: #222;
}
</style>
