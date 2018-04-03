<template>
  <div :class="$options.name">
    <app-hero>
      <template slot="headline">
        List
      </template>

      <p>
        This is an example for a list of content (e.g products).
        consetetur sadipscing elitr, sed diam nonumy irmod tempor
        invidunt ut labore et dolore magna
      </p>
    </app-hero>

    <app-content-list :class="`${$options.name}__contentList`">
      <app-content-list-item>
        <template slot="figure">
          <img
            src="http://via.placeholder.com/76x76"
            alt="Placeholder image">
        </template>
        <template slot="headline">Lorem Ipsum</template>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor inviduntt.
        </p>
      </app-content-list-item>
      <app-content-list-item>
        <template slot="figure">
          <img
            src="http://via.placeholder.com/76x76"
            alt="Placeholder image">
        </template>
        <template slot="headline">Lorem Ipsum</template>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor inviduntt.
        </p>
      </app-content-list-item>
      <app-content-list-item>
        <template slot="figure">
          <img
            src="http://via.placeholder.com/76x76"
            alt="Placeholder image">
        </template>
        <template slot="headline">Lorem Ipsum</template>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor inviduntt.
        </p>
      </app-content-list-item>
      <app-content-list-item>
        <template slot="figure">
          <img
            src="http://via.placeholder.com/76x76"
            alt="Placeholder image">
        </template>
        <template slot="headline">Lorem Ipsum</template>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor inviduntt.
        </p>
      </app-content-list-item>
    </app-content-list>
  </div>
</template>

<script>
import AppContentList from '../app/AppContentList.vue';
import AppContentListItem from '../app/AppContentListItem.vue';
import AppHero from '../app/AppHero.vue';

export default {
  name: `PageList`,
  components: {
    AppContentList,
    AppContentListItem,
    AppHero,
  },
};
</script>

<style lang="scss" scoped>
.PageList {
  $section-spacing: 3em;

  &__contentList {
    margin-top: $section-spacing;
  }
}
</style>
