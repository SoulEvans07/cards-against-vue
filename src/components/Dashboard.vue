<template>
    <div>
        <div class="navbar">
            <template v-if="this.$router.currentRoute.name !== 'welcome'">
                <div class="title" @click="home">Cards Against Humanity</div>
            </template>
            <div class="filler"></div>
            <template v-if="this.$store.state.user !== null">
                <div class="right-btn" @click="logout">Logout</div>
            </template>
            <template v-if="this.$store.state.user === null">
                <div class="right-btn" @click="redir_register"
                     v-if="this.$router.currentRoute.name !== 'register'">Register</div>
                <div class="right-btn" @click="redir_login"
                     v-if="this.$router.currentRoute.name !== 'login'">Login</div>
            </template>
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
    mounted() {
    },
    methods: {
      home: function () {
        this.$router.push('/');
      },
      logout: function () {
        this.$store.dispatch('logout');
        this.$router.push('/welcome');
      },
      redir_login: function () {
        router.push('/login');
      },
      redir_register: function () {
        router.push('/register');
      }
    }
  }
</script>


<style scoped>
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

    .router {
        padding: 20px;
    }
</style>
