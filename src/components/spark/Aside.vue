<template>
  <div v-if="show" :transition="transitionName" transition-mode="in-out" :style="{width:aWidth}"
       :class="{'animated': true, 'aside': true, 'left': placement ==='left', 'right': placement ==='right'}">
    <!--<div class="modal-background"></div>-->
    <div class="aside-header modal-card-head">
      <p class="modal-card-title">
        <slot name="title">
          {{ title }}
        </slot>
      </p>
      <button class="delete" @click="close"></button>
    </div>
    <div class="aside-body">
      <slot></slot>
    </div>
    <div class="aside-footer"></div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: 'left',
    },
    title: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
    },
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
  },
  computed: {
    transitionName() {
      let transitionName = 'fade-horizontal-ltl';
      if (this.placement === 'right') transitionName = 'slide-horizontal-rtr';
      return transitionName;
    },
    aWidth() {
      let aWidth = 'auto';
      if (this.width) aWidth = `${this.width}px`;
      return aWidth;
    },
  },
};
</script>
<style lang="scss">
.aside{
  /*display: none;*/
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 999;
  &.left{
    left: 0;
  }
  &.right{
    right: 0;
  }
}
.aside-header{
  border-bottom:1px solid #f4f4f4;
  padding: 15px;
}
</style>
