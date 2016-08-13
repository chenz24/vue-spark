<template>
  <ul class="breadcrumb">
    <li v-for="item in list">
      <a v-link="{ path: item.path }" :class="{ active: isLast($index) }">{{ item.name }}</a>
      <span class="breadcrumb-separator" v-if="!isLast($index)">{{ separator }}</span>
    </li>
    <slot></slot>
  </ul>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => { []; },
    },
    separator: {
      type: String,
      default: '>',
    },
  },
  methods: {
    isLast(index) {
      return index === this.list.length - 1;
    },
  },
};
</script>
<style lang="scss">
.breadcrumb{
  li{
    display: inline-block;
    margin-right: 5px;
    a.active{
      color: #666;
      cursor: text;
    }
  }
}
.breadcrumb-separator{
  margin-left: 3px;
}
</style>
