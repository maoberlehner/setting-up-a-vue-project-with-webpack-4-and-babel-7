<template>
  <header :class="$options.name">
    <div :class="`${$options.name}__wrapper`">
      <router-link
        :class="`${$options.name}__logo`"
        :to="{ name: `home` }">
        LOGO
      </router-link>

      <nav :class="`${$options.name}__nav`">
        <ul :class="`${$options.name}__navList`">
          <li :class="`${$options.name}__navItem`">
            <router-link
              :to="{ name: `home` }"
              :class="`${$options.name}__navLink`"
              exact-active-class="is-active">Home</router-link>
          </li>
          <li :class="`${$options.name}__navItem`">
            <router-link
              :to="{ name: `article` }"
              :class="`${$options.name}__navLink`"
              exact-active-class="is-active">Article</router-link>
          </li>
          <li :class="`${$options.name}__navItem`">
            <router-link
              :to="{ name: `list` }"
              :class="`${$options.name}__navLink`"
              exact-active-class="is-active">List</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: `AppHeader`,
};
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.AppHeader {
  padding-top: 1em;
  padding-bottom: 1em;
  background: $color-secondary;

  &__wrapper {
    @include wrapper();

    display: flex;
    align-items: center;
  }

  &__logo {
    text-decoration: none;
    font-weight: 500;

    &,
    &:visited {
      color: inherit;
    }

    @media (min-width: 30em) {
      font-size: 2em;
    }
  }

  &__nav {
    margin-left: 1em;
  }

  &__navList {
    display: flex;
  }

  &__navItem {
    &:not(:first-child) {
      margin-left: 0.5em;

      &::before {
        margin-right: 0.5em;
        content: '|';
      }
    }
  }

  &__navLink {
    text-decoration: none;

    &,
    &:visited {
      color: inherit;
    }

    &:focus,
    &:hover,
    &.is-active {
      text-decoration: underline;
    }
  }
}
</style>
