<template>
  <div class="container">
    <div style="height:50px"></div>
    <div class="columns">
      <tooltip label="top-right" placement="top">
        <button class="button is-primary has-text-centered">
          <span>top-right</span>
        </button>
      </tooltip>
      <div>{{ showModal }}</div>
      <button class="button is-primary" @click="showModal = true">Modal</button>
      <modal title="modal弹出" ok-text="确定" :visible.sync="showModal" :on-ok="cb2">
        <p>modal content</p>
      </modal>
    </div>
  </div>
</template>

<script>
import Tooltip from './spark/Tooltip.vue';
import Modal from './spark/Modal.vue';

export default {
  data() {
    return {
      msg: 'Hello World!',
      tips: 'show tips',
      showModal: false,
      cb: () => {
        console.log(this.msg);
      },
    };
  },
  components: {
    Tooltip,
    Modal,
  },
  methods: {
    cb2() {
      console.log(this.tips);
    },
  },
};
</script>
