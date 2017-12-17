<template>
  <div>
    <img src="../assets/torshi-logo.jpg" class="logo">
    <h1>{{ msg }}</h1>
    <h4>{{ slogan }}</h4>
    <ul>
      <li><router-link to="/overview">Overview</router-link></li>
      <li><router-link to="/features">Features</router-link></li>
      <li><router-link to="/tags">Tags</router-link></li>
      <li><router-link to="/graphs">Graphs</router-link></li>
      <li><router-link to="/reports">Reports</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Torshi',
      slogan: 'Your Advanced Cucumber Report'
    }
  }
}
</script>

<style scoped>
h1, h4 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #EFD13B;
  color: #C9A944;
  color: #B19E40;
}
</style>
