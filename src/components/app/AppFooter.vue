<template>
  <footer :class="$options.name">
    <div :class="`${$options.name}__wrapper`">
      &copy; Markus Oberlehner -
      <app-link :to="{ name: `home` }">Home</app-link>
      |
      <app-link :to="{ name: `article` }">Article</app-link>
      |
      <app-link :to="{ name: `list` }">List</app-link>
    </div>
  </footer>
</template>

<script>
import AppLink from './AppLink.vue'

export default {
  name: `AppFooter`,
  components: {
    AppLink,
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.AppFooter {
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: $color-secondary;
  text-align: center;

  &__wrapper {
    @include wrapper();
  }
}
</style>
