<template>
<nav class="navbar navbar-expand-lg navcuu">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">xinyu tian</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Read Me</router-link>
        </li>


      </ul>

<router-link class="nav-link" to="/"><button class="btn btn-outline-light">Login</button> </router-link>
<router-link class="nav-link" to="/register"><button class="btn btn-outline-light">Register</button> </router-link>
  
    </div>
  </div>
</nav>


  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.navcuu{
  background-color:rgb(111,147,187);
  color: white;
}
.nav-link{
  color:white;
}
.navbar-brand{
  color:white;
}
</style>
