<template>
    <div>
        <ul>
            <li v-for="player in this.users">{{player.id}} {{player.username}}</li>
        </ul>
    </div>
</template>


<script>
  import apiService from '../services/apiService'

  export default {
    data() {
      return {
        users: []
      }
    },
    mounted() {
      apiService.get('/users/list').then(res => {
        this.users = res.data;
      });
    }
  }
</script>


<style>

</style>
