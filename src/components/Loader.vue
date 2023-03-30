<template>
    <div class="photos">
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
    </div>
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
     background: grey;
      position: relative;
      height: 200px;
      border-radius: 8px;
      animation: pulse 1s infinite alternate;
  }

  @keyframes pulse {
    from{background: grey}
    to{background: rgba(87, 86, 86, 0.833)}
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

  
</style>
