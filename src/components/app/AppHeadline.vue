<template>
  <h1
    :is="`h${level}`"
    :class="`${$options.name} ${$options.name}--${level}`">
    <slot/>
  </h1>
</template>

<script>
export default {
  name: `AppHeadline`,
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
.AppHeadline {
  font-weight: 500;

  &--1 {
    font-size: 3.375em;
  }

  &--2 {
    font-size: 2.25em;
  }

  &--3 {
    font-size: 1.5em;
  }
}
</style>
