<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    created() {
      let user = localStorage.getItem('user');
      if (user) {
        this.$store.dispatch('login', JSON.parse(user));
      }
    }
  }

  Array.prototype.asyncForEach = async function (callback) {
    for (let index = 0; index < this.length; index++) {
      await callback(this[index])
    }
  };
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    }
</style>
