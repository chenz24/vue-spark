<template>
  <div class="card is-fullwidth collapse-item" :class="{ 'is-active': isactive }">
    <header class="card-header" @click="toggle">
      <p class="card-header-title">{{ title }}</p>
      <a class="card-header-icon"><i class="fa fa-angle-right"></i></a>
    </header>
    <div class="card-content animated" v-show="isactive" :transition="transition" :transition-mode="transitionMode">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    isactive: {
      type: Boolean,
      default: false,
    },
    transition: {
      type: String,
      default: 'fade-expand',
    },
    transitionMode: {
      type: String,
      default: 'collapsed-fade',
    },
  },
  data() {
    return {
    };
  },
  computed: {
    index() {
      return this.$parent.$collapseItems.indexOf(this);
    },
  },
  methods: {
    toggle() {
      this.isactive = !this.isactive;
      this.$parent.setActiveIndex(this.index);
    },
  },
};
</script>
<style lang="scss">
  .collapse-item{
    .card-header{
      cursor: pointer;
    }
    .card-content{
      padding: 0 20px;
      .content{
        padding: 20px 0;
      }
    }
    .card-header-icon{
      transition: transform .377s ease;
    }
    &.is-active{
      .card-header-icon{
        transform: rotate(90deg);
      }
    }
  }
</style>

