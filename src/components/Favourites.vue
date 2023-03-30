<script setup>
import { ref } from 'vue';
import { store, clearFavourites } from '../functions/storeFavourites';

defineProps({
  data: {
    type: Object
  }
})

const open = ref(false);

function toggleOpen() {
  open.value = !open.value;
}

</script>


<template>
    <button class="open" @click="toggleOpen">Show Favourites</button>
    <div :class="['favourites', { show: open }]">
      <button class="close" @click="toggleOpen">Close</button>

      <button class="removeFavourites" @click="clearFavourites">Remove All Favourites</button>
      <h2>Favourite photos</h2>
      <div class="images">
        <div class="image" v-for="photo in data" :key="photo.id">
            <img :src="photo.src.medium" v-if="store.favourites.includes(photo.id)"/>
        </div>
       
      </div>
    </div>
  </template>


<style scoped>
.favourites {
    position: relative;
    background: white;
    height: 80vh;
    width: 300px;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    z-index: 1;
    padding: 30px;
    padding-top: 100px;
    transform: translateX(-110%);
    border-radius: 0 0 20px 20px;
    transition: 0.3s;
}
.favourites.show {
    transform: translateX(0%);
}
.favourites:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url('../assets/bg-favourites.jpg');
    background-size: cover;
    filter: blur(5px);
    z-index: -1;
}
.favourites .images {
    display: flex;
    flex-wrap: wrap;
    gap: 0px;
}
.favourites .images img {
    width: 70px;
    height: 70px;
    border-radius: 100px;
    position: relative;
    margin: 5px -10px;
    object-fit: cover;
    transition: 0.3s;
}
.favourites .images img:hover {
    transform: scale(2);
}
.removeFavourites {
    background: none;
    outline: none;
    color: black;
    border: 1px solid black;
    border-radius: 25px;
    padding: 15px;
    transition: 0.3s;
}
.removeFavourites:hover {
    background: black;
    color: white;
}
.close {
    background: black;
    color: white;
    outline: none;
    border: 1px solid black;
    padding: 18px 10px;
    border-radius: 50px;
    transition: 0.3s;
}
.close:hover {
    transform: scale(1.2);
    box-shadow: 0 0 2px 5px black;
}
.open {
    max-width: 150px;
    background: black;
    color: white;
    outline: none;
    border: 1px solid black;
    padding: 15px 30px;
    border-radius: 50px;
    line-height: 20px;
    position: fixed;
    bottom: 50px;
    right: 10vw;
    transition: 0.3s;
}
.open::before {
    animation: pulse 2s ease infinite;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 100px;
    position: absolute;
    content: "";
    z-index: -1;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
}
@keyframes pulse {
    0% {
        transform: scale(1);
   }
    50% {
        opacity: 0.2;
   }
    100% {
        transform: scale(1.2, 1.4);
        opacity: 0;
   }
}
.open:hover {
    transform: scale(1.2);
    box-shadow: 0 0 2px 5px black;
}

</style>
  
 