<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import { getImages } from "@/module/search";

export default {
  name: "Home",
  mounted() {
    getImages().then(res => console.log(res));
  }
};
</script>
