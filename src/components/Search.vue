<template>
  <div class="search-wrapp">
    <div class="search-icon">
      <i class="fas fa-search fa-2x"></i>
    </div>
    <input
      v-on:keyup.enter="searchInput()"
      v-model="searchQuery"
      type="txt"
      name="word"
      id="txt"
      placeholder="Search photos from Unsplash"
      class="font-20 fas"
      autofocus
    />
  </div>
</template>

<script>
import { getImages } from "@/module/search.js";
export default {
  data: () => ({
    searchQuery: ""
  }),
  methods: {
    searchInput() {
      console.log("hej från searchInput " + this.searchQuery);
      getImages(this.searchQuery);
    }
  }
};
</script>

<style>
.search-wrapp {
  display: flex;
  align-items: center;
  width: 50%;
  border-bottom: 1px solid black;
  margin-bottom: 40px;
}

.search-icon {
  margin: 0 16px;
}

.form-control:focus,
.form-control:active {
  background: transparent;
}

::placeholder {
  color: rgb(223, 219, 219);
}

.fas {
  color: rgb(223, 219, 219);
}

/* Search text */
#txt {
  height: 56px;
  width: 90%;
  padding: 0 16px;
  border: 0;
  font-size: 1.5rem;
  font-family: "fira sans", roboto, sans-serif;
  font-weight: 400;
  background: inherit;
  color: rgb(223, 219, 219);
}
</style>
