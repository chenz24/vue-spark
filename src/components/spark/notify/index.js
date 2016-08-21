import Vue from 'vue';
import Notify from './Notify.vue';

export default{
  open(propsData = { title: '', message: '', type: 'success', direction: 'right',
    duration: 4500 }) {
    const NotifyComponent = Vue.extend(Notify);
    return new NotifyComponent({
      el: document.createElement('div'),
      propsData,
    });
  },
};
