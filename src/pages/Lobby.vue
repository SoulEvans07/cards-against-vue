<template>
    <div>
        <ul>
            <li v-for="room in this.rooms">
                <div><b>name:</b> {{room.name}}</div>
                <div><b>creator:</b> {{room.creator.username}}</div>
                <div v-if="room.czar" ><b>czar:</b> {{room.czar.user.username}}</div>
                <div><b>players:</b></div>
                <ul>
                    <li v-for="player in room.players">{{player.user.username}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>


<script>
  import apiService from '../services/apiService'

  export default {
    data() {
      return {
        rooms: []
      }
    },
    mounted() {
      if (this.$store.state.user === null) {
        this.$router.push('/welcome');
        return;
      }
      apiService.get('/rooms/list').then(res => {
        this.rooms = res.data;
      });
    }
  }
</script>


<style scoped>

</style>
