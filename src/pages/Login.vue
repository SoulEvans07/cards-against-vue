<template>
    <div class="container">
        <div class="black-deck">
            <div class="card bottom-card">
                <div class="black-card">
                    <div>There are currently x<br/>rooms available.</div>
                </div>
            </div>
            <div class="card second-card">
                <div class="black-card">
                    <div>Login</div>
                    <br><br>
                    <div>Your username is <br><span>_________________</span></div>
                    <br>
                    <div>Your password is <br><span>_____________________</span></div>
                </div>
            </div>
            <div class="card third-card">
                <div class="black-card">
                    <div>Don't have an account?</div>
                    <br>
                    <input type="button" class="btn white-btn" value="Register"
                           @click="redir_register"/>
                </div>
            </div>
        </div>
        <div class="white-deck">
            <div class="card empty-card">
                <div class="white-card"></div>
            </div>
            <div class="card second-empty-card">
                <div class="white-card"></div>
            </div>
            <div class="card flash-card">
                <div class="white-card">
                    <div v-if="flash" class="flash">{{this.flash}}</div>
                </div>
            </div>
            <div class="card username-or-email-card">
                <div class="white-card" v-bind:class="{ error: this.flash !== null }">
                    <input type="text" placeholder="Username"
                           v-model="username" v-on:keyup.enter="login"/>
                </div>
            </div>
            <div class="card password-card">
                <div class="white-card" v-bind:class="{ error: this.flash !== null }">
                    <input type="password" placeholder="Password"
                           v-model="password" v-on:keyup.enter="login"/>
                </div>
            </div>
            <div class="card login-card">
                <div class="white-card">
                    <input type="button" class="btn black-btn" value="Login"
                           @click="login"/>
                </div>
            </div>
            <div class="card forgot-pwd-card">
                <div class="white-card">
                    <input type="button" class="btn black-btn" value="Forgot password?"
                           @click="redir_forgot"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import apiService from '../services/apiService'
  import router from '../router'
  import vars from '../vars'

  export default {
    props: [],
    data() {
      return {
        username: null,
        password: null,
        flash: null
      };
    },
    methods: {
      login: function () {
        apiService.post(vars.baseurl + '/auth/login', {
          username: this.username,
          password: this.password
        }).then((res) => {
          this.$store.dispatch('login', {
            user: res.data.user,
            token: res.data.token
          });
          router.push('/lobby');
        });
      },
      redir_forgot: function () {
        router.push('/forgotten');
      },
      redir_register: function () {
        router.push('/register');
      }
    }
  }
</script>

<style scoped>
    .flash {
        color: red;
        font-size: 12px;
    }

    div.error {
        border-color: rgba(237, 0, 0, 0.50);
        box-shadow: 0 0 10px 0 rgba(237, 0, 0, 0.50);
    }

    .container {
        display: flex;
        flex-direction: row;
        padding: 40px 0;
        justify-content: center;
        background: #333333;
    }

    .white-deck {
        margin: 0 60px;
    }

    .black-deck {
        margin: 0 60px;
        font-weight: bold;
    }

    .card {
        position: relative;
        border-radius: 10px;
        min-width: 300px;
        max-width: 300px;
        min-height: 420px;
        max-height: 420px;
        box-shadow: -15px 15px 0 0 rgba(0, 0, 0, 0.25);
    }

    .card * {
        font-size: 20px;
    }

    .card input {
        width: 100%;
        outline: none;
    }

    .black-card {
        padding: 15px;
        border-radius: 10px;
        height: 420px;
        border: 1px solid #2d2d2d;
        background: black;
        color: white;
    }

    .white-card {
        padding: 15px;
        border-radius: 10px;
        height: 420px;
        border: 1px solid #bebebe;
        background: white;
        color: black;
    }

    .white-card * {
        background: white;
        font-size: 18px;
    }

    .white-card input[type="text"], input[type="password"] {
        border: none;
    }

    .bottom-card {
        transform: rotate(-2deg);
    }

    .second-card {
        top: -340px;
        transform: rotate(1.5deg);
    }

    .third-card {
        top: -520px;
        transform: rotate(-1deg);
    }

    .empty-card {
        left: -5px;
        transform: rotate(1.5deg);
    }

    .second-empty-card {
        left: -5px;
        top: -380px;
        transform: rotate(-1deg);
    }

    .flash-card {
        left: -5px;
        top: -760px;
        transform: rotate(2deg);
    }

    .username-or-email-card {
        top: -1100px;
        transform: rotate(-1deg);
    }

    .password-card {
        top: -1445px;
        transform: rotate(2.5deg);
    }

    .login-card {
        top: -1800px;
        transform: rotate(-1deg);
    }

    .btn {
        margin: 5px 0 0 0;
        border-radius: 3px;
        padding: 10px;
    }

    .white-btn {
        background: #f1f1f1;
        color: black;
        border: 1px solid white;
    }

    .white-btn:hover {
        background: #e6e6e6;
    }

    .white-btn:active {
        background: white;
    }

    .black-btn {
        background: #191919;
        color: white;
        border: 1px solid black;
    }

    .black-btn:hover {
        background: #222222;
    }

    .black-btn:active {
        background: black;
    }

</style>
