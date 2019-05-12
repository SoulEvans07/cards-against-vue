<template>
    <div>
        <div class="navbar">
            <div class="filler"></div>
            <div class="right-btn" @click="redir_register">Register</div>
            <div class="right-btn" @click="redir_login">Login</div>
        </div>
        <router-view class="router"/>
    </div>
</template>


<script>
  import router from '../router'

  export default {
    props: [],
    data() {
      return {};
    },
    methods: {
      redir_login: function () {
        router.push('/login');
      },
      redir_register: function () {
        router.push('/register');
      }
    }
  }
</script>


<style>
    .navbar {
        background-color: #000000;
        min-height: 45px;
        height: 45px;
        color: #ffffff;
        display: flex;
    }

    .navbar * {
        padding: 10px;
        font-size: 21.5px;
        font-weight: bold;
    }

    .title {
        flex-grow: 0;
        cursor: pointer;
    }

    .filler {
        flex-grow: 1;
    }

    .right-btn {
        flex-grow: 0;
        cursor: pointer;
    }

    .right-btn:hover {
        background-color: #222222;
    }

    .right-btn:active {
        background-color: #333333;
    }

    .profile {
        flex-grow: 0;
    }
</style>
