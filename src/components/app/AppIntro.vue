<template>
  <div :class="$options.name">
    <slot/>
  </div>
</template>

<script>
export default {
  name: `AppIntro`,
};
</script>

<style lang="scss" scoped>
.AppIntro {
  font-size: 1.25em;

  > :not(:first-child) {
    margin-top: 1.25em;
  }

  p {
    line-height: 1.25;
  }
}
</style>
