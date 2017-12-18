<template>
  <div id="app">
    <nav id="nav">
      <ul class="nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/overview">Overview</router-link></li>
        <li><router-link to="/features">Features</router-link></li>
        <li><router-link to="/tags">Tags</router-link></li>
        <li><router-link to="/graphs">Graphs</router-link></li>
        <li><router-link to="/reports">Reports</router-link></li>
      </ul>
    </nav>
    <div id="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
}
#app {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas:
    "header  header  header"
    "sidebar content rsidebar"
    "footer  footer  footer";
}
#nav {
  grid-area: header;
  background-color: #322B25;
  padding: 15px 0;
}
#nav a {
  color: #C9A944;
  text-decoration: none;
}
ul.nav {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
ul.nav li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #EFD13B;
  color: #C9A944;
  color: #B19E40;
}
#container {
  grid-area: content;
}
.page-header {

}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-color: grey;
}
thead, tbody {
  vertical-align: middle;
}
th:first-child, td:first-child {
  padding-left: 0;
}
th {
  font-weight: 500;
}
th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #E1E1E1;
}
</style>
