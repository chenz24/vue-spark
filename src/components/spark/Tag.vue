<template>
  <span class="tag"
        :class="{ [`is-${type}`]: type, [`is-${size}`]: size, animated: true }"
        transition="fade"
        transition-mode="out-in">
    <slot></slot>
    <button v-if="closable" class="delete"
            :class="{ [`is-${size}`]: size }" @click="close"></button>
  </span>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      default() {},
    },
  },
  methods: {
    close() {
      this.onClose();
      this.$destroy(true);
    },
  },
};
</script>
