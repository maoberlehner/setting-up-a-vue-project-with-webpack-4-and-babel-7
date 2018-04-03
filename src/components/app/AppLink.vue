<template>
  <router-link :to="to" :class="$options.name">
    <slot/>
  </router-link>
</template>

<script>
export default {
  name: `AppLink`,
  props: {
    to: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';

.AppLink {
  text-decoration: underline;

  &,
  &:visited {
    color: $color-primary;
  }

  &:focus,
  &:hover {
    text-decoration: none;
  }
}
</style>
