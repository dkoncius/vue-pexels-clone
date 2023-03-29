<script setup>

defineProps({
  data: {
    type: Object
  }
})


const getPhoto = (photo) => {
    const limit = 15
    let title = ''
    let url = ''

    // If no alt text
    if(photo.alt){
    title = photo.alt
    } else {
    url = photo.url.slice(29, photo.url.length).split("-").join(" ")
    title = url
    }

    // If title to long
    if(title.length > limit) title = title.substring(0, limit) + "..."

    return {
        medium: photo.src.medium,
        large: photo.src.large2x,
        splice: photo.url.slice(29, photo.url.length).split("-").join(" "),
        title: title
    }
}
</script>

<template>
    <div class="photos" >
         <div class="photo" v-for="photo in data" :set="photo = getPhoto(photo)">
        <!-- Images with fallback -->
        <img v-if="photo.large" :src="photo.large" :alt="photo.title" />
        <img v-else="photo.medium" :src="photo.medium" :alt="photo.title" />
        <div class="photo_content">
          <h2>{{photo.title}}</h2>
          <hr>
          <button>Favourite</button>
        </div>
      </div>
    </div>
   
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,300&display=swap');
.photos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1000px;
    gap: 20px;
    justify-content: center;
    margin: auto;
    padding-bottom: 250px;
  }
  
  .photo {
      position: relative;
      max-width: 300px;
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
  
</style>
