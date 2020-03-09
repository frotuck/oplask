<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <search />
  </div>
</template>

<script>
// @ is an alias to /src
import { getImages } from "@/module/apiRequest";
import Search from "@/components/Search";

export default {
  name: "Home",
  data() {
    return {
      loading: false,
      tag: "",
      images: []
    };
  },
  components: { Search },
  mounted() {
    getImages().then(res => console.log(res));
    // getSearchImages().then(res => console.log(res));
  },
<<<<<<< HEAD
  components: { Search }
=======
  methods: {
    search() {
      this.loading = true;
      this.getImages().then(response => {
        this.images = response.data.photos.photo;
        this.loading = false;
      });
    }
  }
>>>>>>> d3a62a5e3611c7e02e5121deec4128c18f971df9
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
