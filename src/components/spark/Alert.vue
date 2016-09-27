<template>
  <div class="notification" :class="{ [`is-${type}`]: type }">
    <button v-if="closable" class="delete" @click="close"></button>
    <div class="title is-5" v-if="title">{{ title }}</div>
    <div class="wrap-icon"><i :class="['fa', `fa-${icon}`, is_loading ? 'fa-spin' : '']"></i></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    title: {
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
  computed: {
    icon() {
      if (this.type === 'info') {
        return 'info-circle';
      } else if (this.type === 'success') {
        return 'check-circle';
      } else if (this.type === 'warn') {
        return 'exclamation-triangle';
      } else if (this.type === 'error') {
        return 'times-circle';
      } else if (this.type === 'loading') {
        this.type = 'info';
        return 'spinner';
      }
      return '';
    },
  },
};
</script>
