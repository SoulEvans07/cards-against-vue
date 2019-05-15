<template>
    <div>
        <div class="register-box">
            <!--<img class="logo" src="../assets/imgs/logo.png">-->
            <!--<img class="logo" src="../assets/imgs/logo.png">-->
            <h1 class="logo">TrackR</h1>
            <!--<div class="register-text">Sign up to see photos and videos from your friends.</div>-->
            <div>
                <div class="register-field-box">
                    <div v-if="flash" class="flash">{{this.flash}}</div>
                    <input type="text" class="register-field" placeholder="Email"
                           v-model="email"
                           v-bind:class="{ error: this.error==='email' }"/>
                    <input type="text" class="register-field" placeholder="Username"
                           v-model="username"
                           v-bind:class="{ error: this.error==='username' }"/>
                    <input type="password" class="register-field" placeholder="Password"
                           v-model="password"
                           v-bind:class="{ error: this.error==='password' }"/>
                    <input type="password" class="register-field" placeholder="Password confirmation"
                           v-model="password_confirm"
                           v-bind:class="{ error: this.error==='password' }"/>
                </div>
                <input type="button" value="Register" class="register-btn"
                       @click="register"/>
            </div>
            <br>
        </div>
        <div class="register-box">
            Have an account? <a class="register-link" @click="redir_login">Log in</a>
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
          router.push('/login');
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

<style>
    .logo {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        text-align: center;
        font-size: 30px;
        width: 80%;
        margin: 10px auto 10px;
    }

    .flash {
        color: red;
        font-size: 12px;
    }

    .register-box {
        background-color: white;
        margin: 30px auto auto;
        padding: 20px;
        width: 300px;
        border: solid 1px #bebebe;
        border-radius: 3px;
        text-align: center;
    }

    .register-text {
        font-weight: bold;
        color: #8d8d8d;
    }

    .register-field-box {
        margin: 10px 0 15px 0;
    }

    .register-field {
        width: 80%;
        padding: 7px;
        margin: 5px;
        background-color: #e9e9e9;
        border: solid 1px #dbdbdb;
        border-radius: 2px;
    }

    .register-field.error {
        border-color: #ed0000;
        box-shadow: 0 0 2px 0 rgba(237, 0, 0, 0.50);
    }

    .register-btn {
        width: 80%;
        background-color: #337ab7;
        color: white;
        border: none;
        padding: 5px;
        border-radius: 2px;
    }

    .register-link {
        color: #2e6da4;
        cursor: pointer;
    }
</style>
