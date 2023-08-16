<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const links = [
  { text: 'People', url: '/people' },
  { text: 'Nature', url: '/nature' },
  { text: 'Music', url: '/music' },
  { text: 'Books', url: '/books' }
];

const route = useRoute();

const selectedTopic = computed(() => {
  // Get the term from the route params or the URL path
  const term = route.params.term || route.path.split('/')[1];

  // Capitalize the first letter and return the full topic text
  return term.charAt(0).toUpperCase() + term.slice(1);
});

const isSelected = link => link.url.split('/')[1] === (route.params.term || route.path.split('/')[1]);
</script>

<template>
  <div class="topics">
    <router-link v-for="(link, index) in links" :key="index" :to="link.url" :class="{ selected: isSelected(link) }">
      {{ link.text }}
    </router-link>
  </div>
  <div class="filter">
    <h2>{{ selectedTopic }} Stock Photos</h2>
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