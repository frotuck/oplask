<template>
  <div class="home">
    <search />
  </div>
</template>

<script>
import Search from "@/components/Search";

export default {
  components: { Search },
  name: "Home"
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
