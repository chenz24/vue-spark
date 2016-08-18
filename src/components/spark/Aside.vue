<template>
  <div v-show="show" :transition="transition" transition-mode="in-out"
        :class="{left: placement === 'left', right: placement === 'right'}">
    <div class="aside">
      <!--<div class="modal-background"></div>-->
      <div class="aside-header modal-card-head">
        <p class="modal-card-title">Aside</p>
        <button class="delete" @click="close"></button>
      </div>
      <div class="aside-body">asdasdf</div>
      <div class="aside-footer"></div>
    </div>
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
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
  },
};
</script>
<style lang="scss">
.aside{
  /*display: none;*/
  position: fixed;
  width: 300px;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
}
.aside-header{
  border-bottom:1px solid #f4f4f4;
  padding: 15px;
}
</style>
