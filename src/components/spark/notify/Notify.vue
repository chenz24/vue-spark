<template>
  <div :class="['notification', 'animated', type ? `is-${type}` : '']" :transition="transition" transition-mode="in-out">
    <button class="delete touchable" @click="close()"></button>
    <div class="wrap-icon"><i :class="['fa', `fa-${icon}`, is_loading ? 'fa-spin' : '']"></i></div>
    <div class="title is-5" v-if="title">{{ title }}</div>
    {{ message }}
  </div>
</template>
<script>
import Vue from 'vue';
/*eslint-disable */
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    direction: {
      type: String,
      default: 'right',
    },
    duration: {
      type: Number,
      default: 4500,
    },
    container: {
      type: String,
      default: '.notifications',
    },
  },
  data() {
    return {
      $_parent_: null,
      is_loading: false,
    };
  },
  created() {
    if (this.type === 'loading') this.is_loading = true;
    let $parent = this.$parent;
    if (!$parent) {
      let parent = document.querySelector(this.container);
      if (!parent) {
        parent = document.createElement('div');
        parent.classList.add(this.container.replace('.', ''));
        const Notifications = Vue.extend();
        $parent = new Notifications({
          el: parent,
        }).$appendTo(document.body);
      }
      // Hacked.
      this.$_parent_ = parent.__vue__;
    }
  },
  compiled() {
    if (this.$_parent_) {
      this.$appendTo(this.$_parent_.$el);
      delete this.$_parent_;
    }
  },
  computed: {
    transition() {
      return `bounce-${this.direction}`;
    },
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
    },
  },
  ready() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => this.close(), this.duration);
    }
  },
  methods: {
    close() {
      clearTimeout(this.timer);
      this.$destroy(true);
    },
  },
};
/*eslint-disable */
</script>
<style lang="scss">
@import '~bulma/sass/utilities/variables';
@import '~bulma/sass/utilities/mixins';

.notifications {
  position: fixed;
  top: 20px;
  right: 0;
  z-index: 1024 + 233;
  pointer-events: none;

  @include tablet() {
    max-width: 320px;
  }

  .notification {
    margin: 10px;
    padding-left: 40px;
  }
}

.notification {
  position: relative;
  min-width: 240px;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  pointer-events: all;
}

.wrap-icon{
  position: absolute;
  left: 7px;
  top: 50%;
  margin-top: -11px;
  width: 25px;
  height: 25px;
  i{
    font-size: 21px;
  }
}
</style>
