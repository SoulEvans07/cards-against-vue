<template>
    <div class="container">
        <div class="card black-card">
            <div>Create an Account</div>
            <br><br>
            <div>Your username is <br><span>_______________________</span></div>
            <br>
            <div>Your email address is <br><span>_________________________</span></div>
            <br>
            <div>Your password is <br><span>_________________________</span></div>
            <br>
            <div>Confirm your password<br><span>_________________________</span></div>
        </div>

        <div class="white-deck">
            <div class="card bottom-card">
                <div class="white-card"></div>
            </div>
            <div class="card second-card">
                <div class="white-card">
                    <div v-if="flash" class="flash">{{this.flash}}</div>
                </div>
            </div>
            <div class="card name-card">
                <div class="white-card" v-bind:class="{ error: this.error==='username' }">
                    <input type="text" placeholder="Username" v-model="username">
                </div>
            </div>
            <div class="card email-card">
                <div class="white-card" v-bind:class="{ error: this.error==='email' }">
                    <input type="text" placeholder="Email" v-model="email">
                </div>
            </div>
            <div class="card password-card">
                <div class="white-card" v-bind:class="{ error: this.error==='password' }">
                    <input type="password" placeholder="Password" v-model="password">
                </div>
            </div>
            <div class="card password-conf-card">
                <div class="white-card" v-bind:class="{ error: this.error==='password' }">
                    <input type="password" placeholder="Password confirmation" v-model="password_confirm">
                </div>
            </div>
            <div class="card register-card">
                <div class="white-card">
                    <input type="button" class="register-btn" value="Register" @click="register">
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
    data() {
      return {
        username: null,
        email: null,
        password: null,
        password_confirm: null,
        error: null,
        flash: null
      }
    },
    methods: {
      register: function () {
        if (this.password !== this.password_confirm) {
          this.error = "password";
          this.flash = "Passwords doesn't match!";
          return;
        }

        apiService.post(vars.baseurl + '/auth/register', {
          username: this.username,
          email: this.email,
          password: this.password
        }).then(res => {
          router.push('/');
        }).catch(err => {
          this.error = err.response.data.field;
          this.flash = err.response.data.message;
        });
      },
      redir_login: function () {
        router.push('/login');
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

    .card {
        position: relative;
        border-radius: 10px;
        min-width: 300px;
        max-width: 300px;
        min-height: 420px;
        max-height: 420px;
        box-shadow: -15px 15px 0 0 rgba(0, 0, 0, 0.25);
    }

    .black-card {
        top: 15px;
        margin: 0 60px;
        border: 1px solid #2d2d2d;
        border-radius: 10px;
        background: black;
        color: white;
        font-size: 20px;
        font-weight: bold;
        padding: 15px;
        transform: rotate(-1deg);
    }

    .white-card {
        width: 300px;
        height: 420px;
        position: relative;
        border-radius: 10px;
        border: 1px solid #bebebe;
        padding: 15px;
        background: white;
    }

    .white-card * {
        font-size: 20px;
    }

    .white-card input {
        width: 100%;
        outline: none;
    }

    .white-card input[type="text"], .white-card input[type="password"] {
        border: none;
    }

    .bottom-card {
        transform: rotate(-2deg);
    }

    .second-card {
        top: -390px;
        transform: rotate(3deg);
    }

    .name-card {
        top: -750px;
        left: -5px;
        transform: rotate(-2deg);
    }

    .email-card {
        top: -1100px;
        left: 5px;
        transform: rotate(1deg);
    }

    .password-card {
        top: -1455px;
        left: 7px;
        transform: rotate(-2deg);
    }

    .password-conf-card {
        top: -1810px;
        left: 5px;
        transform: rotate(-3deg);
    }

    .register-card {
        top: -2150px;
        left: 1px;
        transform: rotate(1deg);
    }

    .register-btn {
        margin: 5px 0 0 0;
        background: #191919;
        color: #ffffff;
        border: 1px solid black;
        border-radius: 3px;
        padding: 10px;
    }

    .register-btn:hover {
        background: #222222;
    }

    .register-btn:active {
        background: #000000;
    }

</style>
