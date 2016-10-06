<template>
  <div v-if="isactive"
       class="animated step-panel"
       :transition="$parent.transition"
       :transition-mode="transitionMode">
    <slot></slot>
    {{ $parent.transition }}
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    isactive: Boolean,
    transition: {
      type: String,
      default: 'fade-horizontal-ltr',
    },
    transitionMode: {
      type: String,
      default: 'fade-horizontal-ltr',
    },
  },

  computed: {
    index() {
      return this.$parent.$steps.indexOf(this);
    },
    nextTransition() {
      console.log(this.$parent.current);
      return 'ltr';
    },
    prevTransition() {
      return 'rtl';
    },
  },
};
</script>
<style lang="scss">
  .step-panel{
    width: 100%;
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    &[class*="Out"] {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: translateX(0);
      transform: translateY(0);
    }
  }
</style>
