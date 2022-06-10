<template>

<div class="myForm center" id ="forma">
   <form @submit.prevent="submit">
    <label class="addMargin" for="fname">Current Name:</label><br>
    <input class="addMargin1" type="text" id="fname" name="fname" value=""><br>
    <label class="addMargin" for="lname">New Name:</label><br>
    <input class="addMargin1" type="text" id="lname2" name="lname" placeholder="Put your Name"><br><br>
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
import {reactive} from 'vue';
import {useRouter} from 'vue-router';
    export default{
    name:"Name",
    setup(){
        const data = reactive({
            name:'',
            password:''
        })
        const router = useRouter();
        const submit = async () => {
            await fetch("http://localhost:3000/register", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(data)
            })
            await router.push('/');
        }
        return{
            data,
            submit
        }
    }
}
</script>
<style>  .test{
      color:red;
  }
  .logo{
      /* background-color: blueviolet; */
      height: 100px;
  }
  .logo img{
      width: 100px;
      height: 100px;
      margin-left:50px;
  }
  .logo p{
    color: rgb(111,147,187);
    font-size:30px;
  }
  .myForm{
    background-color: rgb(111,147,187);
    position: relative;
    top: 200px;
    font-size: 30px;
    margin-bottom: 5%;
    border-radius: 5px;
  }
  .addMargin{
    margin: 1% 0 1% 1%;
    color: white;
  }
  .addMargin1{
    margin: 1% 0 1% 1%;
    color: rgb(54, 39, 39);
  }
  .addMargin2{   
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2%;
    width: 40%;
  }
  .center {
    margin-left: auto;
    margin-right: auto;
    margin-top:-2.5%;
    width: 50%;
    border-bottom: 1px solid rgb(111,147,187);
    padding: 10px;
  }
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
  
  /* .sidebar .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  
  .openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: #111;
    color: white;
    padding: 10px 15px;
    border: none;
  }
  
  .openbtn:hover {
    background-color: #444;
  } */
  
  #main {
    transition: margin-left .5s;
    padding: 16px;
  }
  
  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidebar {padding-top: 15px;}
    .sidebar a {font-size: 18px;}
  }</style>