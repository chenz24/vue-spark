import Vue from 'vue';
import Notify from './Notify.vue';

function open(propsData) {
  const NotifyComponent = Vue.extend(Notify);
  return new NotifyComponent({
    el: document.createElement('div'),
    propsData,
  });
}

export default{
  open(params) {
    const defaultPara = { direction: 'right', duration: 4500 };
    const propsData = Object.assign(defaultPara, params);
    return open(propsData);
  },
  success(params) {
    const defaultPara = { type: 'success', direction: 'right', duration: 4500 };
    const propsData = Object.assign(defaultPara, params);
    return open(propsData);
  },
  error(params) {
    const defaultPara = { type: 'error', direction: 'right', duration: 4500 };
    const propsData = Object.assign(defaultPara, params);
    return open(propsData);
  },
  warn(params) {
    const defaultPara = { type: 'warn', direction: 'right', duration: 4500 };
    const propsData = Object.assign(defaultPara, params);
    return open(propsData);
  },
  loading(params) {
    const defaultPara = { type: 'info', direction: 'right', duration: 0 };
    const propsData = Object.assign(defaultPara, params);
    return open(propsData);
  },
};
