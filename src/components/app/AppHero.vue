<template>
  <div :class="$options.name">
    <app-headline>
      <slot name="headline"/>
    </app-headline>

    <app-intro :class="`${$options.name}__intro`">
      <slot/>
    </app-intro>

    <app-button
      v-if="action"
      :to="action.to"
      :class="`${$options.name}__action`">
      {{ action.label }}
    </app-button>
  </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppHeadline from './AppHeadline.vue';
import AppIntro from './AppIntro.vue';

export default {
  name: `AppHero`,
  components: {
    AppButton,
    AppHeadline,
    AppIntro,
  },
  props: {
    action: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/objects/wrapper.mixin';

.AppHero {
  @include wrapper(s);

  text-align: center;

  &__intro {
    margin-top: 1em;
  }

  &__action {
    margin-top: 1em;
    font-size: 1.25em;
  }
}
</style>
