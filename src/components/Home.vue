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
      <div class="block is-flex">
        <tabs animation="slide" :only-fade="false">
          <tab-pane label="Pictures">Pictures Tab</tab-pane>
          <tab-pane label="Music">Music Tab</tab-pane>
          <tab-pane label="Videos" selected>Video Tab</tab-pane>
          <tab-pane label="Documents" disabled>Document Tab</tab-pane>
        </tabs>
      </div>
      <div class="column is-flex">
        <tabs type="toggle">
          <tab-pane label="Pictures">Pictures Tab</tab-pane>
          <tab-pane label="Music">Music Tab</tab-pane>
          <tab-pane label="Videos">Video Tab</tab-pane>
          <tab-pane label="Documents">Document Tab</tab-pane>
        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Tooltip from './spark/Tooltip.vue';
import Modal from './spark/Modal.vue';
import { Tabs, TabPane } from './spark/tab';

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
    Tabs,
    TabPane,
  },
  methods: {
    cb2() {
      console.log(this.tips);
    },
  },
};
</script>
