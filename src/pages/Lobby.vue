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
      if (this.$store.state.user === null) {
        this.$router.push('/welcome');
        return;
      }
      apiService.get('/users/list').then(res => {
        this.users = res.data;
      });
    }
  }
</script>


<style scoped>

</style>
