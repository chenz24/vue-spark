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
          <tab-pane label="Music" :on-tab-click="cb2">{{ msg }}</tab-pane>
          <tab-pane label="Videos" :on-tab-click="cb1" selected>Video Tab</tab-pane>
          <tab-pane label="Documents" disabled>Document Tab</tab-pane>
        </tabs>
      </div>
      <div class="column is-flex">
        <tabs type="toggle">
          <tab-pane label="Pictures">Pictures Tab</tab-pane>
          <tab-pane label="Music">Music Tab</tab-pane>
          <tab-pane label="Videos">Video Tab</tab-pane>
          <tab-pane label="Documents">Document Tab2</tab-pane>
        </tabs>
      </div>
    </div>
    <div class="columns">
      <div class="column is-2">
        <dropdown text="button下拉" type="button" class="is-primary">
          <div slot="dropdown-content"><p>sadfsdf</p><p>sadfsdf</p><p>sadfsdf</p></div>
        </dropdown>
      </div>
      <div class="column is-2">
        <dropdown text="下拉菜单">
          <ul slot="dropdown-menu">
            <li><a href="javascript:void(0)">link1 link1</a></li>
            <li><a href="">link1 link1</a></li>
            <li><a href="">link1 link1</a></li>
            <li><a href="">link1 link1</a></li>
          </ul>
        </dropdown>
      </div>
      <div class="column is-2">
        <dropdown text="button下拉" type="button" class="is-success">
          <ul slot="dropdown-menu">
            <li><a href="javascript:void(0)">link1 link1</a></li>
            <li><a href="">第一个菜单项</a></li>
            <li><a href="">第二个菜单项</a></li>
            <li><a href="">第三个菜单项</a></li>
          </ul>
        </dropdown>
      </div>
      <div class="column is-3">
        <datepicker :config="{ wrap: true }" placeholder="填写日期" readonly>
          <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
          <a class="button" data-clear><i class="fa fa-close"></i></a>
        </datepicker>
      </div>
      <div class="column">
        <datepicker :config="{ }" placeholder="填写日期" readonly></datepicker>
      </div>
    </div>
    <div class="columns">
      <div class="column is-4">
        <breadcrumb :list="links"></breadcrumb>
      </div>
      <div class="column is-4">
        <breadcrumb>
          <li><a href="">首页</a></li>
          <li><a href="">新闻中心</a></li>
          <li><a href="">国内新闻</a></li>
          <li><a href="">奥运取得第16金</a></li>
        </breadcrumb>
      </div>
      <div class="column">
        <affix>
          <div class="notification">
            <button class="delete"></button>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </div>
        </affix>
      </div>
    </div>
    <div style="height: 1900px"></div>
  </div>
</template>

<script>
import Tooltip from './spark/Tooltip.vue';
import Modal from './spark/Modal.vue';
import { Tabs, TabPane } from './spark/tab';
import Dropdown from './spark/Dropdown';
import Datepicker from './spark/datepicker/Datepicker.vue';
import Breadcrumb from './spark/Breadcrumb';
import Affix from './spark/Affix';

export default {
  data() {
    return {
      msg: 'Hello World!',
      tips: 'show tips',
      showModal: false,
      cb: () => {
        console.log(this.msg);
      },
      links: [
        { name: '首页', path: '/' },
        { name: '全部比赛', path: '/tournament' },
        { name: '创建比赛', path: '/create' },
        { name: '竞速赛,比赛中...' },
      ],
    };
  },
  components: {
    Tooltip,
    Modal,
    Tabs,
    TabPane,
    Dropdown,
    Datepicker,
    Breadcrumb,
    Affix,
  },
  methods: {
    cb1() {
      console.log('cb1');
    },
    cb2() {
      console.log(this.tips);
    },
  },
};
</script>
