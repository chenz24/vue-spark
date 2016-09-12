<template>
  <div class="carousel">
    <ul class="carousel-indicators">
      <li v-for="item in $carouselItems"
          class="{ 'is-active': isActived($index), }"
          @click.prevent="select($index)">

      </li>
    </ul>
    <div class="carousel-inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    $carouselItems() {
      return this.$children.filter(child => child.isCarouselItem);
    },
  },
  methods: {
    isActived(index) {
      return index === this.selectedIndex;
    },

  },
};
</script>
