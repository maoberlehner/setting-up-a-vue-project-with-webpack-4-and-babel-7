<template>
  <button
    :is="to ? `router-link` : `button`"
    :to="to"
    :class="$options.name">
    <slot/>
  </button>
</template>

<script>
export default {
  name: `AppButton`,
  props: {
    to: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';

.AppButton {
  display: inline-block;
  padding: 0.5em 0.75em;
  border: none;
  border-radius: 0.25em;
  background-color: $color-primary;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &,
  &:visited {
    color: #fff;
  }

  &:focus,
  &:hover {
    background-color: lighten($color-primary, 10%);
  }
}
</style>
