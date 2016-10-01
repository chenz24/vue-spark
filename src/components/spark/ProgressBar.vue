<template>
  <div class="progress" :class="{ [`progress-striped`]: striped, animated: animated}">
    <div class="progress-bar" :class="{ [`is-${type}`]: type, [`is-${size}`]: size, }" :style="{width: percent + '%'}">
      <span v-if="showinfo">{{ percent }}%</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
    },
    percent: {
      type: Number,
      required: true,
      default: 0,
    },
    striped: Boolean,
    animated: Boolean,
    showinfo: Boolean,
  },
};
</script>
<style lang="scss">
  .progress {
    display: block;
    width: 100%;
    height: 1rem;
    margin-bottom: 1rem;
    border-radius: .25rem;
    overflow: hidden;
    background-color: rgba(0,0,0,.065);
  }
  .progress-bar {
    display: inline-block;
    float: left;
    height: 100%;
    text-align: center;
    border-radius: .25rem;
    background-color: #0074d9;
    font-size: .8em;
    color: rgba(255,255,255,.9);
    -webkit-transition: width .6s ease;
    transition: width .6s ease;
  }
  .progress-bar-striped, .progress-striped .progress-bar {
    background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-image: -o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    -webkit-background-size: 40px 40px;
    background-size: 40px 40px;
  }
  .progress-bar.animated, .progress.animated .progress-bar {
    -webkit-animation: progress-bar-stripes 2s linear infinite;
    -o-animation: progress-bar-stripes 2s linear infinite;
    animation: progress-bar-stripes 2s linear infinite;
  }
  @-webkit-keyframes progress-bar-stripes {
    from {
      background-position:40px 0
    }
    to {
      background-position:0 0
    }
  }
  @-o-keyframes progress-bar-stripes {
    from {
      background-position:40px 0
    }
    to {
      background-position:0 0
    }
  }
  @keyframes progress-bar-stripes {
    from {
      background-position:40px 0
    }
    to {
      background-position:0 0
    }
  }
</style>
