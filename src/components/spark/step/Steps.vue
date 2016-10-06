<template>
  <div class="steps-wrap" :class="{ [`${type}`]: type }">
    <div class="step-header">
      <div class="step-item"
           v-for="step in $steps"
           :class="{ 'is-active': current === $index, 'is-done': $index < current,}"
           >
        <div class="step-left">
          <div class="step-icon">
            <span v-if="icon"><i class="fa fa-{{ icon }}"></i></span>
            <span v-if="$index >= current">{{ $index + 1 }}</span>
            <span v-if="$index < current"><i class="fa fa-check"></i></span>
          </div>
        </div>
        <div class="step-desc">
          <span class="step-title">{{ step.title }}</span>
          <div class="step-description">{{ step.description }}</div>
        </div>
      </div>
    </div>
    <div class="step-content is-flex">
      <slot></slot>
    </div>
    <div class="step-footer has-text-right">
      <button class="button is-primary" @click="prev">Prev</button>
      <button class="button is-primary" @click="next">Next</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'pills',
    },
    current: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      margin: 0,
      width: 'auto',
      transition: 'fade-horizontal-rtl',
    };
  },
  computed: {
    $steps() {
      return this.$children;
    },
  },
  ready() {
    this.setActiveIndex(this.current);
    // setting width of step head
    const stepNum = this.$children.length;
    const stepsEl = this.$el.getElementsByClassName('step-item');
    if (this.type === 'pills') {
      for (let i = 0; i < stepsEl.length; i++) {
        stepsEl[i].style.width = `${parseInt(100 / stepNum, 10)}%`;
      }
    } else {
      if (stepsEl.length > 0) {
        const widthOfLastNode = stepsEl[stepsEl.length - 1].clientWidth;
        const margin = - (parseInt(widthOfLastNode, 10) / (stepNum - 1));
        const width = parseInt(100 / (stepNum - 1), 10);
        for (let i = 0; i < stepsEl.length - 1; i++) {
          stepsEl[i].style.width = `${width}%`;
          stepsEl[i].style.marginRight = `${margin}px`;
        }
      }
    }
  },
  watch: {
    current(val, oldVal) {
      const lenth = this.$children.length - 1;
      console.log(val);
      console.log(oldVal);
      if (val > oldVal && val < lenth) {
        this.transition = 'fade-horizontal-rtl';
      } else if (val < oldVal && val > 0) {
        this.transition = 'fade-horizontal-ltr';
      }
    },
  },
  methods: {
    setActiveIndex(index) {
      this.$children.forEach((item, i) => {
        if (i !== index) {
          item.isactive = false;
        } else {
          item.isactive = true;
        }
      });
    },
    next() {
      if (this.current < this.$children.length) {
        this.current += 1;
        this.setActiveIndex(this.current);
      }
    },
    prev() {
      if (this.current > 0) {
        this.current -= 1;
        this.setActiveIndex(this.current);
      }
    },
  },
};
</script>
<style lang="scss">
  .steps-wrap{
    margin-left: 0;
    margin-right: 0;
    display: block;
  }
  .step-header{
    margin-left: 0;
    margin-right: 0;
    display: block;
    .step-item{
      position: relative;
      display: inline-block;
      padding: 12px 20px;
      margin: 0;
      font-size: inherit;
      vertical-align: top;
    }
  }
  .step-content{
    position: relative;
    margin: 20px 0 10px;
    padding: 12px 20px;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    &.is-active{
    }
  }
  .step-left{
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .step-icon{
    width: 26px;
    height: 26px;
    font-size: 16px;
    line-height: 26px;
    color: #fff;
    text-align: center;
    background: #d2d6de;
    border-radius: 50%;
  }
  .step-desc{
    padding-left: 40px;
    margin-left: -5px;
    padding-right: 5px;
    .step-title{
      font-weight: bold;
    }
    .step-description{

    }
  }
  .pills{
    .step-item{
      background-color: #f3f7f9;
      &.is-active{
        color: #fff;
        background-color: #238efa;
        .step-icon{
          color: #238efa;
          background-color: #fff;
        }
      }
    }
  }
  .line{
    .step-item{
      .step-desc{
        position: relative;
        display: inline-block;
        z-index: 8;
        background-color: #fff;
      }
      .step-left{
        z-index: 9;
      }
      .step-icon{
        i{
          vertical-align: text-top;
        }
      }
      &.is-active{
        .step-icon{
          background-color: #238efa;
        }
      }
      &:before, &:after{
        position: absolute;
        top: 50%;
        width: 100%;
        height: 2px;
        content: "";
        background-color: rgba(0, 0, 0, 0.065);
        -webkit-transition: all .4s ease;
        transition: all .4s ease;
      }
      &:after{
        width: 0;
        background-color: #62a8ea;
      }
      &.is-done{
        &:after{
          width: 100%;
        }
        .step-icon{
          background-color: #62a8ea;
        }
      }
      &:before, &:after{
        left: 20px;
      }
      &:last-child{
        &:before, &:after{
          width: 0;
        }
      }
      .step-description{
        position: absolute;
      }

    }
  }
</style>
