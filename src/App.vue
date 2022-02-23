<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f7f7fa;
}




#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/*body::-webkit-scrollbar {*/
/*  display: none; !* for Chrome, Safari, and Opera *!*/
/*}*/

/*body {*/
/*  -ms-overflow-style: none; !* for Internet Explorer, Edge *!*/
/*  scrollbar-width: none; !* for Firefox *!*/
/*  overflow-y: scroll;*/
/*}*/

</style>
<script>
import Navbar from "@/components/Navbar";

export default {
  components: {Navbar}
}
</script>