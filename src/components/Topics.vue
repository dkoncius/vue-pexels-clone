<script setup>
import { ref } from 'vue';

const links = ref([
  { text: 'People', url: '/people', selected: true },
  { text: 'Nature', url: '/nature', selected: false },
  { text: 'Music', url: '/music', selected: false },
  { text: 'Books', url: '/books', selected: false }
]);

// Get the stored index from local storage
const storedIndex = localStorage.getItem('selectedLinkIndex');

// If a stored index exists, set the selected link based on the index
if (storedIndex !== null) {
  const index = parseInt(storedIndex);
  if (!isNaN(index)) {
    links.value.forEach((link, i) => {
      link.selected = i === index;
    });
  }
}

function selectTopic(event, selectedLink) {
  event.preventDefault();

  links.value.forEach((link, index) => {
    if (link === selectedLink) {
      link.selected = true;
      // Store the selected index in local storage
      localStorage.setItem('selectedLinkIndex', index.toString());
    } else {
      link.selected = false;
    }
  });
}
</script>

<template>
  <div class="topics">
    <router-link v-for="(link, index) in links" :key="index" :to="link.url" :class="{ selected: link.selected }" @click="selectTopic($event, link)">
      {{ link.text }}
    </router-link>
  </div>
  <div class="filter">
    <h2>Free Stock Photos</h2>
  </div>
</template>


<style scoped>
.topics {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.topics a {
    text-decoration: none;
    color: white;
    background: transparent;
    padding: 15px 25px;
    border: none;
    border-radius: 25px;
    color: rgba(0, 0, 0, 0.658);
    font-weight: 600;
}

.topics a.selected {
    background: black;
    color: white;
}

.filter {
    max-width: 1000px;
    width: 90%;
    line-height: 150px;
    margin: auto;
}

@media (max-width: 600px){
  .topics {
    gap: 0px;
  }

  .topics a {
    padding: 15px;
    font-size: 0.9em;
  }
}

</style>