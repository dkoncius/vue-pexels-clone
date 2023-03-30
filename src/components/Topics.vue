<script setup>
import { ref } from 'vue';

const links = ref([
  { text: 'People', url: '/people', selected: true },
  { text: 'Nature', url: '/nature' },
  { text: 'Music', url: '/music' },
  { text: 'Books', url: '/books' }
]);


const options = ref([
  { text: 'Trending', value: 'trending'},
  { text: 'New', value: 'new'},
  { text: 'Favourites', value: 'Favourites'}
]);

function selectTopic(event, selectedLink) {
  event.preventDefault();

  links.value.forEach(link => {
    if (link === selectedLink) {
      link.selected = true;
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
        <select name="filter" id="fitler">
            <option v-for="option in options" :value="option.value">{{ option.text }}</option>
        </select>
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
    height: 150px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.filter select {
    border: 1px solid grey;
    color: rgba(0, 0, 0, 0.676);
    border-radius: 4px;
    padding: 10px;
    outline: none;
    font-size: 1.1em;
    font-weight: bold;
}

.filter select {
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
}

</style>