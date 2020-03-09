<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <search />
  </div>
</template>

<script>
// @ is an alias to /src
import { getImages } from "@/module/search";
import Search from "@/components/Search";

export default {
  name: "Home",
  components: { Search },
  mounted() {
    getImages().then(res => console.log(res));
  }
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
