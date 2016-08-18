<template>
  <div>
    <div :class="{'affix': affixed}" :style="styles">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    offset: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      affixed: false,
      styles: {},
    };
  },
  methods: {
    getScroll(w, top) {
      let ret = w[`page${(top ? 'Y' : 'X')}Offset`];
      const method = `scroll${top ? 'Top' : 'Left'}`;
      if (typeof ret !== 'number') {
        const d = w.document;
        // ie6,7,8 standard mode
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
          // quirks mode
          ret = d.body[method];
        }
      }
      return ret;
    },
    getOffset(element) {
      const rect = element.getBoundingClientRect();
      const body = document.body;
      const clientTop = element.clientTop || body.clientTop || 0;
      const clientLeft = element.clientLeft || body.clientLeft || 0;
      const scrollTop = this.getScroll(window, true);
      const scrollLeft = this.getScroll(window);
      return {
        top: rect.top + scrollTop - clientTop,
        left: rect.left + scrollLeft - clientLeft,
      };
    },
    handleScroll() {
      const scrollTop = this.getScroll(window, true) + this.offset;// handle setting offset
      const elementOffset = this.getOffset(this.$el);
      if (!this.affixed && scrollTop > elementOffset.top) {
        this.affixed = true;
        this.styles = {
          top: `${this.offset}px`,
          left: `${elementOffset.left}px`,
          width: `${this.$el.offsetWidth}px`,
        };
      }
      if (this.affixed && scrollTop < elementOffset.top) {
        this.affixed = false;
        this.styles = {};
      }
    },
  },
  ready() {
    document.addEventListener('scroll', this.handleScroll);
    document.addEventListener('resize', this.handleScroll);
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('resize', this.handleScroll);
  },
};
</script>
<style>
.affix{
  position: fixed;
}
</style>
