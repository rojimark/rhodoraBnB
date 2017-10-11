<template>
  <div id="app">
  <div>
   <img class="HomeLogo" src="./assets/RhodoraLogo.jpg" alt="" >
       <a href="#">
      <!-- <img src="./assets/RhodoraLogo.jpg" alt=""> -->
    </a>
    <h4>Rhodora BnB</h4>
      <a href="https://www.facebook.com/RhodoraBedAndBreakfast/"><i class="fa fa-facebook-square fa-3x"></i></a>
      <i class="fa fa-twitter-square fa-3x" aria-hidden="true"></i>
      <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
      <nav>
    <div class="nav-wrapper teal z-depth-3">
      <a href="#" class="brand-logo"></a>
      
      <ul id="nav-mobile" class="right" >
        <li><a><router-link to='/' exact>Home</router-link></a></li>
        <li><a href="#"><router-link to='/about' exact>About</router-link></a></li>
        <li><a href="#"><router-link to='/rooms' exact>Rooms</router-link></a></li>
        <li><a href="#"><router-link to='/contacts' exact>Contacts</router-link></a></li>
      </ul>
    </div>
  </nav>
  </div>
      <router-view></router-view>

    <footer class="page-footer teal">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Rhodora Bed and Breakfast</h5>
                <p class="grey-text text-lighten-4">187 Jayme Building, S. B. Cabahug St., Ibabao
                  Mandaue City</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">About</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Rooms</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyrightaw">
            <div class="container">
            © 2017 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
  </div>
</template>

<script>

import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>


<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

.HomeLogo{
  max-width:  15%;
  max-height: auto;
  border-radius: 10%;
}

.fa-facebook-square {
  color: teal;
}
.fa-twitter-square {
  color: teal;
}
.fa-instagram {
  color: teal;
}

h4{
  margin-top: 0px;
  font-size: 48px;
  font-family: 'Niconne', cursive;
}

</style>
