<template>
  <div class="container">
    <div style="height:50px"></div>
    <div class="columns">
      <tooltip label="top-right" placement="top">
        <button class="button is-primary has-text-centered">
          <span>top-right</span>
        </button>
      </tooltip>
    </div>
  </div>
</template>

<script>
import Tooltip from './spark/Tooltip.vue';

export default {
  data() {
    return {
      msg: 'Hello World!',
      tips: '',
    };
  },
  components: {
    Tooltip,
  },
  ready() {
    this.tips = 'asdf';
  },
};
</script>
