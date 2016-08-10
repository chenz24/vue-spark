<template>
  <div :class="['modal', 'animated', visible ? 'is-active' : '']" :transition="transition" transition-mode="in-out">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-primary" @click="ok">{{ okText }}</a>
        <a class="button" @click="cancel">{{ cancelText }}</a>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    okText: {
      type: String,
      default: 'OK',
    },
    cancelText: {
      type: String,
      default: 'Cancel',
    },
    onOk: {
      type: Function,
      default() {},
    },
    onCancel: {
      type: Function,
      default() {},
    },
    backdrop: {
      type: Boolean,
      default: true,
    },
  },

  compiled() {
    this.$nextTick(() => {
      this.$appendTo(document.body);
    });
  },

  methods: {
    active() {
      this.$el.classList.add('fadeIn');
      this.visible = true;
    },
    deactive() {
      this.visible = false;
    },
    ok() {
      this.onOk();
      this.close();
    },
    cancel() {
      this.onCancel();
      this.close();
    },
    close() {
      this.visible = false;
    },
    open() {
      this.active();
    },
  },

  watch: {
    visible(val) {
      if (val === true) {
        this.active();
      }
    },
  },
};
</script>
