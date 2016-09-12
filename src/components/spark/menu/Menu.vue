<template>
  <aside class="menu white">
    <div class="menu-topbar">
      <a class="topbar-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
          <path d="M 4 4 L 44 4 L 44 44 Z" fill="#a88add"></path>
          <path d="M 4 4 L 34 4 L 24 24 Z" fill="rgba(0,0,0,0.15)"></path>
          <path d="M 4 4 L 24 4 L 4  44 Z" fill="#0cc2aa"></path>
        </svg>
        <span class="hidden-folded">Vue-Spark</span>
      </a>
    </div>
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><a href="#"><i class="fa fa-weibo"></i>Dashboard</a></li>
      <li><a href="#"><i class="fa fa-wechat"></i>Customers</a></li>
    </ul>
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><a href="#"><i class="fa fa-qq"></i>Team Settings</a></li>
      <li class="is-active">
        <a class="is-active" href="#" @click="toggleOpen()">
          <i class="fa fa-twitter"></i>
          Manage Your Team
          <span class="nav-right"><i class="fa fa-caret-down"></i></span>
        </a>
        <ul>
          <li><a href="#">Members</a></li>
          <li><a href="#">Plugins</a></li>
          <li><a href="#">Add a member</a></li>
        </ul>
      </li>
      <li><a href="#">Invitations</a></li>
      <li><a href="#">Authentication</a></li>
    </ul>
    <p class="menu-label">
      Transactions
    </p>
    <ul class="menu-list">
      <li><a href="#">Payments</a></li>
      <li><a href="#">Transfers</a></li>
      <li><a href="#">Balance</a></li>
    </ul>
  </aside>
</template>
<script>
export default {
  methods: {
    toggleOpen() {

    },
  },
};
</script>
<style lang="scss">
.white{
  background-color: #fff;
}
.menu{
}
.menu-topbar{
  border: none;
  margin: 0;
  padding: 0 15px;
  min-height: 45px;
  line-height: 45px;
  .topbar-logo span{
    display: inline-block;
    line-height: .8;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;
    color: rgba(0,0,0,.87);
  }
}
.menu-label:not(:first-child) {
  margin-top: 15px;
}
.menu-label{
  padding: 0 17px;
}
.menu-list{
  li{
    ul{
      border-left: none;
      margin: 0;
      padding-left: 0;
    }
  }
  & > li li{
    a{
      padding-left: 50px;
    }
  }
  & > li.is-active{
    background-color: rgba(0,0,0,.065);
  }
}
.menu-list a{
  padding: 5px 16px;
  line-height: 25px;
  border-radius: 0;
  color: #000;
  opacity: .75;
  i{
    width: 15px;
    margin-right: 15px;
    line-height: 23px;
  }
  .nav-right{
    float: right;
    i{
      margin-right: 0;
    }
  }
}
</style>
