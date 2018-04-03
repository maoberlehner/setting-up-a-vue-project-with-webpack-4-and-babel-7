<template>
  <li :class="$options.name">
    <div :class="`${$options.name}__wrap`">
      <div :class="`${$options.name}__figure`">
        <slot name="figure"/>
      </div>
      <div :class="`${$options.name}__description`">
        <app-headline :level="3">
          <slot name="headline"/>
        </app-headline>
        <app-text :level="3" :class="`${$options.name}__text`">
          <slot/>
        </app-text>
      </div>
      <div :class="`${$options.name}__actions`">
        <slot name="actions">
          <app-button>Buy me!</app-button>
        </slot>
      </div>
    </div>
  </li>
</template>

<script>
import AppButton from './AppButton.vue';
import AppHeadline from './AppHeadline.vue';
import AppText from './AppText.vue';

export default {
  name: `AppContentListItem`,
  components: {
    AppButton,
    AppHeadline,
    AppText,
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/objects/card.mixin';
@import '../../scss/objects/layout.mixin';

.AppContentListItem {
  @include card();

  &__wrap {
    @include layout();
  }

  &__figure {
    @include layout__item();

    img {
      display: block;
    }
  }

  &__description {
    @include layout__item(max, 14em);
  }

  &__text {
    margin-top: 0.5em;
  }

  &__actions {
    @include layout__item();

    align-self: center;
  }
}
</style>
