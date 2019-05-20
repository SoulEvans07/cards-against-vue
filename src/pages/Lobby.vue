<template>
    <div>
        <ul>
            <li v-for="room in this.$store.state.rooms">
                <div><b>name:</b> {{room.name}}</div>
                <div><b>visiblity:</b> {{room.visibility === 0 ? 'public' : 'unlisted'}}</div>
                <div><b>creator:</b> {{room.creator.username}}</div>
                <div v-if="room.czar"><b>czar:</b> {{room.czar.user.username}}</div>
                <div><b>players:</b></div>
                <ul>
                    <li v-for="player in room.players">{{player.user.username}}</li>
                </ul>
            </li>
        </ul>
        <hr>
        <div>
            <form>
                <label for="name">Name: </label>
                <input id="name" v-model="new_room.name" type="text"><br>
                <label for="name">Visibility: </label>
                <input id="visibility" v-model="new_room.visibility" type="number" min="0" max="1"><br>
                <input type="button" value="Create Room" @click="createRoom">
            </form>
        </div>
    </div>
</template>


<script>
  import apiService from '../services/apiService'

  export default {
    data() {
      return {
        new_room: {
          name: "",
          visibility: 0
        }
      }
    },
    methods: {
      createRoom: function () {
        apiService.post('/rooms/new', this.new_room).then(res => {
          console.log(res.data);
          this.refreshRoomList();
          this.new_room.name = "";
          this.new_room.visibility = 0;
        }).catch(err => {
          console.error(err);
        })
      },
      refreshRoomList: function () {
        apiService.get('/rooms/list').then(res => {
          this.$store.dispatch('refreshRoomList', res.data);
        });
      }
    },
    mounted() {
      if (this.$store.state.user === null) {
        this.$router.push('/welcome');
        return;
      }
      this.refreshRoomList();
    }
  }
</script>


<style scoped>

</style>
