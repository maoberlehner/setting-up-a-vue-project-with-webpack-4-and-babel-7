<template>
  <ul :class="$options.name">
    <slot/>
  </ul>
</template>

<script>
export default {
  name: `AppTeaserList`,
};
</script>

<style lang="scss" scoped>
@import '../../scss/objects/layout.mixin';

.AppTeaserList {
  @include layout();
}
</style>
