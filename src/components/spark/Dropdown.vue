<template>
 <div class="dropdown" :class="{ open: show, }" v-on-clickaway="clicked">
   <span v-if="!type" class="dropdown-trigger {{ class }}" @click="toggle($event)">
     <a href="javascript:void(0)">{{ text }}</a>
     <i class="fa fa-caret-down"></i>
   </span>
   <a v-if="type==='button'" class="button {{ class }}" @click="toggle($event)">
     <span>{{ text }}</span>
     <span class="icon"><i class="fa fa-caret-down"></i></span>
   </a>
   <slot name="dropdown-triger"></slot>
   <slot name="dropdown-menu"></slot>
   <slot name="dropdown-content"></slot>
 </div>
</template>
<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  mixins: [clickaway],
  props: {
    type: String,
    text: String,
    class: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: false,
    };
  },

  computed() {
  },

  ready() {
    const menuDom = this.$el.querySelector('[slot="dropdown-menu"]');
    if (menuDom) {
      menuDom.classList.add('dropdown-menu');
      menuDom.addEventListener('click', () => {
        this.clicked();
      });
    }
    const dropDownContent = this.$el.querySelector('[slot="dropdown-content"]');
    if (dropDownContent) {
      dropDownContent.classList.add('dropdown-menu');
    }
  },

  methods: {
    toggle() {
      this.show = !this.show;
    },
    clicked() {
      this.show = false;
    },
  },
};
</script>
<style lang="scss">
  .dropdown{
    position: relative;
    .dropdown-trigger{
      i{
        vertical-align: baseline;
      }
    }
    .button{
      .icon{
        width: 18px;
        margin-left: 0;
        font-size: 16px;
      }
    }
    .dropdown-trigger{
      cursor: pointer;
    }
    .dropdown-menu{
      display: none;
      position: absolute;
      top: 100%;
      margin: 5px 0 0;
      padding: 8px 0 5px;
      z-index: 15;
      list-style: none;
      border-radius: 4px;
      box-shadow: 0 0 5px 0 #cbcbcb;
      background-color: #fff;
      li{
        display: block;
        padding: 0 20px;
        line-height: 25px;
        cursor: pointer;
        &:hover{
          background: #f6f6f6;
        }
        a{
          display: block;
        }
      }
    }
    &.open{
      .dropdown-menu{
        display: block;
      }
    }
  }
</style>
