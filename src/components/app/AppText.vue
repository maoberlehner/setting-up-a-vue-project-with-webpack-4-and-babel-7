<template>
  <div :class="$options.name">
    <slot/>
  </div>
</template>

<script>
export default {
  name: `AppText`,
};
</script>

<style lang="scss" scoped>
.AppText {
  > :not(:first-child) {
    margin-top: 1.25em;
  }

  p {
    line-height: 1.4;
  }
}
</style>
