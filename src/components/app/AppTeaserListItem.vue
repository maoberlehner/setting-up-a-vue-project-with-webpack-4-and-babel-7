<template>
  <li :class="$options.name">
    <slot/>
  </li>
</template>

<script>
export default {
  name: `AppTeaserListItem`,
};
</script>

<style lang="scss" scoped>
@import '../../scss/objects/layout.mixin';

.AppTeaserListItem {
  @include layout__item(auto, 16em);
}
</style>
