<template>
  <div id="app">
    <Header />
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/views/Header";

export default {
  name: "App",
  components: { Header },
};
</script>

<style lang="scss">
.wrapper {
  max-width: 1100px;
  padding: 0px 20px 0px 20px;
  margin: 0 auto;
}
</style>
