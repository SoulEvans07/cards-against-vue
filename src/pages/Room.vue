<template>
    <div>
        <h1>{{ this.room.name }}</h1>
        <div><b>players:</b></div>
        <ul>
            <li v-for="player in this.room.players">{{ player.user.username }}</li>
        </ul>

        <input type="button" value="JOIN" @click="joinRoom">
        <input type="button" value="LEAVE" @click="leaveRoom">
    </div>
</template>

<script>
  import apiService from '../services/apiService'

  export default {
    data() {
      return {
        room: {}
      }
    },
    watch: {
      $route: function () {
        this.initRoom();
      }
    },
    methods: {
      joinRoom: function () {
        apiService.post('/rooms/' + this.room.id + '/join', {}).then(res => {
          console.log(res);
          // this.refreshRoomList();
        }).catch(err => {
          console.error(err);
        });
      },
      leaveRoom: function () {
        apiService.post('/room/' + this.room.id + '/leave', {}).then(res => {
          console.log(res);
          // this.refreshRoomList();
        }).catch(err => {
          console.error(err);
        });
      },
      initRoom: function () {
        this.refreshRoomList();
        this.room = {};
        console.log("init: " + JSON.stringify(this.$store.state.rooms));
        if (this.$store.state.rooms) {
          this.$store.state.rooms.forEach(room => {
            if (room.id === parseInt(this.$route.params.id)) {
              this.room = room;
            }
          });

          if (this.room.id === undefined) {
            this.$router.push("/lobby");
          }
        }
      },
      refreshRoomList: function () {
        apiService.get('/rooms/list').then(res => {
          this.$store.dispatch('refreshRoomList', res.data);
        });
      }
    },
    mounted() {
      this.initRoom();
    },
  }
</script>
