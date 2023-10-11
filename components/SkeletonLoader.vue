<template>
  <v-skeleton-loader
    class="skeleton"
    :elevation="4"
    type="paragraph"
  ></v-skeleton-loader>
</template>

<script>
export default {
  name: "SkeletonLoader",
};
</script>

<style scoped>
.skeleton {
  margin: 20px 0;
}
</style>