<template>
    <div class="header-card">
        <h1>Cards<br>Against<br>Humanity</h1>
        <p>A party game<br>for horrible people.</p>
    </div>
</template>

<script>
  export default {
    mounted() {
      if (this.$store.state.user !== null) {
        this.$router.push('/lobby');
      }
    }
  }
</script>

<style>
    .header-card {
        min-height: 40%;
        background: #222222;
        color: #ffffff;
        padding: 30px 30px 30px 100px;
    }

    .header-card h1 {
        margin: 0;
        font-size: 70px;
        font-weight: bold;
        line-height: 95%;
    }

    .header-card p {
        font-size: 27px;
        font-weight: bold;
    }

</style>
