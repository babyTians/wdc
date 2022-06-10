<template>

  <div class="myForm center" id ="forma">
   <form @submit.prevent="submit">
    <label class="addMargin" for="fname">Current Account Name:</label><br>
    <input class="addMargin1" type="text" id="fname" name="fname" value=""><br>
    <label class="addMargin" for="lname">New Account Name:</label><br>
    <input class="addMargin1" type="text" id="lname2" name="lname" placeholder="Put your Account Name"><br><br>
    <button class="btn btn-primary addMargin2"  type="submit">Finish</button>
    </form>  
    <!-- <button class="btn btn-primary addMargin2"  onclick="passValueToJS2()">Finish</button> -->
    <button class="btn btn-primary addMargin2">Cancel</button>
</div>

  <div id="mySidebar" class="sidebar">
        <!-- <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a> -->
        <router-link to="/account">Account Name</router-link>
        <router-link to="/name">Name</router-link>
        <router-link to="/phone">Phone Number</router-link>
        <router-link to="/password">Password</router-link>
      </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';



@Options({
  components: {
    
  },
})
export default class HomeView extends Vue {}
</script>
<style>
.sidebar {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 100px;
    left: 8px;
    background-color: white;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 130px;
    border: solid rgb(111,147,187) 2px;
    border-radius: 5px;
  }
  
  .sidebar a {

    padding: 20px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: rgb(111,147,187);
    display: block;
    transition: 0.3s;
  }
  
  .sidebar a:hover {
    color: black;
  }

  @media screen and (max-height: 450px) {
    .sidebar {padding-top: 15px;}
    .sidebar a {font-size: 18px;}
  }
</style>
