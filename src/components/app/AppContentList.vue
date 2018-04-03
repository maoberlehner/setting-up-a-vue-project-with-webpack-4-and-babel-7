<template>
  <ul :class="$options.name">
    <slot/>
  </ul>
</template>

<script>
export default {
  name: `AppContentList`,
};
</script>

<style lang="scss" scoped>
.AppContentList {
  > :not(:first-child) {
    margin-top: 1em;
  }
}
</style>
