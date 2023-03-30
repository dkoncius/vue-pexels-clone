<script setup>
    import { store } from '../functions/storeFavourites';
    import { getPhoto } from '../functions/getPhoto';
    import Favourites from './Favourites.vue';

    defineProps({
        data: {
          type: Object
        }
    })
   
    const addToFavourites = (id) => {
      store.addToFavourites(id);
    }

</script>

<template>
  <div class="photos">
    <div class="photo" v-for="photo in data" :set="photo = getPhoto(photo)" :id="photo.id" :key="photo.id">
      <!-- Images with fallback -->
      <img v-if="photo.large" :src="photo.large" :alt="photo.title" />
      <img v-else="photo.medium" :src="photo.medium" :alt="photo.title" />
      <div class="photo_content">
        <h2>{{photo.title}}</h2>
        <hr>
        <button @click="addToFavourites(photo.id)" :class="[store.favourites.includes(photo.id) ? 'selected' : '']">Favourite</button>
      </div>
    </div>
  </div>
  <Favourites :data="data"/>
</template>


<style scoped>
.photos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1000px;
    width: 90%;
    gap: 30px;
    justify-content: center;
    margin: auto;
    padding-bottom: 250px;
    animation: fadeIn 1s ease;
  }

  @keyframes fadeIn {
    from {opacity: 0}
    to {opacity: 1}
  }

  @media (max-width: 768px){
    .photos {
        grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 500px){
    .photos {
      grid-template-columns: 1fr;
      max-width: 300px;
   }

  }

  
  .photo {
      position: relative;
      height: 200px;
      border-radius: 8px;
  }
  
  .photo::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    opacity: 0;
    transition: 0.3s;
  }
  
  .photo:hover::before,
  .photo:hover .photo_content {
    opacity: 1;
  }
  
  .photos img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 2px 2px 2px grey;
    border-radius: 8px
  }
  
  .photo_content {
    opacity: 0;
    color: white;
    position: absolute;
    top: 10px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 80%;
    height: 80%;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    transition: 0.3s;
  }
  h2 {
    font-weight: 900;
    white-space: none;
    word-wrap: nowrap;
    text-transform: capitalize; 
  }
  
  hr {
    width: 30%;
    height: 2px;
    background: white;
    border: none;
    outline: none;
  }
  
  p {
    font-weight: 600;
    font-style: italic;
  }


  button {
    background: none;
    outline: none;
    border: 1px solid white;
    color: white;
    padding: 10px;
    width: 80%;
    border-radius: 20px;
    transition: 0.3s;
  }
  
  button.selected {
    background: linear-gradient(300deg, white, lightgray);
    color: grey;
    animation: button-animation 0.3s ease-in-out;
  }
  
  
  @keyframes button-animation {
    0% {transform: rotate(0deg)}
    25% {transform: rotate(-5deg);}
    50% {transform: rotate(5deg);}
    75% {transform: rotate(-5deg);}
    100% {transform: rotate(0deg);}
  }
  
</style>
